import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';


const RouteDetail = ({ route, navigation }) => {
    const { deliveryNumber, name, address, date, distance, note } = route.params;

    const navigateDelivery = () => {
        navigation.navigate('Delivery')
    }

    const geoCoding = () => {
        // fetch geocoding api to translate address to latitude and longitude
    }

    const staticCoordinates = { latitude: 37.7749, longitude: -122.4194 }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: Dimensions.get('window').height / 13.5, marginBottom: Dimensions.get('window').height / 50, }}>
                <View style={{ position: 'absolute', left: 0 }}>
                    <Pressable onPress={navigateDelivery} style={{ alignItems: 'center', paddingLeft: 20, }}>
                        <FontAwesome6 name="arrow-left-long" size={24} color="#01B6FF" />
                    </Pressable>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{deliveryNumber}</Text>
            </View>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: staticCoordinates.latitude,
                    longitude: staticCoordinates.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={staticCoordinates}
                    title={name}
                    description={address}
                />
            </MapView>
            {/* <Text>{deliveryNumber}</Text>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{date}</Text>
            <Text>{distance}</Text>
            <Text>{note}</Text> */}
            {/* Render other details using the passed properties */}
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
    map: {
        width: "100%",
        height: "100%",
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use a semi-transparent background
        // padding: 10,
        zIndex: 2, // Make sure the header is above the map
        paddingTop: Dimensions.get('window').height / 13.5,
    },
});

export default RouteDetail;
