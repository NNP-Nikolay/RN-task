import { 
  SafeAreaView, View,
  StyleSheet, ViewStyle
} from 'react-native';

interface SafeScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SafeScreen({ children, style }: SafeScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#89A8B2', width: '100%'}}>
      <View style={[styles.safeArea, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
  },
});
