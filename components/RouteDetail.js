import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions, Linking } from 'react-native';
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

    const staticCoordinates = { latitude: 37.7749, longitude: -122.4194 };

    // static for now, can be imported via route.params when API is given
    const phoneNumber = '+14164164166'
    const destination = '115 Ravel Road'

    const handleCallPress = () => {
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl)
    }

    const handleTextPress = () => {
        const textUrl = `sms:${phoneNumber}`
        Linking.openURL(textUrl)
    }

    const handleNavPress = () => {
        const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        Linking.openURL(navUrl)
    }

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
                    latitudeDelta: 0.0225,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={staticCoordinates}
                    title={name}
                    description={address}
                />
            </MapView>

            <View style={styles.footer}>
                <View>
                    <View style={{ marginBottom: 15, flexDirection: 'row', }}>
                        <View style={{ flex: 4, alignItems: 'center',}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 40, marginTop: 15, }}>{distance}</Text>
                            <Text style={{ }}>Route</Text>
                            <Text style={{borderColor: 'black', borderWidth: 2, borderRadius: 15, paddingLeft: 13, paddingRight: 10}}>House</Text>
                        </View>
                        <View style={{ flex: 6, marginTop: 15, marginRight: 5}}>
                            <Text style={{fontWeight: '500', fontSize: 20}}>{name}</Text>
                            <Text style={{ marginBottom: 5, fontSize: 12 }} >+14164164166</Text>
                            <Text style={{ fontWeight: '500', fontSize: 17, marginBottom: 5 }}>Unit 123</Text>
                            <Text numberOfLines={2} style={{ fontWeight: '500', fontSize: 16, }}>{address}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Pressable onPress={handleCallPress} style={{backgroundColor: 'lightgray', paddingHorizontal: 40, borderRadius: 15, paddingVertical: 10}}><Text>Call</Text></Pressable>
                        <Pressable onPress={handleTextPress} style={{backgroundColor: 'lightgray', paddingHorizontal: 40, borderRadius: 15, paddingVertical: 10}}><Text>Text</Text></Pressable>
                        <Pressable onPress={handleNavPress} style={{backgroundColor: 'lightgray', paddingHorizontal: 40, borderRadius: 15, paddingVertical: 10}}><Text>Nav</Text></Pressable>
                    </View>
                </View>
            </View>

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
        backgroundColor: 'white'
    },
    map: {
        width: "100%",
        height: Dimensions.get('window').height / 2.5
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 2,
        paddingTop: Dimensions.get('window').height / 13.5,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 1.5,
        flex: 1,
        borderRadius: 20,
    },
    deliveryItem: {
        borderRadius: 10,
        marginBottom: 20,
    }
});

export default RouteDetail;
