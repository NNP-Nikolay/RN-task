import { AuthForm } from '@/components';
import SafeScreen from '@/components/templates/SafeScreen';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Auth() {
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


