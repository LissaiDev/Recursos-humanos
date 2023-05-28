import { Stack } from "expo-router"
import HeaderItem from "../../assets/components/headerItem";
const Layout = ()=>{
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: "#d6effd"
        },
        headerShadowVisible: false,
        headerTitle: "Developer",
        headerTitleAlign: "center",
        headerTitleStyle:{
            fontFamily: "Bold",
        },
        headerBackVisible:false,
        headerLeft: ()=>{
            return <HeaderItem name="arrow-back-outline" />;
        },
        headerRight: ()=>{
            return <HeaderItem name="plus" />;
        }
    }} />
}

export default Layout;