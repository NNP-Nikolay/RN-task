import SafeScreen from '@/components/templates/SafeScreen';
import { Text, StyleSheet } from 'react-native';

export default function Feed() {
  return (
    <SafeScreen style={styles.container}>
      <Text>Feed PAGE</Text>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#89A8B2',
    flex: 1,
    padding: 20,
  },
});


