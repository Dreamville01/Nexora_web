import VerifyEmail from './VerifyEmail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | OrbitChain',
  description: 'Verify your email address to activate your OrbitChain account.',
};

export default function VerifyEmailPage() {
  return <VerifyEmail />;
}
