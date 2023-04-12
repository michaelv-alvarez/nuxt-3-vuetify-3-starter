import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import AuthService from '../../../services/auth/auth.service'
import { LoginCredentials } from '../../../interfaces/auth/login-credentials.interface';

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    CredentialsProvider.default({
      name: 'Credenciales',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: '(hint: john@doe.com)' },
        password: { label: 'Contraseña', type: 'password', placeholder: '(hint: AVerySecretPassword)' }
      },
      async authorize(credentials: LoginCredentials) {
        console.log('Autorizando...');
        const authService = new AuthService();
        const res = await authService.login({ credentials });
        console.log('Autorizacion: ', res);
        return res;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.user = (user as any).user;
        token.accessToken = (user as any).accessToken;
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      (session as any).user = token.user;
      (session as any).accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },

})