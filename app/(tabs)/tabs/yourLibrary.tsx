// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation, DrawerActions } from "@react-navigation/native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import Octicons from "@expo/vector-icons/Octicons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// export default function YourLibrary() {
//   const navigation = useNavigation();

//   const playlist = [
//     { id: 1, name: "Liked Songs" },
//     { id: 2, name: "PlayList 1" },
//     { id: 3, name: "PlayList 2" },
//     { id: 4, name: "PlayList 3" },
//     { id: 5, name: "PlayList 4" },
//     { id: 6, name: "PlayList 5" },
//     { id: 7, name: "PlayList 6" },
//     { id: 8, name: "PlayList 7" },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerBox}>
//         <View style={styles.headerbox1}>
//           <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//             <View style={styles.profilePic}>
//               <Image
//                 source={require("@/assets/images/Snorlax1.png")}
//                 style={styles.profilePic}
//               />
//             </View>
//           </Pressable>
//           <Text style={styles.hBox}>Your Library</Text>
//           <View style={styles.iconsRight}>
//             <Pressable>
//               <Octicons name="search" size={28} color="white" />
//             </Pressable>
//             <Pressable>
//               <Octicons name="plus" size={28} color="white" />
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.headerbox2}>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.scrollContent}
//           >
//             <View style={styles.hBoxItem}>
//               <Text style={styles.hBoxText}>Playlists</Text>
//             </View>
//             <View style={styles.hBoxItem}>
//               <Text style={styles.hBoxText}>Podcast</Text>
//             </View>
//             <View style={styles.hBoxItem}>
//               <Text style={styles.hBoxText}>Albums</Text>
//             </View>
//             <View style={styles.hBoxItem}>
//               <Text style={styles.hBoxText}>Artist</Text>
//             </View>
//             <View style={styles.hBoxItem}>
//               <Text style={styles.hBoxText}>Downloads</Text>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Playlist List */}
//       <View style={styles.boxList}>
//         <View style={styles.hBoxList}>
//           <View style={styles.hBoxListLeft}>
//             <Pressable>
//               <FontAwesome name="unsorted" size={18} color="white" />
//             </Pressable>
//             <Text style={styles.hBoxListText}>Recents</Text>
//           </View>
//           <Pressable>
//             <MaterialCommunityIcons name="view-grid-outline" size={24} color="white" />
//           </Pressable>
//         </View>

//         <FlatList
//           data={playlist}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Pressable style={styles.listItem}>
//               <View style={styles.listThumb}>
//                 <Image
//                   source={require("@/assets/images/cat.jpg")}
//                   style={styles.listThumb}
//                 />
//               </View>
//               <View style={styles.listTextContainer}>
//                 <Text style={styles.listText}>{item.name}</Text>
//                 <Text style={styles.listSubText}>Playlist • User</Text>
//               </View>
//             </Pressable>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     paddingTop: 30,
//     gap: 5,
//   },
//   headerBox: {
//     flex: 1,
//     backgroundColor: "#212121",
//   },
//   headerbox1: {
//     flex: 1.5,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 10,
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//     backgroundColor: "blue",
//     borderRadius: 25,
//     marginRight: 15,
//   },
//   hBox: {
//     fontSize: 22,
//     fontWeight: "bold",
//     flex: 1,
//     color: "white",
//   },
//   iconsRight: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 20,
//   },
//   scrollContent: {
//     paddingHorizontal: 10,
//     gap: 5,
//     alignItems: "center",
//   },
//   hBoxItem: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     backgroundColor: "#595959",
//     borderRadius: 20,
//   },
//   hBoxText: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "white",
//   },
//   boxList: {
//     flex: 5,
//     backgroundColor: "#212121",
//   },
//   headerbox2: {
//     flex: 1,
//   },
//   hBoxList: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   hBoxListLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   hBoxListText: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "white",
//   },
//   listItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomColor: "#333",
//     paddingLeft: 15,
//   },
//   listThumb: {
//     width: 80,
//     height: 80,
//     backgroundColor: "blue",
//     marginRight: 15,
//   },
//   listTextContainer: {
//     flexDirection: "column",
//   },
//   listText: {
//     fontSize: 16,
//     color: "white",
//     fontWeight: "500",
//   },
//   listSubText: {
//     fontSize: 13,
//     color: "#aaa",
//   },
// });


import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, TextInput, TouchableWithoutFeedback, FlatList, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

export default function YourLibrary() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [askName, setAskName] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState<{ name: string; id: number }[]>([]);

  const handleCreatePlaylist = () => {
    if (playlistName.trim() === "") return;
    setPlaylists([...playlists, { name: playlistName, id: Date.now() }]);
    setPlaylistName("");
    setAskName(false);
    setModalVisible(false);
  };

  const handleUndo = () => setPlaylists((prev) => prev.slice(0, -1));
  const handleClear = () => { setPlaylists([]); setPlaylistName(""); };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerBox}>
        <View style={styles.headerbox1}>
          <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View style={styles.profilePic}>
              <Image source={require("@/assets/images/Snorlax1.png")} style={styles.profilePic} />
            </View>
          </Pressable>
          <Text style={styles.hBox}>Your Library</Text>
          <View style={styles.iconsRight}>
            <Pressable>
              <Octicons name="search" size={28} color="white" />
            </Pressable>
            <Pressable onPress={() => setModalVisible(true)}>
              <Octicons name="plus" size={28} color="white" />
            </Pressable>
          </View>
        </View>

        <View style={styles.headerbox2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Playlists</Text></View>
            <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Podcast</Text></View>
            <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Albums</Text></View>
            <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Artist</Text></View>
            <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Downloads</Text></View>
          </ScrollView>
        </View>
      </View>

      {/* PLAYLISTS */}
      <View style={styles.boxList}>
        <View style={styles.hBoxList}>
          <View style={styles.hBoxListLeft}>
            <Pressable>
              <FontAwesome name="unsorted" size={18} color="white" />
            </Pressable>
            <Text style={styles.hBoxListText}>Recents</Text>
          </View>
          <Pressable>
            <MaterialCommunityIcons name="view-grid-outline" size={24} color="white" />
          </Pressable>
        </View>

        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={styles.listItem}
              onPress={() => router.push({ pathname: `../[playlist]`, params: { id: item.id.toString(), name: item.name } })}
            >
              <View style={styles.listThumb} />
              <View style={styles.listTextContainer}>
                <Text style={styles.listText}>{item.name}</Text>
                <Text style={styles.listSubText}>Playlist • User</Text>
              </View>
            </Pressable>
          )}
        />
      </View>

      {/* MODAL */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => { setModalVisible(false); setAskName(false); setPlaylistName(""); }}>
          <View style={styles.modalBackground} />
        </TouchableWithoutFeedback>

        <View style={styles.popupBox}>
          {!askName ? (
            <>
              <Pressable style={styles.optionBtn} onPress={() => setAskName(true)}><Text style={styles.optionText}>Add Playlist</Text></Pressable>
              <Pressable style={styles.optionBtn} onPress={handleUndo}><Text style={styles.optionText}>Undo</Text></Pressable>
              <Pressable style={styles.optionBtn} onPress={handleClear}><Text style={styles.optionText}>Clear Playlist</Text></Pressable>
            </>
          ) : (
            <>
              <Text style={styles.inputLabel}>Playlist Name</Text>
              <TextInput style={styles.input} value={playlistName} onChangeText={setPlaylistName} placeholder="Enter name..." placeholderTextColor="#888" />
              <Pressable style={styles.addBtn} onPress={handleCreatePlaylist}><Text style={styles.addBtnText}>Create</Text></Pressable>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 25, backgroundColor: "black" },
  headerBox: { flex: 1, backgroundColor: "#212121" },
  headerbox1: { flex: 1.5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 },
  profilePic: { width: 50, height: 50, borderRadius: 25, backgroundColor: "blue", marginRight: 15 },
  hBox: { fontSize: 22, fontWeight: "bold", flex: 1, color: "white" },
  iconsRight: { flexDirection: "row", alignItems: "center", gap: 20 },
  headerbox2: { flex: 1 },
  scrollContent: { paddingHorizontal: 10, gap: 5, alignItems: "center" },
  hBoxItem: { paddingVertical: 6, paddingHorizontal: 12, backgroundColor: "#595959", borderRadius: 20 },
  hBoxText: { fontSize: 14, fontWeight: "500", color: "white" },
  boxList: { flex: 5, backgroundColor: "#212121" },
  hBoxList: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, paddingVertical: 8 },
  hBoxListLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  hBoxListText: { fontSize: 14, fontWeight: "500", color: "white" },
  listItem: { flexDirection: "row", alignItems: "center", paddingVertical: 12, borderBottomColor: "#333", paddingLeft: 15 },
  listThumb: { width: 80, height: 80, backgroundColor: "blue", marginRight: 15 },
  listTextContainer: { flexDirection: "column" },
  listText: { fontSize: 16, color: "white", fontWeight: "500" },
  listSubText: { fontSize: 13, color: "#aaa" },
  modalBackground: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)" },
  popupBox: { position: "absolute", bottom: 0, backgroundColor: "#222", width: "100%", paddingVertical: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  optionBtn: { paddingVertical: 15, paddingHorizontal: 25 },
  optionText: { color: "white", fontSize: 18 },
  inputLabel: { color: "white", fontSize: 16, marginLeft: 20, marginBottom: 8 },
  input: { backgroundColor: "#333", marginHorizontal: 20, borderRadius: 10, padding: 12, color: "white", fontSize: 16 },
  addBtn: { backgroundColor: "#1DB954", marginHorizontal: 20, marginTop: 15, padding: 12, borderRadius: 10, alignItems: "center" },
  addBtnText: { color: "black", fontSize: 16, fontWeight: "bold" },
});
