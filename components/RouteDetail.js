import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const RouteDetail = ({ route, navigation }) => {
    const { deliveryNumber, name, address, date, distance, note } = route.params;

    const navigateDelivery = () => {
        navigation.navigate('Delivery')
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateDelivery} style={{ alignItems: 'center', paddingLeft: 20, }}>
                <FontAwesome6 name="arrow-left-long" size={24} color="#01B6FF" />
            </Pressable>
            <Text>{deliveryNumber}</Text>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{date}</Text>
            <Text>{distance}</Text>
            <Text>{note}</Text>
            {/* Render other details using the passed properties */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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

export default RouteDetail;
