import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';


const SidePanel = ({ isVisible, onClose }) => {
    return (
        <View style={styles.container}>
            {/* Modal */}
            <Modal
                isVisible={isVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                backdropOpacity={0.5}
                onBackdropPress={onClose}
                style={styles.modal}
            >
                {/* Your menu content goes here */}
                <View style={styles.menuContent}>
                    <View style={{ backgroundColor: '#252d52', margin: 0, flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                            <Ionicons name="person-circle-outline" size={45} color="white" />
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontWeight: '500' }}>9011412349</Text>
                            <Text style={{ color: 'white', fontSize: 10 }}>Driver ID: 1234</Text>
                        </View>
                    </View>
                    <View style={{ height: Dimensions.get('window').height / 1.1, marginHorizontal: 15, justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Orders preview</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Delivered</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Failed uploads</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Parcel identification</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Notifications</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Tutorial and tips</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Ionicons name="person-circle-outline" size={20} color="white" />
                                <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 15, fontWeight: '500' }}>Sign Out</Text>
                            </View>
                            <View>
                                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, marginVertical: 10 }} />
                                <Text style={{ color: '#737373', fontSize: 12, marginBottom: 15, textDecorationLine: 'underline', fontWeight: '500' }}>Privacy Policy</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

export default SidePanel;