import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }: { auth: any; request: { nextUrl: URL } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/gyms')
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/gyms', nextUrl))
            }
            return true
        }
    },
    providers: []
}