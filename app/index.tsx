import { Text, View, StyleSheet } from 'react-native';

export default function Auth() {
  return (
    <View style={styles.container}>
      <Text>AUTH FORM</Text>
    </View>
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


