import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { AntDesign, FontAwesome6, SimpleLineIcons, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import ScanPage from './ScanPage';
import MoneyPage from './MoneyPage';
import MessagePage from './MessagePage';

const DeliveringPage = ({ navigation }) => {
    const navigateToPage = (pageName) => {
        // Implement navigation logic based on the selected page
        // Example: navigation.navigate(pageName);
        console.log(`Navigating to ${pageName}`);
    };

    const drawerSidePanel = () => {
        console.log('side panel');
    }

    const navigateScan = () => {
        navigation.navigate(ScanPage);
    }

    const navigateMoney = () => {
        navigation.navigate(MoneyPage)
    }

    const navigateMessage = () => {
        navigation.navigate(MessagePage)
    }

    const deliveryDataString = `[
        {
          "deliveryNumber": "D12345",
          "name": "John Doe",
          "address": "123 Main Street Dr STONEY CREEK ON",
          "date": "2024-01-24",
          "distance": "320",
          "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
        },
        {
          "deliveryNumber": "D67890",
          "name": "Jane Smith",
          "address": "456 Oak Avenue",
          "date": "2024-01-25",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
        },
        {
          "deliveryNumber": "D24680",
          "name": "Bob Johnson",
          "address": "789 Pine Road",
          "date": "2024-01-26",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Handle with care."
        },
        {
            "deliveryNumber": "D24680",
            "name": "Bob Johnson",
            "address": "789 Pine Road",
            "date": "2024-01-26",
            "distance": ${Math.floor(Math.random() * 10) + 1},
            "note": "Handle with care."
          },
          {
            "deliveryNumber": "D24680",
            "name": "Bob Johnson",
            "address": "789 Pine Road",
            "date": "2024-01-26",
            "distance": ${Math.floor(Math.random() * 10) + 1},
            "note": "Handle with care."
          },
          {
            "deliveryNumber": "D24680",
            "name": "Bob Johnson",
            "address": "789 Pine Road",
            "date": "2024-01-26",
            "distance": ${Math.floor(Math.random() * 10) + 1},
            "note": "Handle with care."
          },
          {
            "deliveryNumber": "D24680",
            "name": "Bob Johnson",
            "address": "789 Pine Road",
            "date": "2024-01-26",
            "distance": ${Math.floor(Math.random() * 10) + 1},
            "note": "Handle with care."
          }
      ]`;

    const deliveryData = JSON.parse(deliveryDataString);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Icons on the left side of the header */}
                    <View style={styles.headerIcons}>
                        {/* Left icon 1 */}
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} />

                    </View>

                    {/* Icons on the right side of the header */}
                    {/* Right icon 1 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                            <Text style={{ marginRight: 5 }}>Route</Text>
                            <FontAwesome6 name="arrow-right-arrow-left" size={18} color="black" backgroundColor={"white"} />
                        </Pressable>

                        <SimpleLineIcons.Button name="map" size={18} color="black" backgroundColor={"white"} />

                        <Ionicons name="search-sharp" size={18} color="black" backgroundColor={"white"} />

                    </View>
                </View>
                <View>

                </View>

                {/* Body */}
                <ScrollView style={styles.body}>
                    {/*Your scrollable content goes here */}
                    <View style={styles.container}>
                        {deliveryData.map((delivery, index) => (
                            <View key={index} style={styles.deliveryContainer}>
                                <View style={styles.deliveryItem}>
                                    <View style={{ marginBottom: 15 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop: 10 }}>{delivery.deliveryNumber}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <View style={{ marginHorizontal: 20, width: Dimensions.get('window').width / 4.5, marginBottom: 0}}>
                                            <Text style={{ fontSize: 50, alignSelf: 'center', }}>{delivery.distance}</Text>
                                            <Text style={{ alignSelf: 'center', fontSize: 14, color: 'gray' }}>Route</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', marginBottom: 20, width: Dimensions.get('window').width / 1.75, }}>
                                            <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>{delivery.name}</Text>
                                            <Text style={{ color: 'gray', fontSize: 12, marginBottom: 2 }}>{delivery.address}</Text>
                                            <Text style={{ color: 'gray', fontSize: 12, marginBottom: 2 }}>{delivery.date}      {delivery.distance}KM Away</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: '#01B6FF', fontSize: 12, marginBottom: 2, }}>Note: {delivery.note} </Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    {/* Footer icons spaced evenly */}
                    <Pressable style={{ alignItems: 'center' }}>
                        {/* Add your icon component or image here */}
                        <Feather name="box" size={18} color="lightblue" />
                        <Text style={{ color: 'lightblue' }}>Delivery</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={navigateScan}>
                        {/* Add your icon component or image here */}
                        <AntDesign name="scan1" size={18} color="black" />
                        <Text>Scan</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center' }} onPress={navigateMessage}>
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
    },
    deliveryItem: {
        backgroundColor: '#FAE5DE',
        borderRadius: 10,
        marginBottom: 20,
    }
});

export default DeliveringPage;
