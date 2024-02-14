// pages/_middleware.js or middleware.js at the root
import { NextResponse } from 'next/server';
import logger from './utils/logger'; // Ensure the path to logger is correct

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const method = request.method;
  logger.info(`Method: ${method}, Path: ${pathname}`);

  return NextResponse.next();
}
