import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24, // 1 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
