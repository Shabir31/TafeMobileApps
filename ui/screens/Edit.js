import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateUserAsync } from '../users.service';
import theme from '../theme';
import TxtInput from '../components/TxtInput';

export default function Edit() {
    //navigation
    const navigation = useNavigation();
    const route = useRoute();
    let u = route.params;
    //state
    const [firstName, setFirstName] = useState(u.firstName);
    const [lastName, setLastName] = useState(u.lastName);
    const [birthdate, setBirthDate] = useState('');
    const [phone, setPhone] = useState(u.phone);
    const [email, setEmail] = useState(u.email);
    const [department, setDepartment] = useState(u.department);
    const [street, setStreet] = useState(u.address.street);
    const [suburb, setSuburb] = useState(u.address.suburb);
    const [state, setState] = useState(u.address.state);
    const [country, setCountry] = useState(u.address.country);
    //functions
    function submit() {

        updateUserAsync(buildUserObject())
            .then(json => {
                let params = { op: 'update', data: json };
                navigation.navigate("Index", params);
            });
    }

    function buildUserObject() {
        let user = {
            id: u.id,
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
            <TxtInput value={phone} onChangeText={setPhone} />
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
        </View>
    );
}