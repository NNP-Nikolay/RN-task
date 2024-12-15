import { TextInput } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setToken } from "@/redux/slices/authSlice";
import { SafeScreen } from "@/components";
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
} from "react-native";

type FormData = { email: string; password: string };

const STORAGE_KEY = "token";

export default function AuthForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const emailErrorOpacity = useRef(new Animated.Value(0)).current;
  const passwordErrorOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem(STORAGE_KEY);
      if (token) {
        dispatch(setIsAuthenticated(true));
        router.push("/(tabs)");
      }
    };
    checkAuthentication();
  }, [router, dispatch]);

  useEffect(() => {
    Animated.timing(emailErrorOpacity, {
      duration: 300,
      toValue: errors.email ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [emailErrorOpacity, errors.email]);

  useEffect(() => {
    Animated.timing(passwordErrorOpacity, {
      duration: 300,
      toValue: errors.password ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [errors.password, passwordErrorOpacity]);

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    if (email === "helloapp@gmail.com" && password === "admin123") {
      const token = "fakeToken";
      await AsyncStorage.setItem(STORAGE_KEY, token);
      dispatch(setToken(token));
      dispatch(setIsAuthenticated(true));
      router.push("/(tabs)");
    } else {
      Alert.alert("Error", "Email or password is not valid. Please try again.");
    }
  };

  return (
    <SafeScreen style={styles.container}>
      <Text style={styles.title}>Let’s Get You Started!</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          defaultValue=""
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              onChangeText={onChange}
              placeholder="Email"
              placeholderTextColor="#dfe6e9"
              style={styles.input}
              value={value}
            />
          )}
          rules={{
            pattern: {
              message: "Email is not valid",
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
          }}
        />
      </View>
      <Animated.Text style={[styles.errorText, { opacity: emailErrorOpacity }]}>
        {errors.email?.message}
      </Animated.Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          defaultValue=""
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              onChangeText={onChange}
              placeholder="Password"
              placeholderTextColor="#dfe6e9"
              secureTextEntry
              style={styles.input}
              value={value}
            />
          )}
          rules={{
            minLength: {
              message: "Password must be at least 8 characters long",
              value: 8,
            },
            required: "Password is required",
          }}
        />
      </View>
      <Animated.Text
        style={[styles.errorText, { opacity: passwordErrorOpacity }]}
      >
        {errors.password?.message}
      </Animated.Text>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#4A6572",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0,
    color: "white",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputContainer: {
    backgroundColor: "#6E8E99",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 4,
  },
});
