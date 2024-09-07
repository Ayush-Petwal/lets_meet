import StreamVideoProvider from '@/providers/StreamClientProviders'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Meet",
  description: "Video conferencing made easy",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ( {children } : {children : ReactNode} ) => {
  return (
    <main>
        <StreamVideoProvider>
          {children}        
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
