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
    name: 'Annual Physical Exam Results',
    type: 'PDF',
    date: '2024-05-20',
    size: '1.5 MB',
  },
  {
    id: 'REC002',
    name: 'X-Ray: Right Arm',
    type: 'Image',
    date: '2024-04-12',
    size: '8.2 MB',
  },
  {
    id: 'REC003',
    name: 'Allergy Test Panel',
    type: 'JSON',
    date: '2024-05-15',
    size: '75 KB',
  },
  {
    id: 'REC004',
    name: 'Full Genome Sequence',
    type: 'Genome',
    date: '2024-01-10',
    size: '2.3 GB',
  },
  {
    id: 'REC005',
    name: 'Prescription: Metformin',
    type: 'PDF',
    date: '2024-05-21',
    size: '250 KB',
  },
  {
    id: 'REC006',
    name: 'Dental Check-up & Cleaning',
    type: 'PDF',
    date: '2024-03-05',
    size: '780 KB',
  },
];

export type AccessLog = {
  id: string;
  requester: string;
  requesterType: 'Hospital' | 'Clinic' | 'Research' | 'Pharmacy';
  record: string;
  date: string;
  status: 'Granted' | 'Revoked';
};

export const accessLogs: AccessLog[] = [
  {
    id: 'LOG001',
    requester: 'St. Jude Medical Center',
    requesterType: 'Hospital',
    record: 'Annual Physical Exam Results',
    date: '2024-05-22',
    status: 'Granted',
  },
  {
    id: 'LOG002',
    requester: 'Downtown Dermatology Clinic',
    requesterType: 'Clinic',
    record: 'Allergy Test Panel',
    date: '2024-05-16',
    status: 'Granted',
  },
  {
    id: 'LOG003',
    requester: 'Veridian Dynamics Research',
    requesterType: 'Research',
    record: 'Full Genome Sequence (Anonymized)',
    date: '2024-03-15',
    status: 'Revoked',
  },
  {
    id: 'LOG004',
    requester: 'Community Pharmacy',
    requesterType: 'Pharmacy',
    record: 'Prescription: Metformin',
    date: '2024-05-21',
    status: 'Granted',
  },
    {
    id: 'LOG005',
    requester: 'St. Jude Medical Center',
    requesterType: 'Hospital',
    record: 'X-Ray: Right Arm',
    date: '2024-04-13',
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
    connected: true,
  },
  {
    id: 'INT003',
    name: 'Google Fit',
    description: 'Connect with Google Fit to sync your health metrics.',
    icon: Activity,
    connected: false,
  },
];
