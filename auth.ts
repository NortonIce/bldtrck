import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { sql } from '@vercel/postgres'
import type { User } from '@/app/lib/definitions'
import bcrypt from 'bcrypt'

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({})]
})
