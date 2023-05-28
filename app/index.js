import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Department from "../assets/components/department";
import Profile from "../assets/components/profile";
import { Chris, Lesly, Michael, Kirril, Louis, Jake } from "../assets/images/images";
import { Programming, Design, Tester } from "../assets/animations/animations";
import { useState } from "react";

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(!refreshing);
    setTimeout(() => {
      setRefreshing(false);
    },300)
  }
  
  const departments = [
    {
      emojipath: Programming,
      area: "Development",
      number: "88 techies",
      key: "1",
    },
    {
      emojipath: Design,
      area: "UI/UX Design",
      number: "45 creatives",
      key: "2",
    },
    {
      emojipath: Tester,
      area: "QA Testers",
      number: "24 checkers",
      key: "3",
    },
  ];

  const staff = [
    {
      name: "Christopher Jane",
      occupation: "Frontend Developer",
      image: Chris,
      key: "1",
    },
    {
      name: "Lesley Juarez",
      occupation: "UI/UX Designer",
      image: Lesly,
      key: "2",
    },
    {
      name: "Michael Dam",
      occupation: "Backend Developer",
      image: Michael,
      key: "3",
    },
    {
      name: "Kirril Balabanov",
      occupation: "Test Engineer",
      image: Kirril,
      key: "4",
    },
    {
      name: "Louis Carl",
      occupation: "Marketing Manager",
      image: Louis,
      key: "5",
    },
    {
      name: "Jake Nackos",
      occupation: "Network Administrator",
      image: Jake,
      key: "6",
    }
  ];
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.texts}>
            <Text style={styles.textMain}>Today</Text>
            <Text style={styles.textName}>Good Morning, Lissai</Text>
          </View>
          <View style={styles.input}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Search by name or job title"
              placeholderTextColor="#b2b4bc"
              style={{
                ...styles.textName,
                fontSize: 16,
                marginStart: 10,
                flexGrow: 1,
              }}
              cursorColor="#b2b4bc"
            />
          </View>
        </View>
        <View style={styles.departments}>
          <Text style={styles.departmentsText}>Departments</Text>
          <FlatList
            data={departments}
            renderItem={({ item }) => <Department {...item} />}
            keyExtractor={(item) => item.key}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}>
          <Text style={{ fontFamily: "Bold", fontSize: 18, marginBottom: 20 }}>
            You recently worked with
          </Text>
          <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            data={staff}
            renderItem={({ item }) => <Profile {...item} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "white",
  },
  texts: {
    marginBottom: 20,
  },
  textMain: {
    fontSize: 40,
    fontFamily: "Bold",
  },
  textName: {
    fontSize: 20,
    fontFamily: "Light",
    color: "#b2b4bc",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcfbfc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  departments: {
    marginTop: 35,
  },
  departmentsText: {
    fontFamily: "Bold",
    fontSize: 18,
    marginStart: 20,
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
export default App;
