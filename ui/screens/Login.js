import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import theme from '../theme';
import TxtInput from '../components/TxtInput';


const Home = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (

        <View>
            <View>
                <Text style={theme.loginHeaderText}>ROI LOGIN</Text>
            </View>

            <Text style={theme.addContactNameText}>Login ID:</Text>
            <TxtInput value={firstName} onChangeText={setFirstName} />
            <Text style={theme.addContactNameText}>Login Password:</Text>
            <TxtInput value={lastName} onChangeText={setLastName} />
            <Pressable style={theme.saveButton} onPress={() => navigation.navigate("Index")} >
                <Text style={theme.saveButtonText}>LOGIN</Text>
            </Pressable>
        </View>
    );
};
export default Home;


