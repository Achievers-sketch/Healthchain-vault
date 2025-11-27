import { PageHeader } from '@/components/page-header';
import { UploadDialog } from '@/components/upload-dialog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { records } from '@/lib/data';
import {
  FileJson,
  FileText,
  FileUp,
  ImageIcon,
  MoreHorizontal,
  Share2,
  Trash2,
} from 'lucide-react';

const typeIcons = {
  PDF: <FileText className="h-5 w-5 text-red-600" />,
  JSON: <FileJson className="h-5 w-5 text-amber-600" />,
  Image: <ImageIcon className="h-5 w-5 text-blue-600" />,
  Genome: <span className="text-lg font-bold text-purple-600">G</span>,
};

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        title="My Records"
        subtitle="Manage your encrypted health documents and files."
      >
        <UploadDialog>
          <Button>
            <FileUp className="mr-2 h-4 w-4" />
            Upload Record
          </Button>
        </UploadDialog>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>
            Your files are encrypted with your private key before being stored
            on IPFS.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead className="w-[150px]">Date Uploaded</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
                <TableHead className="w-[50px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {typeIcons[record.type]}
                      <span>{record.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {record.size}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
