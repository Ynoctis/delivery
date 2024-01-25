import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, Image } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign, Feather, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import DeliveringPage from './DeliveringPage';
import MoneyPage from './MoneyPage';
import MessagePage from './MessagePage';

const ScanPage = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const navigateToPage = (pageName) => {
        // Implement navigation logic based on the selected page
        // Example: navigation.navigate(pageName);
        console.log(`Navigating to ${pageName}`);
    };

    const drawerSidePanel = () => {
        console.log('side panel');
    }

    const navigateRegister = () => {
        navigation.navigate(DeliveringPage)
    }

    const navigateMoney = () => {
        navigation.navigate(MoneyPage)
    }

    const navigateMessage = () => {
        navigation.navigate(MessagePage)
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Icons on the left side of the header */}
                    <View style={styles.headerIcons}>
                        {/* Left icon 1 */}
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} onPress={toggleModal} />
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}> Scan </Text>
                    </View>

                    <Modal
                        isVisible={isModalVisible}
                        animationIn="slideInLeft"
                        animationOut="slideOutLeft"
                        backdropOpacity={0.5}
                        onBackdropPress={toggleModal}
                        style={styles.modal}
                    >
                        {/* Your menu content goes here */}
                        <View style={styles.menuContent}>
                            <View style={{ backgroundColor: '#252d52', margin: 0, flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                                    <Ionicons name="person-circle-outline" size={45} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontWeight: '500' }}>9011412349</Text>
                                    <Text style={{ color: 'white', fontSize: 10 }}>Driver ID: 1234</Text>
                                </View>
                            </View>
                            <View style={{ height: Dimensions.get('window').height / 1.1, marginHorizontal: 15, justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Orders preview</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Delivered</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Failed uploads</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Parcel identification</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Notifications</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Tutorial and tips</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Ionicons name="person-circle-outline" size={20} color="white" />
                                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Sign Out</Text>
                                    </View>
                                    <View>
                                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, marginVertical: 10 }} />
                                        <Text style={{color: '#737373', fontSize: 12, marginBottom: 15, textDecorationLine: 'underline', fontWeight: '500'}}>Privacy Policy</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    {/* Icons on the right side of the header */}
                    {/* Right icon 1 */}
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                            <Text style={{ marginRight: 5 }}>Route</Text>
                            <FontAwesome6 name="arrow-right-arrow-left" size={18} color="black" backgroundColor={"white"} />
                        </Pressable>

                        <SimpleLineIcons.Button name="map" size={18} color="black" backgroundColor={"white"} />

                        <Ionicons name="search-sharp" size={18} color="black" backgroundColor={"white"} />

                    </View> */}
                </View>


                {/* Body */}
                <ScrollView style={styles.body}>
                    {/*Your scrollable content goes here */}
                    <View style={styles.deliveryContainer}>
                        <View style={styles.deliveryItem}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Image style={{ width: '25%', aspectRatio: 1, height: undefined, alignSelf: 'center' }} source={require('../images/box.png')} resizeMode="contain" />
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ color: 'gray', fontWeight: '500' }}>Orders to pick-up</Text>
                                    <Text style={{ fontSize: 45, fontWeight: '600' }}>0</Text>
                                    <Text style={{ width: Dimensions.get('window').width / 3, }}>Unit 420, 420 Wood Bank Rd W, Milton ON, A1B2C3</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.deliveryItem}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ color: 'gray', fontWeight: '500' }}>Orders to Drop-off</Text>
                                    <Text style={{ fontSize: 45, fontWeight: '600' }}>0</Text>
                                    <Text style={{ width: Dimensions.get('window').width / 3, }}>No service point is currently assigned to you</Text>
                                </View>
                                <Image style={{ width: '25%', aspectRatio: 1, height: undefined, alignSelf: 'center' }} source={require('../images/box.png')} resizeMode="contain" />
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 20, height: Dimensions.get('window').height / 8, }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Image style={{ width: '10%', aspectRatio: 1, height: undefined, alignSelf: 'center', marginHorizontal: Dimensions.get('window').width / 15 }} source={require('../images/box.png')} resizeMode="contain" />
                                <View style={{}}>
                                    <View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row', width: Dimensions.get('window').width / 1.5, }}>
                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ fontWeight: '500', }}>Business Pick-up</Text>
                                            <Text style={{ width: Dimensions.get('window').width / 3, fontSize: 12, }}>Pick-up parcels from a business partner</Text>
                                        </View>

                                        <MaterialIcons style={{ alignSelf: 'center' }} name="arrow-forward-ios" size={24} color="black" />
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

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
        paddingTop: Dimensions.get('window').height / 14,
        paddingHorizontal: Dimensions.get('window').width / 40,
        paddingBottom: Dimensions.get('window').height / 50,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    body: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    deliveryContainer: {
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        flex: 1,

    },
    deliveryItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 3.5,
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
        width: '60%',
    },
    menuContent: {
        backgroundColor: '#090914',
        height: '100%',
        flexDirection: 'column'
    },
});

export default ScanPage;
