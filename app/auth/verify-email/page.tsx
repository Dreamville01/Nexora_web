import VerifyEmail from './VerifyEmail';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | Nexora',
  description: 'Verify your email address to activate your Nexora account.',
};

export default function VerifyEmailPage() {
  return <VerifyEmail />;
}
