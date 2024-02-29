'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function AuthProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
