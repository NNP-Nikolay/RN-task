import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataUserProfile } from '@/service/userProfileApi';
import { 
  View, Text, Image,
  StyleSheet, ActivityIndicator, 
  Alert, TouchableOpacity
} from 'react-native';

interface UserTypes {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const STORAGE_KEY = 'token';

export default function ProfileScreen() {
  const [user, setUser] = useState<UserTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem(STORAGE_KEY);
        if (!token) {
          router.replace('/home');
          return;
        }

        const randomId = Math.floor(Math.random() * 6) + 1;

        const userData = await getDataUserProfile(randomId);
        setUser(userData);
      } catch (error) {
        Alert.alert('Error', 'Failed to load user data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    router.replace('/home');
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load user data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6E8E99',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  email: {
    fontSize: 16,
    color: '#dfe6e9',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#FF6347',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#80C7FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
