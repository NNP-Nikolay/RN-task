import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

interface SafeScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SafeScreen({ children, style }: SafeScreenProps) {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});