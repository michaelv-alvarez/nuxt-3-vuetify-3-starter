import { Role } from '../role/role.interface';

export interface Permission {
  id: number;
  name: string;
  showName: string;
  roles: Role[];

}