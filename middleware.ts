import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/', '/about', '/register', '/sign-in', '/sign-up'],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    // if (auth.userId) {
    //   const orgSelection = new URL('/', req.url);
    //   return NextResponse.redirect(orgSelection);
    // }

    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }

    return NextResponse.next()
  },
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
