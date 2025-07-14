import { Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View, TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@react-navigation/elements";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="h-screen bg-slate-500 flex ">
        <View className="bg-red-500 rounded-l-lg h-20 w-2/3 mt-16 self-end">
          <Text className="text-white text-xl self-center">537.54</Text>
          <View className=" flex w-full flex-row self-center justify-around ">
            <View>
              <Text className="text-lg">20.0000</Text>
              <Text className="text-lg">20.00</Text>
            </View>
            <View className="h-full w-1 bg-slate-500"></View>
            <View>
              <Button> 1w</Button>
            </View>
          </View>
        </View>

        {/**STOCK DASHBOARD */}

        <View className="border-r-2 border-b-4 w-11/12 h-1/3 self-center"></View>

        {/**VIEW LISTS */}
        <Pressable className="bg-green-200 w-24 rounded-lg h-10 flex flex-row justify-around items-center mt-5 ml-5">
          <Text className="text-lg">Lists</Text>
          <IconSymbol size={28} name="chevron.right" color={"black"} />
        </Pressable>

        {/**MY STOCKS */}
        <View>
          <Text className="text-xl text-white ml-5 mt-5 mb-3">My Stocks</Text>
          <ScrollView
            className="w-11/12 h-1/3 flex self-center"
            contentContainerStyle={{ alignItems: "center" }}
          >
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                className=" w-full h-20  flex flex-row justify-between items-center border-b-2"
              >
                <Image
                  source={require("../../assets/images/song(1).png")}
                  className="w-14 h-14 rounded-lg"
                />
                <View className="w-20 h-full flex flex-col justify-center ">
                  <Text className="text-xl text-white">TBY</Text>
                  <Text className="text-white">2 shares</Text>
                </View>
                <Image
                  source={require("../../assets/images/stock.png")}
                  className="w-32 h-16"
                />
                <View className="bg-green-500 h-2/3 w-20 rounded-lg flex items-center justify-center">
                  <Text>+$18.98</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
