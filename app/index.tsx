import { AuthForm } from '@/components';
import { SafeScreen } from '@/components';

export default function AuthScreen() {
  return (
    <SafeScreen style={{ alignItems: 'center', justifyContent: 'center'}}>
      <AuthForm />
    </SafeScreen>
  );
}