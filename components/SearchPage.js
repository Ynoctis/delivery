import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Dimensions, FlatList, TextInput } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';

const SearchPage = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(apiData);

    const handleSearch = (text) => {
        const filteredResults = apiData.filter(item =>
            item.deliveryNumber.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filteredResults);
        setSearchQuery(text);
    };

    const navigateDelivery = () => {
        navigation.navigate('Delivery')
    }

    const navigateToDetail = (deliveryNumber) => {
        const selectedDelivery = filteredData.find(item => item.deliveryNumber === deliveryNumber);
        if (selectedDelivery) {
            navigation.navigate('DetailPage', {
                deliveryNumber: selectedDelivery.deliveryNumber,
                name: selectedDelivery.name,
                address: selectedDelivery.address,
                date: selectedDelivery.date,
                distance: selectedDelivery.distance,
                note: selectedDelivery.note,
            });
        }
    };


    const apiDataString = `[
        {
          "deliveryNumber": "D12345",
          "name": "John Doe",
          "address": "123 Main Street Dr STONEY CREEK ON",
          "date": "2024-01-27",
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
          "deliveryNumber": "A12345",
          "name": "Bob Johnson",
          "address": "789 Pine Road",
          "date": "2024-01-26",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Handle with care."
        },
        {
          "deliveryNumber": "A23456",
          "name": "Bob Johnson",
          "address": "789 Pine Road",
          "date": "2024-01-26",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Handle with care."
        },
        {
          "deliveryNumber": "S12345",
          "name": "Bob Johnson",
          "address": "789 Pine Road",
          "date": "2024-01-26",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Handle with care."
        },
        {
          "deliveryNumber": "C12345",
          "name": "Bob Johnson",
          "address": "789 Pine Road",
          "date": "2024-01-26",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Handle with care."
        },
        {
          "deliveryNumber": "D09871",
          "name": "Bob Smith",
          "address": "123 Main Street Dr STONEY CREEK ON",
          "date": "2024-01-24",
          "distance": "99",
          "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
        },
        {
          "deliveryNumber": "H71627",
          "name": "Jane Smith",
          "address": "456 Oak Avenue",
          "date": "2024-01-25",
          "distance": ${Math.floor(Math.random() * 10) + 1},
          "note": "Address type: HOUSE 0119: duashduahsdasdasdasdadasd"
        }
      ]`;

    const apiData = JSON.parse(apiDataString);

    return (
        // Tested and works
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: Dimensions.get('window').height / 13.5, marginBottom: Dimensions.get('window').height / 50, }}>
                <View style={{ position: 'absolute', left: 0 }}>
                    <Pressable onPress={navigateDelivery} style={{ alignItems: 'center', paddingLeft: 20, }}>
                        <FontAwesome6 name="arrow-left-long" size={24} color="#01B6FF" />
                    </Pressable>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Search</Text>
            </View>
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16 }}
                    placeholder="Search by Delivery Number"
                    onChangeText={handleSearch}
                    value={searchQuery}
                    onSubmitEditing={() => navigateToDetail(searchQuery)}
                />

                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.deliveryNumber}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigateToDetail(item.deliveryNumber)} style={{ borderColor: 'red', borderWidth: 2 }}>
                            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                                <Text style={{ fontSize: 16 }}>{item.deliveryNumber}</Text>
                                {/* Render other details as needed */}
                            </View>
                        </Pressable>

                    )}
                />
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: 'white'
    },
});

export default SearchPage;
