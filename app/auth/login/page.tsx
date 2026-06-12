import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Sign In | OrbitChain',
  description:
    'Sign in to your OrbitChain account to continue supporting causes on the Stellar Network.',
};

export default function LoginPage() {
  return <LoginForm />;
}
