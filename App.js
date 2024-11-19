import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';

// Data for Pokémon cards
const pokemonData = [
  {
    title: "FPS",
    data: [
      {
        name: "Valorant",
        number: 60,
        url: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-7bf61b8b77e394c4bc709f6b02c0db24",
      },
      {
        name: "Overwatch 2",
        number: 67,
        url: "https://m.media-amazon.com/images/M/MV5BOGMxODVmNDgtZGE1Yy00Y2VlLTk3ZTMtYzU5YTcxODhiNzMxXkEyXkFqcGc@._V1_.jpg",
      },
    ],
    headerStyle: { backgroundColor: "#f4e34c" },
  },
  {
    title: "Open World",
    data: [
      {
        name: "Honkai Star Rail",
        number: 70,
        url: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1103/8c3ce3611a4bb187418bb5e24924a055ba33d3046a7aaacb.png",
      },
      {
        name: "Genshin Impact",
        number: 80,
        url: "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc",
      },
    ],
    headerStyle: { backgroundColor: "#00FFFF" },
  },
  {
    title: "Horror",
    data: [
      {
        name: "Poppy's Playtime Chapter 3",
        number: 70,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISuwkSg5yf4poWb4j74jAWQGpT27CTuVNqQ&s",
      },
      {
        name: "Dark Deception",
        number: 80,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRgSZ7qxIjMjpg4pnOdp3F-saIX-c9kR9wQ&s",
      },
    ],
    headerStyle: { backgroundColor: "#FF0000" },
  },
  {
    title: "Fighting",
    data: [
      {
        name: "Tekken 8",
        number: 70,
        url: "https://gamemusic.bn-ent.net/W4vE39ckQu/wp-content/uploads/2024/01/%E9%89%84%E6%8B%B38_%E9%85%8D%E4%BF%A1%E7%94%A8%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88_KV1_01-scaled.jpg",
      },
      {
        name: "King of Fighters",
        number: 80,
        url: "https://imgix.ranker.com/user_node_img/111/2201981/original/2201981-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355",
      },
    ],
    headerStyle: { backgroundColor: "#90EE90" },
  },
  {
    title: "Tower Defense",
    data: [
      {
        name: "The Battle Cats",
        number: 70,
        url: "https://m.media-amazon.com/images/M/MV5BYjkyYTc5Y2MtMDMzOS00MTNmLWE1MDQtMzk1ZjQ2MDA4NTZlXkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Arknights",
        number: 80,
        url: "https://static-cdn.jtvnw.net/ttv-boxart/511554_IGDB-138x184.jpg",
      },
    ],
    headerStyle: { backgroundColor: "#D3D3D3" },
  },
  {
    title: "MOBA",
    data: [
      {
        name: "Mobile legends",
        number: 70,
        url: "https://i.redd.it/m4etckdzkrj61.jpg",
      },
      {
        name: "Brawl Stars",
        number: 80,
        url: "https://img.redbull.com/images/c_crop,x_575,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/3/5/zdul8ghfo1hogo5jkn1e/brawl-stars",
      },
    ],
    headerStyle: { backgroundColor: "#Ffc0cb" },
  },
];

const App = () => {
  // Function to render game cards
  const renderItem = ({ item }) => (
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Image source={{ uri: item.url }} style={styles.imageStyle} />
      </View>
  );

  return (
      <View style={styles.container}>
        {/* Add Game Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD GAME</Text>
        </TouchableOpacity>

        {/* Section List for Games */}
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, headerStyle } }) => (
                <View style={[styles.header, headerStyle]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageStyle: {
    width: 180,
    height: 240,
    resizeMode: "contain",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
});

export default App;

