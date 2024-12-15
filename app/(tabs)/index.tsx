import TabLayout from './_layout';
import { SafeScreen } from '@/components';
import { CardsList } from '@/components';

export default function FeedScreen() {
  return (
    <SafeScreen style={{flex: 1, alignContent: 'center'}}>
      <CardsList />
      <TabLayout />
    </SafeScreen>
  );
};