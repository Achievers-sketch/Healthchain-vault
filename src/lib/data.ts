import type { LucideIcon } from 'lucide-react';
import { Apple, HeartPulse, Activity } from 'lucide-react';

export type Record = {
  id: string;
  name: string;
  type: 'PDF' | 'JSON' | 'Image' | 'Genome';
  date: string;
  size: string;
};

export const records: Record[] = [
  {
    id: 'REC001',
    name: 'Annual Check-up Results',
    type: 'PDF',
    date: '2023-10-15',
    size: '1.2 MB',
  },
  {
    id: 'REC002',
    name: 'MRI Scan - Left Knee',
    type: 'Image',
    date: '2023-09-22',
    size: '15.8 MB',
  },
  {
    id: 'REC003',
    name: 'Blood Test Panel',
    type: 'JSON',
    date: '2023-10-14',
    size: '50 KB',
  },
  {
    id: 'REC004',
    name: 'Genomic Sequence Data',
    type: 'Genome',
    date: '2023-08-01',
    size: '1.1 GB',
  },
  {
    id: 'REC005',
    name: 'Prescription - Amoxicillin',
    type: 'PDF',
    date: '2023-11-02',
    size: '300 KB',
  },
];

export type AccessLog = {
  id: string;
  requester: string;
  requesterType: 'Hospital' | 'Clinic' | 'Research';
  record: string;
  date: string;
  status: 'Granted' | 'Revoked';
};

export const accessLogs: AccessLog[] = [
  {
    id: 'LOG001',
    requester: 'General Hospital',
    requesterType: 'Hospital',
    record: 'Annual Check-up Results',
    date: '2023-11-01',
    status: 'Granted',
  },
  {
    id: 'LOG002',
    requester: 'Cardio Clinic',
    requesterType: 'Clinic',
    record: 'Blood Test Panel',
    date: '2023-10-20',
    status: 'Granted',
  },
  {
    id: 'LOG003',
    requester: 'Bio-Future Research',
    requesterType: 'Research',
    record: 'Genomic Sequence Data (Anonymized)',
    date: '2023-09-05',
    status: 'Revoked',
  },
];

export type Integration = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  connected: boolean;
};

export const integrations: Integration[] = [
  {
    id: 'INT001',
    name: 'Apple Health',
    description: 'Sync your health data from your Apple devices.',
    icon: Apple,
    connected: true,
  },
  {
    id: 'INT002',
    name: 'Fitbit',
    description: 'Import your activity, sleep, and heart rate data.',
    icon: HeartPulse,
    connected: false,
  },
  {
    id: 'INT003',
    name: 'Google Fit',
    description: 'Connect with Google Fit to sync your health metrics.',
    icon: Activity,
    connected: false,
  },
];
