import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';

import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({subsets : ['latin']});

export const metadata: Metadata = {
  title: "Let's Meet",
  description: "Video conferencing made easy",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout:{
            // logo attach here clerk
            // logoImageUrl: '/icons/lets-meet.svg',
            socialButtonsVariant: 'iconButton',
          },
          variables:{
            colorText : '#fff',
            colorPrimary : '#0e78f9',
            colorBackground : '#1c1f2e',
            colorInputBackground : "#252a41",
            colorInputText : "#fff"
          }
        }}
      >
        <body className={`${inter.className} bg-dark-2`} >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
