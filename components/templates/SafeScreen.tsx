import { SafeAreaView, View, ViewStyle } from "react-native";

interface SafeScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SafeScreen({ children, style }: SafeScreenProps) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#89A8B2", width: "100%" }}
    >
      <View style={[{ flex: 1, padding: 20 }, style]}>{children}</View>
    </SafeAreaView>
  );
}
