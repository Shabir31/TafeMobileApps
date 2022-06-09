import {View,Text,Pressable,StyleSheet} from 'react-native'; 
import {useRoute,useNavigation} from '@react-navigation/native'; 
import {deleteUserAsync} from '../users.service'
import theme from '../theme';

export default function Delete(){
 
    //navigation
    const navigation = useNavigation(); 
    const route = useRoute(); 
    let u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(response=>{
            if(response.status === 204){
                navigation.navigate("Index",{op:'delete',data:u}); 
            }
        }); 
    }

    let deleteButtonStyle = {...StyleSheet.flatten(theme.saveButton),backgroundColor:'#941a1d'}; 

    debugger; 
    //JSX
    return (
        <View>
            <Text style={theme.deleteHeader}> SURE YOU WANT TO DELETE USER?</Text>
            <Text style={theme.userDetailsText}>NAME: {u.firstName} {u.lastName}</Text>
            <Text style={theme.userDetailsText}>Date Of Birth:{u.birthdate}</Text>
            <Text style={theme.userDetailsText}>PHONE:{u.phone}</Text>
            <Text style={theme.userDetailsText}>ADDRESS:</Text>
            <Text style={theme.userDetailsText}>STREET:{u.address.street}</Text>
            <Text style={theme.userDetailsText}>SUBURB:{u.address.suburb}</Text>
            <Pressable style={deleteButtonStyle} onPress={submit}>
                <Text style={theme.saveButtonText}>Delete</Text>
            </Pressable>  
        </View>
    ); 
}