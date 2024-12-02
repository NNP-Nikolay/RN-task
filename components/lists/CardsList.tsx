import SafeScreen from "@/components/templates/SafeScreen";
import { getDataImagesList } from "@/service/imagesListApi";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, RefreshControl, Text, ActivityIndicator } from "react-native";
import CardImage from "../cards/CardImage";

type ImageData = {
  download_url: string;
  author: string;
};

export default function CardsList() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const newImages = await getDataImagesList(page);
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const onRefresh = async () => {
    setIsRefreshing(true);
    setPage(1);
    await loadImages();
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadImages();
  }, [loadImages, page]);

  const handleEndReached = async () => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <SafeScreen style={styles.container}>
      <Text style={styles.galleryText}>Gallery</Text>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CardImage download_url={item.download_url} author={item.author} />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#FFFFFF" /> : null}
      />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  galleryText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
