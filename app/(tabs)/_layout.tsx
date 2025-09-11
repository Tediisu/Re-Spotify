import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Pressable, Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="tabs"
        options={{ drawerLabel: "Main App" }}
      />
    </Drawer>
  );
}

function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <Pressable
        style={styles.profile}
        // onPress={() => props.navigation.navigate("(tabs)/tabs/profile")}
        onPress={() => router.push("/(tabs)/tabs/profile")}
      >
        <View style={styles.avatar} > 
          <Image source={require("@/assets/images/Snorlax1.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.profileText}>
          <Text style={styles.username}>Your Username</Text>
          <Text style={styles.viewProfile}>View profile</Text>
        </View>
      </Pressable>

      <DrawerItem
        icon={({ color, size }) => <Feather name="plus-circle" size={28} color={"#FFFFFF"} />}
        label="Add account"
        labelStyle={styles.item}
        onPress={() => props.navigation.navigate(" ")}
      />
      <DrawerItem
        icon={({ color, size }) => <MaterialCommunityIcons name="lightning-bolt-outline" size={28} color={"#FFFFFF"} />}
        label="What's new"
        labelStyle={styles.item}
        onPress={() => props.navigation.navigate(" ")}
      />
      <DrawerItem
        icon={({ color, size }) => <MaterialIcons name="access-time" size={28} color={"#FFFFFF"} />}
        label="Recents"
        labelStyle={styles.item}
        onPress={() => props.navigation.navigate("")}
      />
      <DrawerItem
        icon={({ color, size }) => <Feather name="settings" size={28} color={"#FFFFFF"} />}
        label="Settings and privacy"
        labelStyle={styles.item}
        onPress={() => props.navigation.navigate("settings")}
      />

      <View style={{ flex: 1 }} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  profile: {
    flexDirection: "row",   
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "gray",
    marginRight: 15,
  },
  profileText: {
    flexDirection: "column",  
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewProfile: {
    color: "#B3B3B3",
    fontSize: 14,
    marginTop: 2,
  },
  item: {
    color: "white",
    fontSize: 16,
  },
});
