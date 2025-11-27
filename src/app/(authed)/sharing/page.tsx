import { PageHeader } from '@/components/page-header';
import { ShareDialog } from '@/components/share-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { accessLogs } from '@/lib/data';
import { UserPlus, ShieldQuestion } from 'lucide-react';

export default function SharingPage() {
  return (
    <>
      <PageHeader
        title="Sharing &amp; Access"
        subtitle="Manage who can access your data and view activity."
      >
        <ShareDialog>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Share Data Selectively
          </Button>
        </ShareDialog>
      </PageHeader>
      <div className="grid gap-8">
        <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <ShieldQuestion className="text-accent"/>
                    Zero-Knowledge Sharing
                </CardTitle>
                <CardDescription>
                    Use ZK-Proofs to share specific facts about your health data without revealing the data itself. For example, prove you are over 18 or that your blood type is A+ without showing your ID or lab results.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ShareDialog>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/20 hover:text-accent">
                        Create a New Proof
                    </Button>
                </ShareDialog>
            </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Access History</CardTitle>
            <CardDescription>
              Log of all granted and revoked access to your health records.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Requester</TableHead>
                    <TableHead className="hidden md:table-cell">Record Accessed</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accessLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <span>{log.requester}</span>
                          <span className="text-xs text-muted-foreground">
                            {log.requesterType}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{log.record}</TableCell>
                      <TableCell className="hidden sm:table-cell">{log.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            log.status === 'Granted' ? 'secondary' : 'destructive'
                          }
                          className={
                              log.status === 'Granted' ? 'bg-green-100 text-green-800' : ''
                          }
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {log.status === 'Granted' && (
                          <Button variant="link" className="h-auto p-0 text-destructive">
                            Revoke
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
