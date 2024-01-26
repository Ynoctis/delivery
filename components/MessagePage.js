import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    deliveryContainer: {
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        flex: 1,

    },
    deliveryItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 3.5,
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
        width: '60%',
    },
    menuContent: {
        backgroundColor: '#090914',
        height: '100%',
        flexDirection: 'column'
    },
});

export default MessagePage;
