import { View, Text, Image, StyleSheet } from "react-native";

type CardImageProps = {
  download_url: string;
  author: string;
};

export default function CardImage({ download_url, author }: CardImageProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: download_url }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.authorText}>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  authorText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
