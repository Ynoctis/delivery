import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { AntDesign, FontAwesome6, SimpleLineIcons, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import DeliveringPage from './DeliveringPage';
import ScanPage from './ScanPage';

const MoneyPage = ({ navigation }) => {
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

    const navigateScan = () => {
        navigation.navigate(ScanPage)
    }

    const navigateDelivering = () => {
        navigation.navigate(DeliveringPage)
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
                        <Text style={{ alignSelf: 'center', fontSize: 18}}> Income </Text>
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
                <View>

                </View>

                {/* Body */}
                <ScrollView style={styles.body}>
                    {/*Your scrollable content goes here */}
                    
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    {/* Footer icons spaced evenly */}
                    <Pressable style={{ alignItems: 'center' }} onPress={navigateDelivering}>
                        {/* Add your icon component or image here */}
                        <Feather name="box" size={18} color="black" />
                        <Text>Delivery</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={navigateScan}>
                        {/* Add your icon component or image here */}
                        <AntDesign name="scan1" size={18} color="black" />
                        <Text>Scan</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigateToPage('Page3')}>
                        {/* Add your icon component or image here */}
                        <AntDesign name="message1" size={18} color="black" />
                        <Text>Message</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigateToPage('Page4')}>
                        {/* Add your icon component or image here */}
                        <FontAwesome name="dollar" size={18} color="lightblue" />
                        <Text style={{ color: 'lightblue' }}>Income</Text>
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
    },
    deliveryItem: {
        backgroundColor: '#FAE5DE',
        borderRadius: 10,
        marginBottom: 20,
    }
});

export default MoneyPage;
