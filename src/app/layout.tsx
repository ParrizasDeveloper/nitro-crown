import type { Metadata } from "next";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderNav from "@/components/layout/headerNav";
import { roboto } from "@/styles/fonts";
import { ScrollbarProvider } from "@/providers/ScrollbarProvider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Footer from "@/components/layout/footer";
import ClientLayout from "@/components/layout/ClientLayout";

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
            <ClientLayout>
              <HeaderNav />
              <SmoothScrollProvider>
                <main id="main" className={`
                  ${roboto.className} relative text-neutral-light bg-base w-screen
                  z-10 
                `}>
                  {children}
                </main>
                <Footer />
              </SmoothScrollProvider>
            </ClientLayout>
          </body>
        </ScrollbarProvider>
      </html>
    </ClerkProvider>
  );
}
