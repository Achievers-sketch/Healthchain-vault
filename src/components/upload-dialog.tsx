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
import { FileUp, UploadCloud } from 'lucide-react';
import type { ReactNode } from 'react';

export function UploadDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <FileUp className="h-6 w-6 text-primary" />
            Upload New Record
          </DialogTitle>
          <DialogDescription>
            Select a file from your device. It will be encrypted client-side
            before upload.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="record-name">Record Name / Description</Label>
            <Input
              id="record-name"
              placeholder="e.g., Annual Blood Test Results"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="record-file">File</Label>
            <div className="relative flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background hover:bg-muted">
              <UploadCloud className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">PDF, JSON, PNG, JPG, etc.</p>
              <Input id="record-file" type="file" className="absolute h-full w-full opacity-0" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full sm:w-auto">
            Encrypt &amp; Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
