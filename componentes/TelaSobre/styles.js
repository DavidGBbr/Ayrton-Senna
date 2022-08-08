import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    boxTitle:{
        padding:20,
    },

    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10,
    },

    img:{
        borderRadius:5,
        height:200,
        marginBottom:10,
        width: '100%',
    },

    description:{
        color:'#757575',
        fontWeight:'bold',
        marginBottom:20,
    },

    boxImg:{
        width:100,
        height:100,
    },

    box:{
        flexDirection:'row',
        marginBottom:20,
        borderTopWidth:1,
        borderTopColor:'#d5d5d5',
        borderBottomColor:'#d5d5d5',
        borderBottomWidth:1,
    },

    boxTexts:{
        padding:10,
        flex:1,
    },

    boxTitle:{
        fontSize:18,
        fontWeight:'bold'
    }

});

export default styles;