import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-background">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <ShieldCheck className="mx-auto h-24 w-24 text-primary" />
        <h1 className="mt-8 text-5xl font-headline font-bold text-gray-800 md:text-6xl">
          HealthChain Vault
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A secure, user-owned Web3 vault where you can store, encrypt, and
          selectively share your medical data with complete sovereignty.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="font-bold">
            <Link href="/dashboard">Connect Wallet &amp; Enter Vault</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Your keys, your data, your health.
        </p>
      </div>
    </main>
  );
}
