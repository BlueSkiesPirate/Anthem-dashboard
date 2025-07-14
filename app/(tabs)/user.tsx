import { Image, ImageBackground, Pressable } from "react-native";
import { Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, TextInput, ScrollView } from "react-native";
import { Background, Button } from "@react-navigation/elements";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function UserScreen() {
  return (
    <>
      <SafeAreaView
        style={styles.background}
        className="h-screen flex flex-col pt-5 items-center"
      >
        <View className="bg-slate-200 h-12 w-2/3 rounded-lg flex flex-row items-center pl-2">
          <Image
            className="w-8 h-8 pr-3"
            source={require("../../assets/images/magnifier.png")}
          ></Image>
          <TextInput className="flex-1" placeholder="Artist, Song..." />
          <Image
            className="w-8 h-8 flex justify-self-end"
            source={require("../../assets/images/mic.png")}
          ></Image>
        </View>

        <ScrollView
          className="w-full flex flex-col mt-5"
          contentContainerStyle={{ alignItems: "center" }}
        >
          {/**TRENDING CONTAINER */}

          <ImageBackground
            source={require("../../assets/images/trendingBgrd.png")}
            resizeMode="cover"
            imageStyle={{ borderRadius: 12 }}
          >
            <View
              //   style={styles.containerBackground}
              className="h-52 w-11/12 rounded-xl flex flex-row justify-between items-end pl-3 pr-5 pb-5"
            >
              <Text className="ml-4 color-white  text-xl ">Trending</Text>
              <Image source={require("../../assets/images/chevronRight.png")} />
            </View>
          </ImageBackground>

          {/**SECTIONS */}
          <Text className="mt-10 mb-5 flex self-start ml-5 text-lg text-white">
            Top Performers
          </Text>
          <ScrollView horizontal={true} className="w-11/12">
            {[...Array(10)].map((_, i) => (
              <View>
                <ImageBackground
                  source={require("../../assets/images/song(2).png")}
                  resizeMode="cover"
                  className="mr-4"
                  imageStyle={{ borderRadius: 12 }}
                >
                  <View key={i} className="h-36 w-36  mr-4 rounded-lg "></View>
                </ImageBackground>
                <Text className="color-white">
                  True Love <Text className="color-green-400"> $2334.90</Text>
                </Text>
                <Text className="color-white"> Artist</Text>
              </View>
            ))}
          </ScrollView>

          <Text className="mt-10 mb-5 flex self-start ml-5 text-lg text-white">
            Up and Coming
          </Text>
          <ScrollView horizontal={true} className="w-11/12">
            {[...Array(10)].map((_, i) => (
              <View>
                <ImageBackground
                  source={require("../../assets/images/song(3).png")}
                  resizeMode="cover"
                  className="mr-4"
                  imageStyle={{ borderRadius: 12 }}
                >
                  <View key={i} className="h-36 w-36  mr-4 rounded-lg "></View>
                </ImageBackground>
                <Text className="color-white">
                  True Love <Text className="color-green-400"> $2334.90</Text>
                </Text>
                <Text className="color-white"> Artist</Text>
              </View>
            ))}
          </ScrollView>

          <Text className="mt-10 mb-5 flex self-start ml-5 text-lg text-white">
            You'll Love These
          </Text>
          <ScrollView horizontal={true} className="w-11/12">
            {[...Array(10)].map((_, i) => (
              <View>
                <ImageBackground
                  source={require("../../assets/images/song(1).png")}
                  resizeMode="cover"
                  className="mr-4"
                  imageStyle={{ borderRadius: 12 }}
                >
                  <View key={i} className="h-36 w-36  mr-4 rounded-lg "></View>
                </ImageBackground>
                <Text className="color-white">
                  True Love <Text className="color-green-400"> $2334.90</Text>
                </Text>
                <Text className="color-white"> Artist</Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
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

{
  /**style={styles.} */
}
