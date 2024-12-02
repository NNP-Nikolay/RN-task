import TabLayout from './_layout';
import { StyleSheet} from 'react-native';
import { SafeScreen } from '@/components';
import { CardsList} from '@/components';

export default function FeedScreen() {
  return (
    <SafeScreen style={styles.container}>
      <CardsList />
      <TabLayout />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});