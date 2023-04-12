import { CommonInterface } from '../common/common.interface';
import { Permission } from '../permission/permission.interface';

export interface Role extends CommonInterface{
  name: string;
  permissions: Permission[];
}