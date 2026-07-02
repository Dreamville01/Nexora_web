import type { Metadata } from 'next';
import ResetPasswordForm from './ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Reset Password | Nexora',
  description: 'Create a new password for your Nexora account.',
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}