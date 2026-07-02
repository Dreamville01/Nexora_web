import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Sign In | Nexora',
  description:
    'Sign in to your Nexora account to continue supporting causes on the Stellar Network.',
};

export default function LoginPage() {
  return <LoginForm />;
}
