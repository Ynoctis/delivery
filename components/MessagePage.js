import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const MessagePage = ({ navigation }) => {

    const openDrawer = () => {
        navigation.openDrawer();
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Icons on the left side of the header */}
                    <View style={styles.headerIcons}>
                        {/* Left icon 1 */}
                        <AntDesign.Button name="bars" size={20} color="black" backgroundColor={"white"} onPress={openDrawer} />
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}> Message </Text>
                    </View>
                </View>


                {/* Body */}
                <ScrollView style={styles.body}>
                    {/*scrollable content*/}
                    <View style={styles.searchContainer}>
                        <Ionicons
                            name="search"
                            size={24}
                            color="gray"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Route Number/Message"
                        />
                    </View>

                    <View style={styles.horizontalLine} />

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
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 5,
        backgroundColor: 'white'
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default MessagePage;
