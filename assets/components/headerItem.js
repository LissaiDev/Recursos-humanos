import { Ionicons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
const HeaderItem = ({ name, route }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        if (route) {
          router.push(route);
        } else {
          router.back();
        }
      }}
      style={{ padding: 8, borderRadius: 10, backgroundColor: "#eef8fe" }}
    >
      {name === "plus" ? (
        <Entypo name={name} size={24} color="black" />
      ) : (
        <Ionicons name={name} size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};
export default HeaderItem;
