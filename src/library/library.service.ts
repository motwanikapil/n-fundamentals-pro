import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Library.name) private libraryModel: Model<Library>,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}

  async createLibrary(): Promise<Library> {
    const book1 = await this.bookModel.create({
      title: 'Js ka champion',
      author: 'Kapil',
    });
    const book2 = await this.bookModel.create({
      title: `World's richest person`,
      author: 'Kapil Motwani',
    });

    const library = await this.libraryModel.create({
      name: 'Central Library',
      books: [book1._id, book2._id],
    });

    return library.save();
  }

  async getLibraries(): Promise<Library[]> {
    return this.libraryModel.find().populate('books').exec();
  }
}
