import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';
import Create from './screens/Create';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Delete from './screens/Delete';
import Home from './screens/Home';
import Login from './screens/Login'

export default function App() {

  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}   options={{...ho, title: 'ROI MOBILE APP' }}/>
          <Stack.Screen name="Login" component={Login}   options={{...ho, title: 'APP LOGIN' }}/>
          <Stack.Screen name="Index" component={Index}   options={{...ho, title: 'CONTACT' }}/>
          <Stack.Screen name="Create" component={Create} options={{...ho, title: 'Add Contact' }}/>
          <Stack.Screen name="Details" component={Details} options={{...ho, title: 'Contact Details' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{...ho,title: 'Update Contact' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{...ho, title: 'Delete Contact' }}/>         
        </Stack.Navigator>
    </NavigationContainer>
  ); 
}

let ho ={
  headerStyle: {
    backgroundColor: '#941a1d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}; 