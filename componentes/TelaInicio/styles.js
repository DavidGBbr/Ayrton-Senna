import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },

    img:{
        width:250,
        height:250,
        borderRadius:125,
        borderWidth:3,
        borderColor:'#202020',
        marginBottom:50
    },
    
    card:{
        backgroundColor:'#rgba(0,0,0,0.9)',
        padding:20,
        borderRadius:20,
        width:340,
    },

    cardTitle:{
        color:'#fff',
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10,
    },

    cardDescription:{
        color:'#a6a6a6',
        textAlign:'center',
        fontSize:16
    }
});

export default styles;