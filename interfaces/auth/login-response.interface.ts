import { User } from '../user/user.interface';

export interface LoginResponse {
  user: User;
  accessToken: string;
}