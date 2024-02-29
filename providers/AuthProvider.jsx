'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function AuthProviders({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
