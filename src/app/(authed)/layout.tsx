import { MobileNav } from '@/components/mobile-nav';
import { Sidebar } from '@/components/sidebar';
import { User } from 'lucide-react';
import type { ReactNode } from 'react';

export default function AuthedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex flex-col md:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end md:px-8">
          <MobileNav />
          {/* User menu could be here for mobile if not in sidebar */}
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
