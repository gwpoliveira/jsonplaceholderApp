import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostsScreen from './screens/PostsScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import AlbumScreen from './screens/AlbumScreen';
import PhotoScreen from './screens/PhotoScreen';
import UsersScreen from './screens/UsersScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import EditPostScreen from './screens/EditPostScreen'; // Certifique-se de importar todas as telas

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="Albums" component={AlbumScreen} />
        <Stack.Screen name="Photos" component={PhotoScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        <Stack.Screen name="EditPost" component={EditPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
