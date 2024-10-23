import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const PhotoScreen = ({ route }) => {
  const { albumId } = route.params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => setPhotos(response.data))
      .catch(error => console.error(error));
  }, [albumId]);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Image source={{ uri: item.thumbnailUrl }} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default PhotoScreen;
