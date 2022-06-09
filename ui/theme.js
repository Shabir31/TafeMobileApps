import { StyleSheet } from 'react-native';
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    userTile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        fontSize: '25px',
        fontFamily: 'Trebuchet',
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: 'bold',
        borderColor: '#000',
        padding: 4,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2
    },

    userTileButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    userTileButton: {
        backgroundColor: '#941a1d',
        padding: 5,
        marginLeft: 2.5,
        minWidth: 55,
        borderRadius: 3,
        borderWidth: 2

    },
    userDetailsText: {
        fontSize: '25px',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontStyle: 'bold',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#3b3b3b',
        padding: 4,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
        borderRadius: 7

    },
    userTileButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontStyle: 'bold',
        fontSize: '19px'
    },
    addContactButton: {
        backgroundColor: '#cb6d4f',
        borderwidth: 5,
        borderRadius: 7,
        padding: 4
    },
    addContactButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontSize: '20px',
        fontStyle: 'bold',
        fontWeight: 'bold'

    },
    addContactNameText: {
        fontFamily: 'Trebuchet',
        fontStyle: 'bold',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    saveButton: {
        backgroundColor: '#941a1d',
        padding: 5,
        marginTop: 5
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontSize: '20px',
        fontStyle: 'bold'
    },
    cancelButton: {
        backgroundColor: '#941a1d',
        padding: 5,
        marginTop: 5
    },
    cancelButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontSize: '20px',
        fontStyle: 'bold'
    },

    mainImage: {
        height: '200px',
        width:'400px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:"auto",   
        marginRight:"auto"       
    },
    mainText:{
        height: 100, 
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'Trebuchet',     
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:40        
    },

    mainButton: {

        backgroundColor: '#941a1d',
        padding: 5,
        marginLeft: 2.5,
        minWidth: 55,
        borderRadius: 3,
        borderWidth: 2
    },

    loginHeaderText:{
        fontSize: '18px',
        textAlign: 'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'Trebuchet',
        fontSize:30,
        fontWeight: 'bold',
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
        borderwidth: 3,
        bordercolor: 'black',
        backgroundColor: '#3b3b3b',
        borderRadius: 5,
        color: '#ffffff',
    },

    deleteHeader: {
        fontSize: '18px',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontStyle: 'bold',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: 'black',
        padding: 4,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
        borderwidth: 3,
        bordercolor: 'black',
        borderRadius: 4
    },

    uText: {
        fontSize: '18px',
        textAlign: 'center',
        fontFamily: 'Trebuchet',
        fontStyle: 'bold',
        fontWeight: 'bold',
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
        borderwidth: 3,
        bordercolor: 'black',
        backgroundColor: '#3b3b3b',
        borderRadius: 5,
        color: '#ffffff',
    },

    textInput: {
        backgroundColor: '#fff',
        borderColor: '#000',
        fontFamily: 'Trebuchet',
        fontSize: '20px',
        fontStyle: 'bold',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 4,
        margin: 2.5,
        padding: 2.5
    },

    textFile:{                               //Added the new textFile in theme for the main login page 
        backgroundColor: '#fff',
        borderColor: '#000',
        fontFamily: 'Trebuchet',
        fontSize: '20px',
        fontStyle: 'bold',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 4,
        margin: 2.5,
        padding: 2.5

    }
});

export default theme; 