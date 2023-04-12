import { CommonInterface } from '../common/common.interface';
import { Role } from '../role/role.interface';

export interface User extends CommonInterface {
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  email: string;
  password: string;
  roles: Role[];
}