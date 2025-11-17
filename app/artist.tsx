import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { router } from "expo-router";

const ARTISTS = [
  "Drake", "Taylor Swift", "Billie Eilish", "Ed Sheeran",
  "BTS", "Adele", "The Weeknd", "Coldplay",
  "Bruno Mars", "Dua Lipa", "Post Malone", "Ariana Grande",
  "Shawn Mendes", "Imagine Dragons", "Rihanna"
];

export default function Artist() {
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filteredArtists = ARTISTS.filter((artist) =>
    artist.toLowerCase().includes(search.toLowerCase())
  );

  const toggleArtist = (artist: string) => {
    if (selectedArtists.includes(artist)) {
      setSelectedArtists(selectedArtists.filter((a) => a !== artist));
    } else {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  const handleNext = () => {
    if (selectedArtists.length < 3) {
      Alert.alert("Select at least 3 artists to continue");
      return;
    }
    router.push("./(tabs)/tabs/profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose 3 or more artists you like</Text>

      <TextInput
        placeholder="Search artists"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
        placeholderTextColor="#999"
      />

      <ScrollView contentContainerStyle={styles.artistContainer}>
        {filteredArtists.map((artist) => {
          const selected = selectedArtists.includes(artist);
          return (
            <TouchableOpacity
              key={artist}
              style={styles.artistWrapper}
              onPress={() => toggleArtist(artist)}
            >
              <Image
                source={require("@/assets/images/cat.jpg")}
                style={[
                  styles.artistImage,
                  selected && styles.selectedImage,
                ]}
              />
              <Text style={[styles.artistText, selected && styles.selectedText]}>
                {artist}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    width: "100%",
    height: 45,
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    paddingHorizontal: 15,
    color: "white",
    marginBottom: 20,
  },
  artistContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  artistWrapper: {
    width: 100,
    alignItems: "center",
    margin: 5,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedImage: {
    borderColor: "#1DB954",
    borderWidth: 3,
  },
  artistText: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  selectedText: {
    color: "#1DB954",
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#1DB954",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  nextButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
