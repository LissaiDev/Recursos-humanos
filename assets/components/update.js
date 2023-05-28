import {View, Text} from "react-native"
const Update = ({name, text})=>{
    return(
        <View style={{padding:15, borderRadius: 10, backgroundColor: "#f6fafd", marginBottom: 5}}>
            <Text style={{fontFamily: "Regular", fontSize: 16, marginBottom: 2}}>
                {name}
            </Text>
            <Text style={{fontFamily: "Light", fontSize: 14}}>
                {text}
            </Text>
        </View>
    )
}
export default Update;