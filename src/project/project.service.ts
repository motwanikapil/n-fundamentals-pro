import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { Developer } from './schemas/developer.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(Developer.name) private developerModel: Model<Developer>,
  ) {}

  async createProject(): Promise<{ dev1: Developer; dev2: Developer }> {
    const [projectA, projectB] = await Promise.all([
      this.projectModel.create({
        title: 'nest crm',
      }),
      this.projectModel.create({
        title: 'mongo analytics',
      }),
    ]);

    const [dev1, dev2] = await Promise.all([
      this.developerModel.create({
        name: 'Kapil',
        projects: [projectA._id, projectB._id],
      }),
      this.developerModel.create({
        name: 'Kapil Motwani',
        projects: [projectA._id],
      }),
    ]);

    await Promise.all([
      this.projectModel.findByIdAndUpdate(projectA._id, {
        $set: { developers: [dev1._id, dev2._id] },
      }),
      this.projectModel.findByIdAndUpdate(projectB._id, {
        $set: { developers: [dev1._id] },
      }),
    ]);

    return { dev1, dev2 };
  }

  async getDevelopers(): Promise<Developer[]> {
    return this.developerModel.find().populate('projects').lean(); // lean makes the query
    // faster saves memory good for reading queries
  }

  async getProjects(): Promise<Project[]> {
    return this.projectModel.find().populate('developers').lean(); // lean makes the query
    // faster saves memory good for reading queries
  }
}
