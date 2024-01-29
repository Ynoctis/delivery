import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { AntDesign, FontAwesome6, SimpleLineIcons, Ionicons, } from '@expo/vector-icons';
import MapPage from './MapPage';

const DeliveringPage = ({ navigation }) => {

    const [selectedButton, setSelectedButton] = useState('Delivering');
    const [data, setData] = useState([]);

    const apiDataString = `{
        "Delivering": [
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
        ],
        "Undelivered": [
            {
                "deliveryNumber": "D12345",
                "name": "Bob Smith",
                "address": "123 Main Street Dr STONEY CREEK ON",
                "date": "2024-01-24",
                "distance": "99",
                "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
              },
              {
                "deliveryNumber": "D67890",
                "name": "Jane Smith",
                "address": "456 Oak Avenue",
                "date": "2024-01-25",
                "distance": ${Math.floor(Math.random() * 10) + 1},
                "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
              }
        ]
    }`;

    const apiData = JSON.parse(apiDataString);

    const fetchApiData = (button) => {
        setData(apiData[button]);
        // console.log(button);
    };

    const navigateToDetail = (index) => {
        const selectedDelivery = data[index];
        navigation.navigate('DetailPage', {
            deliveryNumber: selectedDelivery.deliveryNumber,
            name: selectedDelivery.name,
            address: selectedDelivery.address,
            date: selectedDelivery.date,
            distance: selectedDelivery.distance,
            note: selectedDelivery.note,
        })
    }

    const renderView = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5, backgroundColor: 'lightgray', borderRadius: 10, borderWidth: 1, borderColor: 'lightgray', marginTop: 5 }}>
                    {Object.keys(apiData).map((button) => (
                        <Pressable key={button}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                paddingVertical: 5,
                                borderRadius: 10,
                                backgroundColor: selectedButton === button ? 'white' : 'lightgray',
                            }}
                            onPress={() => {
                                fetchApiData(button);
                                setSelectedButton(button);
                            }}>
                            <Text
                                style={{
                                    color: selectedButton === button ? '#3a9fbf' : 'black',
                                    textTransform: 'uppercase',
                                    fontWeight: selectedButton === button ? '600' : '400',
                                }}>
                                {button}
                            </Text>
                        </Pressable>
                    ))}
                </View>
                <View style={styles.container}>
                    {data.map((delivery, index) => (
                        <Pressable key={index} onPress={() => navigateToDetail(index)}>
                            <View key={index} style={styles.deliveryContainer}>
                                <View style={styles.deliveryItem}>
                                    <View style={{ marginBottom: 15 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop: 10 }}>{delivery.deliveryNumber}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 20, width: Dimensions.get('window').width / 4.5, marginBottom: 0 }}>
                                            <Text style={{ fontSize: 50, alignSelf: 'center' }}>{delivery.distance}</Text>
                                            <Text style={{ alignSelf: 'center', fontSize: 14, color: 'gray' }}>Route</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', marginBottom: 20, width: Dimensions.get('window').width / 1.75 }}>
                                            <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>{delivery.name}</Text>
                                            <Text style={{ color: 'gray', fontSize: 12, marginBottom: 2 }}>{delivery.address}</Text>
                                            <Text style={{ color: 'gray', fontSize: 12, marginBottom: 2 }}>{delivery.date}      {delivery.distance}KM Away</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: '#01B6FF', fontSize: 12, marginBottom: 2 }}>Note: {delivery.note} </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        );
    };

    const openDrawer = () => {
        navigation.openDrawer();
    }

    const navigateMap = () => {
        navigation.navigate(MapPage)
    }

    useEffect(() => {
        fetchApiData('Delivering');
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Icons on the left side of the header */}
                    <View style={styles.headerIcons}>
                        {/* Left icon 1 */}
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} onPress={openDrawer} />
                    </View>

                    {/* Icons on the right side of the header */}
                    {/* Right icon 1 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                            <Text style={{ marginRight: 5 }}>Route</Text>
                            <FontAwesome6 name="arrow-right-arrow-left" size={18} color="black" backgroundColor={"white"} />
                        </Pressable>

                        <Pressable onPress={navigateMap} style={{ paddingRight: 15 }}>
                            <SimpleLineIcons name="map" size={18} color="black" backgroundColor={"white"} />
                        </Pressable>


                        <Ionicons name="search-sharp" size={18} color="black" backgroundColor={"white"} />

                    </View>
                </View>

                {/* Body */}
                <ScrollView style={styles.body}>
                    {renderView()}
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
        paddingTop: Dimensions.get('window').height / 13.5,
        paddingHorizontal: Dimensions.get('window').width / 40,
        paddingBottom: Dimensions.get('window').height / 50,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
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
