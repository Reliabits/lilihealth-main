import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import backIcon from '../../assets/images/backIcon.png'
import logo1 from '../../assets/images/logo1.png'
import fonts from 'src/assets/fonts'
import { useNavigation } from '@react-navigation/native'



const ResetPassword = () => {

    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.imageView}>
                <Image source={backIcon} />
            </TouchableOpacity>

            <View style={styles.logoView}>
                <Image source={logo1} />
            </View>

            <View style={styles.mainTextView}>
                <Text style={styles.MianText}>
                    Reset Password
                </Text>

                <View style={styles.fillInstructionView}>
                    <Text style={styles.fillText}>
Set the new password for your account so you can login and access all the features.</Text>
                </View>

                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholderTextColor={"#9099A3"} placeholder='New Password' />
                </View>
                <View style={styles.input2View}>
                    <TextInput style={styles.input} placeholderTextColor={"#9099A3"} placeholder='Confirm Password' />
                </View>

            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: fonts.CatamaranMedium
    },
    button: {
        width: "100%", justifyContent: 'center', alignItems: "center",
        backgroundColor: '#51B2BC', height: 54,
        borderRadius: 4,
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 15

    },
    bottomText: {
        color: '#9099A3',
        fontFamily: fonts.CatamaranRegular,
        fontSize: 14
    },
    bottomTextView: {
        marginTop: 10,
        width: '100%',
    },
    input: {
        color: '#093057', fontSize: 16, fontFamily: fonts.CatamaranRegular
    },
    input2View: {
        width: '100%', marginTop: 10,
        height: 54, backgroundColor: '#F4F4F4', borderRadius: 4, justifyContent: "center", paddingStart: 16
    },
    inputView: {
        width: '100%', marginTop: 30,
        height: 54, backgroundColor: '#F4F4F4', borderRadius: 4, justifyContent: "center", paddingStart: 16
    },
    fillText: {
        fontFamily: fonts.CatamaranRegular,
        color: "#093057", fontSize: 16
    },
    fillInstructionView: {
        marginTop: 20,
        width: '100%'
    },
    MianText: {
        color: '#093057',
        fontSize: 30,
        fontFamily: fonts.CormorantGaramondBold

    },
    mainTextView: {
        width: "100%", marginTop: 39.52,
        paddingHorizontal: 20,
    },


    logoView: {
        marginTop: 26, width: '100%', paddingHorizontal: 20
    },
    imageView: {
        width: '100%', marginTop: 40,
        paddingHorizontal: 20
    }
})

export default ResetPassword