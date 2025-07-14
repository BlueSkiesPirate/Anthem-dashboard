
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { StatusBar } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from "react";
import { Image, Pressable } from "react-native";
import { Link } from "@react-navigation/native";


const Home = () => {

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    SystemUI.setBackgroundColorAsync('black');
  }, []);
  return (
    <>
      <View
        style={styles.background}
        className="h-screen flex flex-col justify-around items-center"
      >
        <Image
          source={require("../assets/images/anthemLogo.png")}
          className="w-166 h-164 mt-32"
        />

        <TextInput
          style={styles.borderStyle}
          className="border w-2/3 h-14 rounded-lg flex justify-center items-center pl-3"
        >
          <Text style={styles.textColor} className="text-lg">
            Phone number, username, or email
          </Text>
        </TextInput>

        <TextInput
          style={styles.borderStyle}
          className="border w-2/3 h-14 rounded-lg flex justify-center items-center pl-3"
        >
          <Text style={styles.textColor} className="text-lg">
            Password
          </Text>
        </TextInput>

        <Link className="text-xl -mt-4 flex self-end mr-20">
          Forgot password
        </Link>

        <Pressable
          style={styles.containerBackground}
          className="bg-black rounded-full w-2/3 h-16 flex  items-center justify-center"
        >
          <Text className="color-white text-xl">Log in</Text>
        </Pressable>

        <Text style={styles.textColor} className="text-2xl">
          OR
        </Text>

        <Pressable className="bg-black rounded-full w-2/3 h-16 flex  items-center justify-center">
          <Text className="color-white text-xl">Sign up with Google</Text>
        </Pressable>
        <Text style={styles.textColor} className="mb-10 mt-10 text-lg">
          Not a member?
          <Text className="color-sky-300"> Sign up</Text>
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#393D42",
  },
  borderStyle: {
    borderColor: "#A79DF5",
  },
  textColor: {
    color: "#A79DF5",
  },
  containerBackground: {
    backgroundColor: "#A79DF5",
  },
});

export default Home


