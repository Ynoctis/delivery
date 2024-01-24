import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, Image } from 'react-native';
import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DeliveringPage from './DeliveringPage';
import MoneyPage from './MoneyPage';

const ScanPage = ({ navigation }) => {
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


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Icons on the left side of the header */}
                    <View style={styles.headerIcons}>
                        {/* Left icon 1 */}
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} />
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}> Scan </Text>
                    </View>

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
                                        <View style={{  alignSelf: 'center' }}>
                                            <Text style={{ fontWeight: '500', }}>Business Pick-up</Text>
                                            <Text style={{ width: Dimensions.get('window').width / 3, fontSize: 12, }}>Pick-up parcels from a business partner</Text>
                                        </View>

                                        <MaterialIcons style={{ alignSelf: 'center'}} name="arrow-forward-ios" size={24} color="black" />
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    {/* Footer icons spaced evenly */}
                    <Pressable style={{ alignItems: 'center' }} onPress={navigateRegister}>
                        {/* Add your icon component or image here */}
                        <Feather name="box" size={18} color="black" />
                        <Text>Delivery</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigateToPage('Page2')}>
                        {/* Add your icon component or image here */}
                        <AntDesign name="scan1" size={18} color="lightblue" />
                        <Text style={{ color: 'lightblue' }}>Scan</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigateToPage('Page3')}>
                        {/* Add your icon component or image here */}
                        <AntDesign name="message1" size={18} color="black" />
                        <Text>Message</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={navigateMoney}>
                        {/* Add your icon component or image here */}
                        <FontAwesome name="dollar" size={18} color="black" />
                        <Text>Income</Text>
                    </Pressable>
                </View>
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
    }
});

export default ScanPage;
