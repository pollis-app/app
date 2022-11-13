import React from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
// import { trpc } from "../utils/trpc";

import "../styles/globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>pollis</title>
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
