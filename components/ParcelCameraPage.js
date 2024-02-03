import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { AntDesign, MaterialIcons, } from '@expo/vector-icons';
import { Camera, useCameraDevices, useFrameProcessor, } from 'react-native-vision-camera';
import { scanBarcodes, BarcodeFormat } from 'vision'

const PracelCameraPage = ({ navigation }) => {

    const { hasPermission, requestPermission } = useCameraPermission();
    const [barcode, setBarcode] = useState(null);
    const device = useCameraDevice('back');
    

    if (device == null) return <NoCameraDeviceError />;

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Scanned ${codes.length} codes!`)
        }
    })


    return (
        <View></View>
    );
};

const styles = StyleSheet.create({
    
});

export default PracelCameraPage;
