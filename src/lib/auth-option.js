import GoogleProvider from 'next-auth/providers/google'

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  session: {
    maxAge: 24 * 60 * 60
  },
  pages: {
    signIn: '/',
    signOut: '/'
  }
}