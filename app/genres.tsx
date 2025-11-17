import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function Genres() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip-Hop", "Electronic"];

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleNext = () => {
    if (selectedGenres.length === 0) {
      Alert.alert("Please select at least one genre.");
      return;
    }
    console.log("Selected genres:", selectedGenres);
    router.push("./artist");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Favorite Genres</Text>
      <View style={styles.genreList}>
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre}
            style={[
              styles.genreButton,
              selectedGenres.includes(genre) && styles.genreButtonSelected,
            ]}
            onPress={() => toggleGenre(genre)}
          >
            <Text
              style={[
                styles.genreText,
                selectedGenres.includes(genre) && styles.genreTextSelected,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Pressable style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
    textAlign: "center",
  },
  genreList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  genreButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#1E1E1E",
    margin: 5,
  },
  genreButtonSelected: {
    backgroundColor: "#1DB954",
  },
  genreText: {
    color: "white",
    fontWeight: "bold",
  },
  genreTextSelected: {
    color: "black",
  },
  nextButton: {
    marginTop: 40,
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
