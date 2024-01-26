import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome6 } from '@expo/vector-icons';

const MapPage = ( { navigation } ) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);

  const navigateDelivery = () => {
    navigation.navigate('DeliveringPage')
}

  // Tested it on my own mobile device, confirmed that it works
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLocationPermissionDenied(true);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  return (
    // Tested and works
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: Dimensions.get('window').height / 13.5, marginBottom: Dimensions.get('window').height / 50,}}>
        <View style={{ position: 'absolute', left: 0 }}>
          <Pressable onPress={navigateDelivery} style={{ alignItems: 'center', paddingLeft: 20, }}>
            <FontAwesome6 name="arrow-left-long" size={24} color="#01B6FF" />
          </Pressable>
        </View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Route</Text>
      </View>
      {locationPermissionDenied ? (
        <Text style={styles.errorText}>
          Location access is required to use this feature.
        </Text>
      ) : (
        initialRegion && (
          <MapView style={styles.map} initialRegion={initialRegion}>
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title="Your Location"
              />
            )}
          </MapView>
        )
      )}
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
  errorText: {
    fontSize: 16,
    color: "red",
  },
});

export default MapPage;
