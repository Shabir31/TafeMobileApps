import {View,Text} from 'react-native'; 
import {useRoute} from '@react-navigation/native'; 
import theme from '../theme';

export default function Details(){
    //navigation
    const route = useRoute(); 
    let u = route.params; 
    //JSX
    return (
        <View>
            <Text style={theme.userDetailsText}>USER: {u.firstName} {u.lastName}</Text>
            <Text style={theme.userDetailsText}>Date Of Birth: {u.birthdate}</Text>
            <Text style={theme.userDetailsText}>PHONE:{u.phone}</Text>
            <Text style={theme.userDetailsText}>ADDRESS:</Text>
            <Text style={theme.userDetailsText}>STREET: {u.address.street}</Text>
            <Text style={theme.userDetailsText}>SUBURB: {u.address.suburb}</Text>
        </View>
    ); 
}