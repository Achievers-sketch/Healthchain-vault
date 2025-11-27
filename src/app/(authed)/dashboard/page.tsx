import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FileText,
  Share2,
  HeartPulse,
  QrCode,
  ArrowUpRight,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const quickLinks = [
  {
    title: 'My Records',
    description: 'View &amp; manage your encrypted health documents.',
    icon: FileText,
    href: '/records',
    count: '5',
  },
  {
    title: 'Sharing &amp; Access',
    description: 'Control who can view your medical data.',
    icon: Share2,
    href: '/sharing',
    count: '2',
  },
  {
    title: 'Integrations',
    description: 'Connect with wearables and other health apps.',
    icon: HeartPulse,
    href: '/integrations',
    count: '1',
  },
  {
    title: 'Emergency Access',
    description: 'Generate a QR code for emergency situations.',
    icon: QrCode,
    href: '/emergency',
    count: 'Ready',
  },
];

const recentActivity = [
  {
    action: 'Uploaded',
    item: 'Blood Test Panel.json',
    date: '2 hours ago',
  },
  {
    action: 'Shared',
    item: 'Annual Check-up with Dr. Smith',
    date: '1 day ago',
  },
  {
    action: 'Revoked',
    item: 'Access from Cardio Clinic',
    date: '3 days ago',
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's a summary of your health vault."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Card
            key={link.title}
            className="group transition-all hover:shadow-md hover:-translate-y-1"
          >
            <Link href={link.href} className="block h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {link.title}
                </CardTitle>
                <link.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {link.count}
                </div>
                <p className="text-xs text-muted-foreground">
                  {link.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              A log of recent actions in your vault.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Badge
                        variant={
                          activity.action === 'Uploaded'
                            ? 'default'
                            : activity.action === 'Shared'
                            ? 'secondary'
                            : 'destructive'
                        }
                        className="bg-accent text-accent-foreground"
                      >
                        {activity.action}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {activity.item}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {activity.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="text-primary" />
              Security Center
            </CardTitle>
            <CardDescription>
              Keep your vault secure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">✓</div>
                  <div>
                      <h4 className="font-semibold">DID Authentication</h4>
                      <p className="text-sm text-muted-foreground">Your identity is verified via your wallet.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">✓</div>
                  <div>
                      <h4 className="font-semibold">AES-256 Encryption</h4>
                      <p className="text-sm text-muted-foreground">All your data is encrypted client-side.</p>
                  </div>
              </div>
               <Button variant="outline" className="w-full">Review Security Settings</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
