import Signup from './SignupForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Nexora',
  description:
    'Sign up for an Nexora account to start supporting causes on the Stellar Network.',
};

export default function SignupPage() {
  return <Signup />;
}

