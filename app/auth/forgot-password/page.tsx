import type { Metadata } from 'next';
import ForgotPasswordForm from './ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password | OrbitChain',
  description:
    'Reset your OrbitChain password securely via email verification.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
