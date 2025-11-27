'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Share2,
  HeartPulse,
  QrCode,
  ShieldCheck,
  User,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/records', icon: FileText, label: 'My Records' },
  { href: '/sharing', icon: Share2, label: 'Sharing &amp; Access' },
  { href: '/integrations', icon: HeartPulse, label: 'Integrations' },
  { href: '/emergency', icon: QrCode, label: 'Emergency Access' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-20 hidden h-full w-64 flex-col border-r bg-card/80 backdrop-blur-sm md:flex">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3 border-b px-6 py-5">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-headline font-semibold text-gray-800">
            HealthChain Vault
          </h1>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary',
                {
                  'bg-primary/10 font-medium text-primary': pathname === item.href,
                }
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto border-t p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-auto w-full items-center justify-start gap-3 p-2 text-left"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="truncate">
                  <p className="text-sm font-medium">User Wallet</p>
                  <p className="truncate text-xs text-muted-foreground">
                    0x1234...5678
                  </p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Disconnect</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}
