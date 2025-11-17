import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";


const { width } = Dimensions.get("window");

// Global storage for songs per playlist (for demo purposes)
const playlistSongsMap: { [key: string]: { id: number; name: string }[] } = {};

export default function Playlist() {
    const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
    const router = useRouter();

  const [songs, setSongs] = useState<{ id: number; name: string }[]>([]);

  // Load existing songs for this playlist if any
  useEffect(() => {
    if (id) {
      if (!playlistSongsMap[id]) playlistSongsMap[id] = [];
      setSongs(playlistSongsMap[id]);
    }
  }, [id]);

  const addSong = () => {
    if (!id) return;
    const nextNumber = songs.length + 1;
    const newSong = { id: Date.now(), name: `Song ${nextNumber}` };
    const updatedSongs = [...songs, newSong];
    playlistSongsMap[id] = updatedSongs;
    setSongs(updatedSongs);
  };

  const undoSong = () => {
    if (!id) return;
    const updatedSongs = songs.slice(0, -1);
    playlistSongsMap[id] = updatedSongs;
    setSongs(updatedSongs);
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Image 
        source={require("@/assets/images/cat.jpg")} 
        style={styles.thumbNail} 
      />
    </View>

      {/* Playlist Header */}
      <View style={styles.headerBox}>
        <Text style={styles.playlistTitle}>{name}</Text>
        <View style={styles.buttonRow}>
          <Pressable style={styles.addBtn} onPress={addSong}>
            <Text style={styles.addBtnText}>ADD</Text>
          </Pressable>
          <Pressable style={styles.undoBtn} onPress={undoSong}>
            <Text style={styles.undoBtnText}>UNDO</Text>
          </Pressable>
        </View>
      </View>

      {/* Song List */}
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.songItem}>
            <View style={styles.songThumb}>
              <Image 
                source={require("@/assets/images/cat.jpg")} 
                style={styles.songThumb} 
              />
            </View>
            <View style={styles.songTextContainer}>
              <Text style={styles.songTitle}>
                {index + 1}. {item.name}
              </Text>
              <Text style={styles.songSubText}>Unknown Artist</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#121212", 
    paddingTop: 25 
  },
  backButton: { 
    marginLeft: 15, 
    marginBottom: 10 
  },
  backText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "500" 
  },

  headerBox: { 
    alignItems: "center", 
    paddingBottom: 20 
  },
  playlistTitle: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "white", 
    marginBottom: 15 
  },
  buttonRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10 
  },
  addBtn: { 
    backgroundColor: "#1DB954", 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 30 
  },
  addBtnText: { 
    color: "black", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  undoBtn: { 
    backgroundColor: "#888", 
    paddingHorizontal: 20, 
    paddingVertical: 10, borderRadius: 30 
  },
  undoBtnText: { 
    color: "white", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  songItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderBottomColor: "#222", 
    borderBottomWidth: 1 
  },
  songThumb: { 
    width: 60, 
    height: 60, 
    backgroundColor: "blue", 
    marginRight: 15, 
    borderRadius: 4 
  },
  songTextContainer: { 
    flexDirection: "column", 
    flex: 1 
  },
  songTitle: { 
    fontSize: 16, 
    color: "white", 
    fontWeight: "500" 
  },
  songSubText: { 
    fontSize: 13, 
    color: "#aaa", 
    marginTop: 4 
  },
  thumbNail: { 
    width: 250, 
    height: 250, 
    backgroundColor: "blue", 
    marginRight: 15,
  },
});
