import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  secret: 'xhbHxR5SnV+uvJaI5iGw3Zbcf8z0ztksXelsNd7EMY4=',
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    GoogleProvider({
      clientId: '581473169558-vo7fojm2c0f6bm2qdukm955e4v88r20c.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};

// export default NextAuth(authOptions);
