'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ShieldQuestion } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';

export function ShareDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <ShieldQuestion className="h-6 w-6 text-accent" />
            Selective Data Sharing
          </DialogTitle>
          <DialogDescription>
            Generate a Zero-Knowledge Proof to share specific information
            without revealing the underlying document.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="requester">Requester's DID or Email</Label>
            <Input id="requester" placeholder="did:ethr:0x..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="record">Select Source Record</Label>
            <Select>
              <SelectTrigger id="record">
                <SelectValue placeholder="Choose a record..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rec1">Annual Check-up Results</SelectItem>
                <SelectItem value="rec2">Blood Test Panel</SelectItem>
                <SelectItem value="rec3">ID Document</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Select Information to Prove</Label>
            <div className="flex items-center space-x-2 rounded-md border p-3">
              <Checkbox id="proof1" />
              <Label htmlFor="proof1" className="text-sm font-normal">
                Prove I am over 18 years old.
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-md border p-3">
              <Checkbox id="proof2" />
              <Label htmlFor="proof2" className="text-sm font-normal">
                Prove my blood type is O+.
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-md border p-3">
              <Checkbox id="proof3" />
              <Label htmlFor="proof3" className="text-sm font-normal">
                Prove I am not allergic to penicillin.
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 sm:w-auto">
            Generate &amp; Share Proof
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
