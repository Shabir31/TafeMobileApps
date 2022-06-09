import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserAsync } from '../users.service';
import theme from '../theme';
import TxtInput from '../components/TxtInput';

export default function Create() {
    //navigation
    const navigation = useNavigation();
    //state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [suburb, setSuburb] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    //functions
    function submit() {

        createUserAsync(buildUserObject())
            .then(json => {
                let params = { op: 'create', data: json };
                navigation.navigate("Index", params);
            });

    }
    
    //CREATED JAVASCRIPT OBJECT 
    function buildUserObject() {
        let user = {
            firstName,
            lastName,
            birthdate,
            phone,
            email,
            department,
            address: {
                street,
                suburb,
                state,
                country
            }
        };

        return user;
    }
    //JSX
    return (
        <View>
            <Text style={theme.addContactNameText}>First Name:</Text>
            <TxtInput value={firstName} onChangeText={setFirstName} />
            <Text style={theme.addContactNameText}>Last Name:</Text>
            <TxtInput value={lastName} onChangeText={setLastName} />
            <Text style={theme.addContactNameText}>Date Of Birth:</Text>
            <TxtInput value={birthdate} onChangeText={setBirthDate} />
            <Text style={theme.addContactNameText}>Phone:</Text>
            <TxtInput value={phone} onChangeText={setPhone}/>
            <Text style={theme.addContactNameText}>Email:</Text>
            <TxtInput value={email} onChangeText={setEmail} />
            <Text style={theme.addContactNameText}>Department:</Text>
            <TxtInput value={department} onChangeText={setDepartment} />
            <Text style={theme.addContactNameText}>Address:</Text>
            <Text style={theme.addContactNameText}>Street:</Text>
            <TxtInput value={street} onChangeText={setStreet} />
            <Text style={theme.addContactNameText}>Suburb:</Text>
            <TxtInput value={suburb} onChangeText={setSuburb} />
            <Text style={theme.addContactNameText}>State:</Text>
            <TxtInput value={state} onChangeText={setState} />
            <Text style={theme.addContactNameText}>Country:</Text>
            <TxtInput value={country} onChangeText={setCountry} />
            <Pressable style={theme.saveButton} onPress={submit}>
                <Text style={theme.saveButtonText}>Save</Text>
            </Pressable>
            <Pressable style={theme.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={theme.cancelButtonText}>Cancel</Text>
            </Pressable>

        </View>
    );
}