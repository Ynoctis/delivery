import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, TextInput } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import DeliveringPage from './DeliveringPage';
import ScanPage from './ScanPage';
import MessagePage from './MessagePage';

const MoneyPage = ({ navigation }) => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [sinNum, setSinNum] = useState('');

    const navigateToPage = (pageName) => {
        // Implement navigation logic based on the selected page
        // Example: navigation.navigate(pageName);
        console.log(`Navigating to ${pageName}`);
    };

    const handleSignIn = () => {
        // Perform authentication logic here
        // For simplicity, let's navigate to the HomeScreen after "signing in"
        // navigation.navigate('DeliveringPage');
        console.log('Sign in success')
    };

    const navigateScan = () => {
        navigation.navigate(ScanPage)
    }

    const navigateDelivering = () => {
        navigation.navigate(DeliveringPage)
    }

    const navigateMessage = () => {
        navigation.navigate(MessagePage)
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                {/* <View style={styles.header}>
                    Icons on the left side of the header
                    <View style={styles.headerIcons}>
                        Left icon 1
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} />
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}> Income </Text>
                    </View>
                </View> */}


                {/* Body */}
                <ScrollView style={styles.body}>
                    {/*Your scrollable content goes here */}
                    <Text style={{ fontWeight: '600', fontSize: 18 }}>My Income</Text>
                    <Text style={styles.inputLabel}>Sign in to your drivber account to check your income and payment history</Text>
                    <View style={styles.inputContainer}>
                        <Text style={{  }}>Mobile Number/Username</Text>
                        <TextInput
                            style={styles.input}
                            value={mobileNumber}
                            onChangeText={(text) => setMobileNumber(text)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{}}>SIN</Text>
                        <TextInput
                            style={styles.input}
                            value={sinNum}
                            onChangeText={(text) => setSinNum(text)}
                        />
                    </View>

                    <Pressable style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </Pressable>

                </ScrollView>

            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Dimensions.get('window').height / 15,
        paddingHorizontal: Dimensions.get('window').width / 40,
        paddingBottom: Dimensions.get('window').height / 50,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    body: {
        paddingHorizontal: Dimensions.get('window').width / 6,
        backgroundColor: '#F5F5F5',
        paddingVertical: Dimensions.get('window').height / 4
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    signInButton: {
        backgroundColor: '#3498db',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        width: Dimensions.get('window').width / 1.75,
        alignSelf: 'center',
        marginTop: Dimensions.get('window').height / 8
    },
    signInText: {
        alignSelf: 'center',
    },
    inputContainer: {
        width: Dimensions.get('window').width / 1.2,
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 12,
        marginBottom: Dimensions.get('window').height / 20,
        color: '#737373',
    },
    input: {
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 5,
        fontSize: 14,
        borderBottomColor: '#c0c0c0',
    },
});

export default MoneyPage;
