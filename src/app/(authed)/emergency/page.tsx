'use client';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle, QrCode } from 'lucide-react';
import React, { useState } from 'react';

const QrCodeSvg = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0h30v30H0V0ZM10 10v10h10V10H10Z" fill="currentColor"></path>
        <path d="M40 0h60v10H40V0ZM0 40h10v20H0V40ZM40 40h10v10H40V40ZM60 40h10v10H60V40ZM80 40h10v10H80V40ZM20 50h10v10H20V50ZM40 50h10v10H40V50ZM50 60h10v10H50V60ZM70 60h10v10H70V60ZM90 60h10v10H90V60ZM0 70h30v30H0V70Zm10 10v10h10V80H10Z" fill="currentColor"></path>
        <path d="M70 70h30v30H70V70Zm10 10v10h10V80H80Z" fill="currentColor"></path>
        <path d="M40 20h10v10H40V20ZM60 20h10v10H60V20ZM40 70h10v10H40V70Z" fill="currentColor"></path>
    </svg>
);


export default function EmergencyPage() {
  const [showQr, setShowQr] = useState(false);

  return (
    <>
      <PageHeader
        title="Emergency Access"
        subtitle="Grant temporary, read-only access to your vital info in critical situations."
      />
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle />
            Critical Action
          </CardTitle>
          <CardDescription>
            Generating an emergency QR code creates a temporary key that allows
            first responders or doctors to view a pre-selected set of your vital
            health information. This access is logged and expires automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {showQr ? (
            <div className="space-y-4">
              <div className="mx-auto w-64 h-64 p-4 border rounded-lg bg-white">
                <QrCodeSvg />
              </div>
              <p className="text-muted-foreground">
                Allow a trusted medical professional to scan this code.
              </p>
              <Button variant="outline" onClick={() => setShowQr(false)}>
                Hide Code
              </Button>
            </div>
          ) : (
            <Button
              size="lg"
              variant="destructive"
              onClick={() => setShowQr(true)}
            >
              <QrCode className="mr-2 h-5 w-5" />
              Generate Emergency QR Code
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
