import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },

    numbers:{
        backgroundColor:'#rgba(0,0,0,0.6)',
        padding:20,
        width:340,
        marginBottom:50,
    },

    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10,
    },

    description:{
        color:'#a6a6a6',
        textAlign:'center',
    },

    box:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },

    boxNumber:{
        color:'#eecb01',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:10,
        marginRight:5,
    },

    boxText:{
        color:'#a6a6a6',
        fontSize:16,
    },

    card:{
        backgroundColor:'#rgba(0,0,0,0.6)',
        marginBottom:20,
    },

    cardTitle:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        padding:15,
    },

    cardImg:{
        width:300,
        height:200,
    }
});

export default styles;