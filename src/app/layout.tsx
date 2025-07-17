import type { Metadata } from "next";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderNav from "@/components/layout/headerNav";
import { roboto } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Nitro Crown",
    default: "Nitro Crown"
  },
  description: "Concesionario de vehículos deportivos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={`${roboto.className} text-contrast min-h-dvh relative bg-primary`}>
          <HeaderNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
