import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSearchParams } from "expo-router";
import { Chris, Kirril } from "../../assets/images/images";
import { BottomSheet } from "react-native-btr";
import { Stats } from "../../assets/components/stats";
import AnimatedLottieView from "lottie-react-native";
import { Happy, Love, Programming, Sad, Star, ZipperMouth } from "../../assets/animations/animations";
import { Like } from "../../assets/animations/animations";
import { useRef, useState } from "react";
import Update from "../../assets/components/update";
import { FlatList, TextInput } from "react-native-gesture-handler";

const User = () => {
    const [visible, setVisible] = useState(false)
  const { id } = useSearchParams();
  const love = useRef();
  const like = useRef();
  const star = useRef();
  const sad = useRef();
  const zipper=useRef();
  const happy = useRef();

  const pressStar = () => {
    star.current.play(0,50);
  };
  const pressLike = () => {
    like.current.play(10,100);
  };
  const pressLove = () => {
    love.current.play(0,93);
  };

  const pressSad=()=>{
    sad.current.play(0,54);
  }
  const pressZiper=()=>{
    zipper.current.play(0,60);
  }
  const pressHappy=()=>{
    happy.current.play(0,61);
  }
  const updates= [
    {
        name: "General", 
        text: "Sam did a great job when meeting newcommers in the office yesterday. I am proud of him!",
        key: 1
    },
    {
        name : "Sara",
        text: "Sam is a great employee, he always backs me up when i need help.",
        key: 2
    },
    {
        name : "Michael",
        text: "A great coworker, doubtlessly a great friend.",
        key: 3
    },
  ]
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <Image source={Kirril} resizeMode="cover" style={styles.image} />
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
            Kirril Balabanov
          </Text>
          <Text
            style={{ fontFamily: "Regular", fontSize: 15, color: "#99adbc" }}
          >
            Test Engineer
          </Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          padding: 30,
          height: "65%",
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Stats</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={pressLove} style={styles.button}>
            <AnimatedLottieView

              ref={love}
              loop={false}
              source={Love}
              resizeMode="cover"
              
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Bold", fontSize: 20 }}>43 </Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  fontSize: 15,
                  color: "#99adbc",
                }}
              >
                likes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressLike} style={styles.button}>
            <AnimatedLottieView
              ref={like}
              loop={false}
              source={Like}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Bold", fontSize: 20 }}>21 </Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  fontSize: 15,
                  color: "#99adbc",
                }}
              >
                thanks
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pressStar}>
            <AnimatedLottieView ref={star} loop={false} source={Star} resizeMode="cover" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Bold", fontSize: 20 }}>5 </Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  fontSize: 15,
                  color: "#99adbc",
                }}
              >
                credits
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 , flex: 1}}>
            <Text onPress={()=> setVisible(!visible)} style={{ fontFamily: "Bold", fontSize: 20, marginBottom: 14 }}>
                Last updates
            </Text>
            <FlatList showsVerticalScrollIndicator={false} data={updates} keyExtractor={(item)=>item.key} renderItem={({item})=> <Update name={item.name} text={item.text} key={item.key}/>}/>
        </View>
      </View>
      <BottomSheet visible={visible} animationType="slide" duration={250} onBackButtonPress={()=>setVisible(false)} onBackdropPress={()=>setVisible(false)} >
                <View style={{height: "70%", borderRadius: 20, backgroundColor: "white", padding:20}}>
                    <Text style={{fontFamily: "Bold", fontSize: 20, textAlign: "center"}} >
                        How was working with Kirril?
                    </Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}} >
                        <TouchableOpacity onPress={pressSad} style={{height: 50, width: 50, backgroundColor: "#f8f8f8", borderRadius:30}} >
                            <AnimatedLottieView resizeMode="cover" ref={sad} source={Sad} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pressZiper} style={{height: 50, width: 50, backgroundColor: "#f8f8f8", borderRadius:30}} >
                            <AnimatedLottieView resizeMode="cover" ref={zipper} source={ZipperMouth} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pressHappy} style={{height: 50, width: 50, backgroundColor: "#f8f8f8", borderRadius:30}} >
                            <AnimatedLottieView resizeMode="cover" ref={happy} source={Happy} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontFamily: "Regular", fontSize: 15, textAlign: "left", marginTop: 20}} >
                        Leave your feedback
                    </Text>
                    <TextInput multiline={true} numberOfLines={10} textAlignVertical="top" style={{fontFamily: "Regular", fontSize: 15,borderRadius:20,padding:10,backgroundColor:"#f8f8f8" ,flexGrow:1, marginVertical: 20, color:"black"}} placeholder="Your feedback"  />
                    <TouchableOpacity style={{backgroundColor: "#202846", borderRadius: 23, padding:13, marginVertical: 20}}>
                        <Text style={{fontFamily: "Regular", fontSize: 17, textAlign: "center", color:"white"}}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d6effd",
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: 15,
  },
  profile: {
    alignItems: "center",
  },
  button: {
    height: 90,
    width: 90,
    borderRadius: 15,
    backgroundColor: "#fcfbfc",
    flexDirection: "column-reverse",
  },
});
export default User;
