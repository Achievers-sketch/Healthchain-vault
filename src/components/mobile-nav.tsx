'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import {
  Menu,
  ShieldCheck,
  LayoutDashboard,
  FileText,
  Share2,
  HeartPulse,
  QrCode,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/records', icon: FileText, label: 'My Records' },
  { href: '/sharing', icon: Share2, label: 'Sharing &amp; Access' },
  { href: '/integrations', icon: HeartPulse, label: 'Integrations' },
  { href: '/emergency', icon: QrCode, label: 'Emergency Access' },
];

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-headline font-semibold text-gray-800">
                HealthChain
              </h1>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-3 text-lg text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary',
                {
                  'bg-primary/10 font-medium text-primary': pathname === item.href,
                }
              )}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

import * as React from 'react';
