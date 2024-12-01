import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeScreen } from '@/components';
import TabLayout from './_layout';
import CardsList from '@/components/lists/CardsList';

export default function Feed() {
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