import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
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
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name.split(' ').join('').toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  // adapter: myHttpAdapter,
});

export { handler as GET, handler as POST };
