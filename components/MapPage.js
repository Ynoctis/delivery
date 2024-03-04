import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  Button,
  Linking,
  Platform
} from "react-native";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome6 } from '@expo/vector-icons';
import MapView from 'react-native-map-clustering';



const MapPage = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
  const [optimizedRouteData, setOptimizedRouteData] = useState([]);
  const [rawRouteData, setRawRouteData] = useState([]);
  const [distanceMatrixOptimized, setDistanceMatrixOptimized] = useState([]);

  const navigateDelivery = () => {
    navigation.navigate('DeliveringTabs')
  }

  // const coordinates = [
  //   { latitude: 43.791540, longitude: -79.366720, title: 'SM' },
  //   { latitude: 43.768577, longitude: -79.386172, title: 'BV' },
  //   { latitude: 43.780010, longitude: -79.379300, title: '44' },
  //   { latitude: 43.678935, longitude: -79.624825, title: 'R29' },
  //   { latitude: 43.879409, longitude: -79.451547, title: 'R30' },
  //   { latitude: 43.546823, longitude: -79.292061, title: 'R31' },
  //   { latitude: 43.672418, longitude: -79.459087, title: 'R32' },
  //   { latitude: 43.686721, longitude: -79.281224, title: 'R1' },
  //   { latitude: 43.822538, longitude: -79.394291, title: 'R2' },
  //   { latitude: 43.757037, longitude: -79.240042, title: 'R3' },
  //   { latitude: 43.936247, longitude: -79.443178, title: 'R4' },
  //   { latitude: 43.634892, longitude: -79.537656, title: 'R5' },
  //   { latitude: 43.826583, longitude: -79.301134, title: 'R6' },
  //   { latitude: 43.743560, longitude: -79.505412, title: 'R7' },
  //   { latitude: 43.756417, longitude: -79.600508, title: 'R8' },
  //   { latitude: 43.850510, longitude: -79.418698, title: 'R9' },
  //   { latitude: 43.609223, longitude: -79.364663, title: 'R10' },
  //   { latitude: 43.905121, longitude: -79.324362, title: 'R11' },
  //   { latitude: 43.923377, longitude: -79.268146, title: 'R12' },
  //   { latitude: 43.913624, longitude: -79.524709, title: 'R13' },
  //   { latitude: 43.686145, longitude: -79.260382, title: 'R14' },
  //   { latitude: 43.745976, longitude: -79.362914, title: 'R15' },
  //   { latitude: 43.800872, longitude: -79.191203, title: 'R16' },
  //   { latitude: 43.699835, longitude: -79.311684, title: 'R17' },
  //   { latitude: 43.828716, longitude: -79.551285, title: 'R18' },
  //   { latitude: 43.870443, longitude: -79.334507, title: 'R19' },
  //   { latitude: 43.607310, longitude: -79.284038, title: 'R20' },
  //   { latitude: 43.748925, longitude: -79.506119, title: 'R21' },
  //   { latitude: 43.791039, longitude: -79.226522, title: 'R22' },
  //   { latitude: 43.866940, longitude: -79.469868, title: 'R23' },
  //   { latitude: 43.564772, longitude: -79.480210, title: 'R24' },
  //   { latitude: 43.808603, longitude: -79.364427, title: 'R25' },
  //   { latitude: 43.724320, longitude: -79.195172, title: 'R26' },
  //   { latitude: 43.885743, longitude: -79.598603, title: 'R27' },
  //   { latitude: 43.676984, longitude: -79.348623, title: 'R28' },
  //   { latitude: 43.794567, longitude: -79.305522, title: 'R33' },
  //   { latitude: 43.878341, longitude: -79.208601, title: 'R34' },
  //   { latitude: 43.791298, longitude: -79.460866, title: 'R35' },
  //   { latitude: 43.872099, longitude: -79.601236, title: 'R36' },
  //   { latitude: 43.986672, longitude: -79.474852, title: 'R37' },
  //   { latitude: 43.891607, longitude: -79.570783, title: 'R38' },
  //   { latitude: 43.751994, longitude: -79.179842, title: 'R39' },
  //   { latitude: 43.661096, longitude: -79.313224, title: 'R40' },
  //   { latitude: 43.898755, longitude: -79.283476, title: 'R41' },
  //   { latitude: 43.768757, longitude: -79.474382, title: 'R42' },
  //   { latitude: 43.782564, longitude: -79.583420, title: 'R43' },
  //   { latitude: 43.948518, longitude: -79.375951, title: 'R44' },
  //   { latitude: 43.723429, longitude: -79.219345, title: 'R45' },
  //   { latitude: 43.838716, longitude: -79.330951, title: 'R46' },
  //   { latitude: 43.799623, longitude: -79.603412, title: 'R47' },
  //   { latitude: 43.955863, longitude: -79.226495, title: 'R48' },
  //   { latitude: 43.747907, longitude: -79.482673, title: 'R49' },
  //   { latitude: 43.685364, longitude: -79.552745, title: 'R50' },
  //   { latitude: 43.897223, longitude: -79.483920, title: 'R51' },
  //   { latitude: 43.656298, longitude: -79.387990, title: 'R52' },
  //   { latitude: 43.912546, longitude: -79.336312, title: 'R53' },
  //   { latitude: 43.717123, longitude: -79.507811, title: 'R54' },
  //   { latitude: 43.954823, longitude: -79.329867, title: 'R55' },
  //   { latitude: 43.843232, longitude: -79.400864, title: 'R56' },
  //   { latitude: 43.678932, longitude: -79.410532, title: 'R57' },
  //   { latitude: 43.953692, longitude: -79.556206, title: 'R58' },
  //   { latitude: 43.899138, longitude: -79.436780, title: 'R59' },
  //   { latitude: 43.726551, longitude: -79.583914, title: 'R60' },
  //   { latitude: 43.832712, longitude: -79.268081, title: 'R61' },
  //   { latitude: 43.678435, longitude: -79.346620, title: 'R62' },
  //   { latitude: 43.758264, longitude: -79.512340, title: 'R63' },
  //   { latitude: 43.881472, longitude: -79.571763, title: 'R64' },
  //   { latitude: 43.692738, longitude: -79.601623, title: 'R65' },
  //   { latitude: 43.930710, longitude: -79.302312, title: 'R66' },
  //   { latitude: 43.803623, longitude: -79.432104, title: 'R67' },
  //   { latitude: 43.918629, longitude: -79.262991, title: 'R68' },
  //   { latitude: 43.725998, longitude: -79.269548, title: 'R69' },
  //   { latitude: 43.841478, longitude: -79.234722, title: 'R70' },
  //   { latitude: 43.767542, longitude: -79.448196, title: 'R71' },
  //   { latitude: 43.794335, longitude: -79.353574, title: 'R72' },
  //   { latitude: 43.883666, longitude: -79.281820, title: 'R73' },
  //   { latitude: 43.714102, longitude: -79.497952, title: 'R74' },
  //   { latitude: 43.637289, longitude: -79.268695, title: 'R75' },
  //   { latitude: 43.923929, longitude: -79.514620, title: 'R76' },
  //   { latitude: 43.821435, longitude: -79.520161, title: 'R77' },
  // ];
  // console.log(formattedCoordinates);
  const coordinates = [
    { latitude: 43.791540, longitude: -79.366720, title: 'SM' },
    { latitude: 43.768577, longitude: -79.386172, title: 'BV' },
    { latitude: 43.780010, longitude: -79.379300, title: '44' },
    { latitude: 43.678935, longitude: -79.624825, title: 'R29' },
    { latitude: 43.879409, longitude: -79.451547, title: 'R30' },
    { latitude: 43.546823, longitude: -79.292061, title: 'R31' },
    { latitude: 43.672418, longitude: -79.459087, title: 'R32' },
    { latitude: 43.686721, longitude: -79.281224, title: 'R1' },
    { latitude: 43.822538, longitude: -79.394291, title: 'R2' },
    { latitude: 43.757037, longitude: -79.240042, title: 'R3' },
    { latitude: 43.936247, longitude: -79.443178, title: 'R4' },
    { latitude: 43.634892, longitude: -79.537656, title: 'R5' },
    { latitude: 43.826583, longitude: -79.301134, title: 'R6' },
    { latitude: 43.743560, longitude: -79.505412, title: 'R7' },
    { latitude: 43.756417, longitude: -79.600508, title: 'R8' },
    { latitude: 43.850510, longitude: -79.418698, title: 'R9' },
    { latitude: 43.609223, longitude: -79.364663, title: 'R10' },
    { latitude: 43.905121, longitude: -79.324362, title: 'R11' },
    { latitude: 43.923377, longitude: -79.268146, title: 'R12' },
    { latitude: 43.913624, longitude: -79.524709, title: 'R13' },
    { latitude: 43.686145, longitude: -79.260382, title: 'R14' },
    { latitude: 43.745976, longitude: -79.362914, title: 'R15' },
    { latitude: 43.800872, longitude: -79.191203, title: 'R16' },
    { latitude: 43.699835, longitude: -79.311684, title: 'R17' },
    { latitude: 43.828716, longitude: -79.551285, title: 'R18' },
    { latitude: 43.870443, longitude: -79.334507, title: 'R19' },
    { latitude: 43.607310, longitude: -79.284038, title: 'R20' },
    { latitude: 43.748925, longitude: -79.506119, title: 'R21' },
    { latitude: 43.791039, longitude: -79.226522, title: 'R22' },
    { latitude: 43.866940, longitude: -79.469868, title: 'R23' },
    { latitude: 43.564772, longitude: -79.480210, title: 'R24' },
    { latitude: 43.808603, longitude: -79.364427, title: 'R25' },
    { latitude: 43.724320, longitude: -79.195172, title: 'R26' },
    { latitude: 43.885743, longitude: -79.598603, title: 'R27' },
    { latitude: 43.676984, longitude: -79.348623, title: 'R28' },
    { latitude: 43.794567, longitude: -79.305522, title: 'R33' },
    { latitude: 43.878341, longitude: -79.208601, title: 'R34' },
    { latitude: 43.791298, longitude: -79.460866, title: 'R35' },
    { latitude: 43.872099, longitude: -79.601236, title: 'R36' },
    { latitude: 43.986672, longitude: -79.474852, title: 'R37' },
    { latitude: 43.891607, longitude: -79.570783, title: 'R38' },
  ]

  const openMapsApp = () => {
    // every coordinate
    const origin = `${coordinates[0].latitude},${coordinates[0].longitude}`;
    const destination = `${coordinates[coordinates.length - 1].latitude},${coordinates[coordinates.length - 1].longitude}`;
    const waypoints = coordinates.slice(1, -1).map(coord => `${coord.latitude},${coord.longitude}`).join('|');
    // first 5
    // const origin = `${coordinates[0].latitude},${coordinates[0].longitude}`;
    // const destination = `${coordinates[4].latitude},${coordinates[4].longitude}`;
    // const waypoints = coordinates.slice(1, 4).map(coord => `${coord.latitude},${coord.longitude}`).join('|');
    // Note: Mobile only supports up to 3 waypoints, and a max of nine otherwise

    // Constructing the deep link URL for Apple Maps (iOS)
    const iosDeepLink = `http://maps.apple.com/?saddr=${origin.latitude},${origin.longitude}&daddr=${destination.latitude},${destination.longitude}`;

    // Constructing the deep link URL for Google Maps (Android)
    const androidDeepLink = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}`;
    // console.log(androidDeepLink)

    // Use Linking to open the maps app with the generated deep link URL
    // Linking.openURL(Platform.OS === 'ios' ? iosDeepLink : androidDeepLink)
    //   .catch(err => console.error('Error opening maps app:', err));
    Linking.openURL(androidDeepLink)
    // console.log(androidDeepLink)
  };

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
      // location.coords.latitude, location.coords.longitude
      // console.log(location.coords.latitude, location.coords.longitude)
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    };

    getLocation();

  }, []);


  // functions for distance matrix calculations
  function findNearestNeighbor(current, unvisited, durations) {
    let nearestNeighbor = null;
    let minDuration = Infinity;
    for (let neighbor of unvisited) {
      if (durations[current][neighbor] < minDuration) {
        minDuration = durations[current][neighbor];
        nearestNeighbor = neighbor;
      }
    }
    return { nearestNeighbor, minDuration };
  }

  function greedyTSP(durations, destinations, startingLocation) {
    const numWaypoints = durations.length;
    const route = [startingLocation]; // Start at the specified starting location
    const unvisited = new Set(Array.from({ length: numWaypoints }, (_, i) => i)); // Include all waypoints initially

    let current = startingLocation;
    unvisited.delete(current); // Remove the starting location from unvisited
    while (unvisited.size > 0) {
      const { nearestNeighbor } = findNearestNeighbor(current, unvisited, durations);
      route.push(nearestNeighbor);
      unvisited.delete(nearestNeighbor);
      current = nearestNeighbor;
    }

    // Convert indices to coordinates and names
    const optimizedRoute = route.map(index => ({
      coordinates: destinations[index].location,
      name: destinations[index].name
    }));

    return optimizedRoute;
  }



  useEffect(() => {
    const fetchOptimizedRoute = async () => {
      const formatCoordinates = (userCoords, coords) => {
        const formattedUserCoord = `${userCoords.longitude},${userCoords.latitude}`;
        // return coords.map(coord => `${coord.longitude},${coord.latitude}`).join(';');
        const formattedCoords = coords.map(coord => `${coord.longitude},${coord.latitude}`).join(';');
        return `${formattedUserCoord};${formattedCoords}`;
      };
      const userCoords = {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      };
      // const formattedCoordinates = formatCoordinates(coordinates);
      const formattedCoordinates = formatCoordinates(userCoords, coordinates);
      const url = `http://web1.go100.ca:5000/table/v1/driving/${formattedCoordinates}`;
      // const url = `http://web1.go100.ca:5000/route/v1/driving/${formattedCoordinates}`; // waypoints instead of destinations
      // console.log(formattedCoordinates)
      try {
        const response = await fetch(url);
        const data = await response.json();
        const transformedData = data.destinations.map(item => ({
          latitude: item.location[1],
          longitude: item.location[0],
          title: item.name || 'NA'
        }));
        setOptimizedRouteData(transformedData);
        setRawRouteData(data);
      } catch (error) {
        console.error('Error fetching duration data:', error);
      }
    }
    fetchOptimizedRoute();
  }, [currentLocation]);

  useEffect(() => {
    // Check if rawRouteData is not null before calling greedyTSP
    if (rawRouteData && rawRouteData.durations && rawRouteData.destinations) {
      const startingLocationIndex = 0; // Index of the starting location in the destinations array
      const optimizedRoute = greedyTSP(rawRouteData.durations, rawRouteData.destinations, startingLocationIndex);
      setDistanceMatrixOptimized(optimizedRoute)
      // console.log("Optimized route:", optimizedRoute);
      // console.log(optimizedRouteData)
    }
  }, [rawRouteData]);


  return (
    // Tested and works
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: Dimensions.get('window').height / 13.5, marginBottom: Dimensions.get('window').height / 50, }}>
        <View style={{ position: 'absolute', left: 0 }}>
          <Pressable onPress={navigateDelivery} style={{ alignItems: 'center', paddingLeft: 20, }}>
            <FontAwesome6 name="arrow-left-long" size={24} color="#01B6FF" />
          </Pressable>
        </View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Route</Text>
        <Button title="Navigate" onPress={openMapsApp} />
      </View>
      {locationPermissionDenied ? (
        <Text style={styles.errorText}>
          Location access is required to use this feature.
        </Text>
      ) : (
        initialRegion && (
          <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation={true}>
            {currentLocation && (
              <View>
                {distanceMatrixOptimized.map((location, index) => (
                  // 03-03
                  index > 0 &&
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: location.coordinates[1],
                      longitude: location.coordinates[0],
                    }}
                    title={location.name}
                  >
                    <View style={{ borderRadius: 30, backgroundColor: 'black' }}>
                      <Text style={{ color: 'white', padding: 10 }}>{index}</Text>
                    </View>
                  </Marker>
                ))}
              </View>
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
    flex: 1
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});

export default MapPage;
