import { Drawer } from "expo-router/drawer";
import "./globals.css";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ 
          drawerLabel: "Sign In", 
          headerShown: false 
        }}
      />
      <Drawer.Screen
        name="signUp"
        options={{ 
          drawerLabel: "Sign Up", 
          headerShown: false 
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{ drawerLabel: 
          "Profile", 
          headerShown: false 
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings", 
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Main App",
          headerShown: false, 
        }}
      />
    </Drawer>
  );
}
