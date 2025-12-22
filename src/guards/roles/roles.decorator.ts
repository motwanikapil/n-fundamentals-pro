import { SetMetadata } from '@nestjs/common'; // this method helps to inject multiple values in decorator

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
