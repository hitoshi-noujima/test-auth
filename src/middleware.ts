import { betterFetch } from '@better-fetch/fetch';
import { NextRequest, NextResponse } from 'next/server';

import type { auth } from '@/lib/auth';

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 認証ページのパス（認証済みの場合はアクセス禁止）
  const authPages = ['/sign-in', '/sign-up'];

  // 保護されたページのパス（未認証の場合はアクセス禁止）
  const protectedPages = ['/dashboard'];

  const { data: session } = await betterFetch<Session>('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  });

  // 認証済みユーザーが認証ページにアクセスした場合
  if (session && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 未認証ユーザーが保護ページにアクセスした場合
  if (!session && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sign-in', '/sign-up', '/dashboard'],
};
