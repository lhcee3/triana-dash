import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import { Toaster } from '@/components/ui/toaster';
import { Badge } from '@/components/ui/badge';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Guardian Eye - Tourist Safety Platform',
  description: 'Advanced AI-powered tourist safety monitoring and incident response system',
};

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen">
          <SidebarProvider>
            <Sidebar className="glass border-r border-slate-600/30 bg-slate-900/80">
              <AppSidebar />
            </Sidebar>
            <SidebarInset className="flex-1 bg-transparent">
              {/* Top Right Badge */}
              <div className="fixed top-4 right-4 z-50">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 shadow-lg border border-white/20">
                  Badge #1234 • Active
                </Badge>
              </div>
              <main className="animate-fade-in">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
