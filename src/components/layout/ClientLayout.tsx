import { PageTransitionProvider } from "@/providers/PageTransitionProvider";

export default function ClientLayout({children}: {children: React.ReactNode}) {
    return (
        <PageTransitionProvider>
            {children}
        </PageTransitionProvider>
    )
}