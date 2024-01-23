// components/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, SafeAreaView, Pressable } from 'react-native';


const LoginPage = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [driverId, setDriverId] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Perform authentication logic here
        // For simplicity, let's navigate to the HomeScreen after "signing in"
        navigation.navigate('DeliveringPage');
    };
    
    // logic in the future
    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        // add background image to safeareaview 
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.brand}>GO100</Text>
                <Text style={styles.subtitle}>DRIVER PLATFORM</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Mobile Number / Driver ID</Text>
                    <TextInput
                        style={styles.input}
                        value={mobileNumber}
                        onChangeText={(text) => setMobileNumber(text)}
                    />
                </View>

                <View>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <Pressable onPress={handleSignIn}>
                    <Text style={styles.inputSubtitle}>Forgot Password</Text>
                </Pressable>

                <Pressable style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </Pressable>

                <Pressable
                    style={styles.registerButton}
                    onPress={handleRegister}
                >
                    <Text style={styles.registerButtonText}>Register as a Driver</Text>
                </Pressable>

                <View>
                    <Text style={styles.privacyText}>By clicking "Register as a driver",</Text>
                    <Text style={styles.privacyText2}>you agree to our <Text style={styles.underline}>Privacy Policy</Text></Text>
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    brand: {
        fontSize: 40,
        fontWeight: 'light',
        marginTop: Dimensions.get('window').height / 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: Dimensions.get('window').height / 16,
    },
    inputContainer: {
        width: Dimensions.get('window').width / 1.2,
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 12,
        marginBottom: 8,
        color: '#737373',
    },
    input: {
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 5,
        fontSize: 14,
        borderBottomColor: '#c0c0c0',
    },
    inputSubtitle: {
        textAlign: 'right',
        fontSize: 12,
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    signInButton: {
        backgroundColor: '#3498db',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        width: Dimensions.get('window').width / 1.75,
        alignSelf: 'center',
        marginTop: 20,
        marginTop: Dimensions.get('window').height / 3
    },
    signInText: {
        alignSelf: 'center',
    },
    registerButton: {
        marginTop: Dimensions.get('window').height / 20,
        alignSelf: 'center',
    },
    registerButtonText: {
        color: '#3498db',
        fontSize: 14,
    },
    privacyText: {
        color: '#737373',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: Dimensions.get('window').height / 20,
    },
    privacyText2: {
        color: '#737373',
        fontSize: 12,
        alignSelf: 'center',
    },
    underline: {
        textDecorationLine: 'underline'
    }

});

export default LoginPage;
