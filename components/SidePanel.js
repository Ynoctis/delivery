import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';


const YourComponent = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            {/* Your main content goes here */}

            <TouchableOpacity onPress={toggleModal}>
                <Text>Show Menu</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                backdropOpacity={0.5}
                onBackdropPress={toggleModal}
                style={styles.modal}
            >
                {/* Your menu content goes here */}
                <View style={styles.menuContent}>
                    <Text>Menu Content</Text>
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
        width: '50%',
    },
    menuContent: {
        backgroundColor: 'white',
        padding: 16,
    },
});

