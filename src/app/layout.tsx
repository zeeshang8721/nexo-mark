// /src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/Components/Common/ClientWrapper";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favi.png", sizes: "48x48", type: "image/png" }],
    shortcut: "/favi.png",
    apple: "/favi.png",
    other: {
      rel: "icon",
      url: "/favi.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
