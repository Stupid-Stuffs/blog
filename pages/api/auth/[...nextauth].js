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
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
                token.id_token = account.id_token
                token.token_type = account.token_type
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            session.accessToken = token.accessToken
            session.id_token = token.id_token
            session.token_type = token.token_type

            return session
        },
        async signIn() {
            return true
        },
    },
    debug: true,
})
