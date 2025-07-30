import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';

// 認証ページのパス（認証済みの場合はアクセス禁止）
const authPages = ['/sign-in', '/sign-up'];

// 保護されたページのパス（未認証の場合はアクセス禁止）
const protectedPages = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const sessionCookie = getSessionCookie(request);

  // 認証済みユーザーが認証ページにアクセスした場合
  if (sessionCookie && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 未認証ユーザーが保護ページにアクセスした場合
  if (!sessionCookie && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sign-in', '/sign-up', '/dashboard'],
};
