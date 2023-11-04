import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/Google'
import { GoogleProfile } from 'next-auth/providers/Google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            profile(profile: GoogleProfile) {
                console.log(profile)
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    role: profile.role ?? 'user'
                }
            },

            clientId: process.env.GOOGLE__ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        //Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
    }
}