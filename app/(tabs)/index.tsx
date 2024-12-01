import { SafeScreen } from "@/components";
import { Text } from "react-native";
import TabLayout from "./_layout";

export default function Feed() {
  return(
    <SafeScreen>
      <TabLayout />
      <Text>Feed</Text>
    </SafeScreen>
  );
}