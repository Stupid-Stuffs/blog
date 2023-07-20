import api from '@/lib/axios'
import { setTokenToLocalStorage } from '@/lib/token'
import { read } from 'gray-matter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // async signIn() { return true },
  },
  debug: true,
})
