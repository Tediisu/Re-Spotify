import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function SignUp() {
  // Form state
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<"Male" | "Female" | null>(null);

  const handleSignUp = () => {
    if (!email || !fullName || !password || !gender) {
      Alert.alert("Error", "Please fill in all fields and select gender.");
      return;
    }
    // For demo: navigate to home screen
    router.push("./genres");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.box1}>
        <Image
          source={require("@/assets/images/Spotify_Full_Logo_RGB_Green.png")}
          style={styles.spotifyLogo}
        />
      </View>

      {/* Inputs */}
      <View style={styles.box2}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#888"
          style={styles.Input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#888"
          style={styles.Input}
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.Input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Gender */}
        <View style={styles.genderRow}>
          <TouchableOpacity
            style={styles.genderButton}
            onPress={() => setGender("Male")}
          >
            <View
              style={[
                styles.circle,
                gender === "Male" && { backgroundColor: "#1DB954" },
              ]}
            />
            <Text style={styles.highlights}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genderButton}
            onPress={() => setGender("Female")}
          >
            <View
              style={[
                styles.circle,
                gender === "Female" && { backgroundColor: "#1DB954" },
              ]}
            />
            <Text style={styles.highlights}>Female</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <Pressable onPress={handleSignUp}>
          <View style={styles.signUpButton}>
            <Text style={styles.text}>Sign Up</Text>
          </View>
        </Pressable>

        <Text style={styles.highlights2}>Sign Up With</Text>
        <View style={styles.box3_1}>
          <FontAwesome5 name="facebook" size={24} style={styles.Icon} />
          <AntDesign name="google" size={24} style={styles.Icon} />
        </View>
      </View>

      {/* Sign In Link */}
      <View style={styles.box3}>
        <Text style={styles.text4}>
          Already have an account?
          <Text style={styles.highlights} onPress={() => router.push("/")}>
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  box1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  box3: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box3_1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  spotifyLogo: {
    width: 220,
    height: 60,
    top: 50,
  },
  Input: {
    width: 270,
    height: 50,
    backgroundColor: "#171616",
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 10,
    color: "white",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  highlights: {
    color: "#1DB954",
    fontWeight: "bold",
  },
  highlights2: {
    color: "#E3E3E3",
    fontWeight: "bold",
    marginTop: 30,
  },
  genderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  genderButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#C7C3C3",
  },
  signUpButton: {
    width: 270,
    height: 50,
    backgroundColor: "#1DB954",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  Icon: {
    color: "white",
    padding: 15,
  },
  text4: {
    color: "#D6D6D6",
    marginTop: 20,
  },
});
