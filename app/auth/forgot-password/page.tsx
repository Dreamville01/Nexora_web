import type { Metadata } from 'next';
import ForgotPasswordForm from './ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password | Nexora',
  description:
    'Reset your Nexora password securely via email verification.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
