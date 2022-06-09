import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import theme from '../theme';

const Home = ({ navigation }) => {
    return (
        <View >
            <Text style={theme.mainText}>WELCOME TO ROI </Text>
            <Image style={theme.mainImage} source={require('./images/ROI.png')} />
            <View >
                <Pressable style={theme.saveButton}  onPress={() => navigation.navigate("Login")} >
                    <Text style={theme.saveButtonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default Home;


