import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeScreen } from '@/components';

const Feed = () => {

  return (
    <SafeScreen style={styles.container}>
      <Text>Feed</Text>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});

export default Feed;
