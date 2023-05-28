import { useRouter } from "expo-router";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native"

const Profile = ({name, occupation, image})=>{
    const router = useRouter();
    return(
        <TouchableOpacity onPress={()=> router.push(`User/${name}`)} style = {styles.button}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={image} resizeMode="cover" style={styles.image} />
                <View style={{marginStart: 15}}>
                    <Text style={{fontFamily: "Regular", fontSize: 16, marginBottom: 2}}>
                        {name}
                    </Text>
                    <Text style={{fontFamily:"Light", fontSize: 14, color: "#b1b7c5"}}>
                        {occupation}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default Profile;

const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#f6fafd",
        marginBottom: 15
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 20
    }
})