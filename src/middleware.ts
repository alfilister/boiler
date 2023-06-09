import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/')) {
		console.log('middleware action here', request.method, request.url)
	}
	return NextResponse.next()
}

// See "Matching Paths" below to learn more
// export const config = {
// 	// matcher: '/about/:path*',
// 	matcher: ['api/entries/:path'],
// }
