import AnimatedLottieView from "lottie-react-native";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
const Department = ({ emojipath, area, number, department }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.animation}>
        <AnimatedLottieView
          source={emojipath}
          resizeMode="cover"
          autoPlay
          loop={false}
        />

        </View>
      </View>
      <Text style={styles.area}>{area}</Text>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
};

const options = [
    "#d6effd",
    "#fcf1d5",
    "#fbd6da",
    "#b293ed"
]

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#e7f6fe",
    alignSelf:"flex-start"
  },
  animation: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#e7f6fe",
    marginBottom: 12,
  },
  area: { fontFamily: "Regular", fontSize: 15, marginBottom: 3 },
  number: { fontFamily: "Regular", fontSize: 14, color: "#b2b4bc" },
  
});

export default Department;
