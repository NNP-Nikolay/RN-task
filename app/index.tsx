import { StyleSheet } from 'react-native';
import { AuthForm } from '@/components';
import { SafeScreen } from '@/components';

export default function AuthScreen() {
  return (
    <SafeScreen style={styles.container}>
      <AuthForm />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


