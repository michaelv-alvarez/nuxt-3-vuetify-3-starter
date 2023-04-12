import { LoginCredentials } from '../../interfaces/auth/login-credentials.interface';
import { LoginResponse } from '../../interfaces/auth/login-response.interface';
import { User } from '../../interfaces/user/user.interface';

export default class AuthService {
  constructor() { }

  public async login({ credentials }: { credentials: LoginCredentials }): Promise<LoginResponse | null> {
    try {
      console.log(`${process.env.NUXT_PUBLIC_API_BASE_URL}/auth/login`);
      return await $fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: 'POST',
        body: { email: credentials.email, password: credentials.password },
      })
    } catch (error) {
      console.log('Error al realizar login.');
      console.log(error);
      return null;
    }
  }

  public async user(): Promise<User> {
    try {
      const user = await useCustomFetch(`/auth/user`, {
        method: 'GET',
      });
      return (user.data as any);
    } catch (error) {
      console.log("Ha ocurrido un error!");
      console.log(error);
      throw error;
    }
  }
}