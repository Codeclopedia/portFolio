import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{headerTransparent:true,headerTitleStyle:{color:"white"},headerTitle:""}} />;
}
