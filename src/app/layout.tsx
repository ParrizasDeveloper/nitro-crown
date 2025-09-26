import type { Metadata } from "next";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderNav from "@/components/layout/headerNav";
import { roboto } from "@/styles/fonts";
import { ScrollbarProvider } from "@/context/ScrollbarProvider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

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
        <ScrollbarProvider>
          <body>
            <HeaderNav />
            <SmoothScrollProvider>
              <main id="main" className={`
                ${roboto.className} relative text-neutral-light bg-base w-screen
              `}>
                {children}
              </main>
            </SmoothScrollProvider>
          </body>
        </ScrollbarProvider>
      </html>
    </ClerkProvider>
  );
}
