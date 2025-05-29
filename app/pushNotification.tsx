import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import locationSchema from '@/schemas/registration/location'
import { useRegistration } from '@/contexts/RegistrationContext'
import { router } from 'expo-router'

export default function pushNotification() {
    const handleContinue = () => {
        router.push("/addPhone")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>Want to get push notification?</Text>
                <Text style={{ color: '#1D1D1D' }}>We only send what’s important!</Text>

            </View>
            <View style={styles.bottomSection}>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => handleContinue()}>
                        <Text style={styles.btnText}>Get Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleContinue}>
                        <Text style={{ textAlign: 'center', borderBottomColor: '#1D1D1D', borderBottomWidth: 1, width: 80, margin: 'auto', paddingBottom: 2 }}>Skip for now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topSection: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 30,
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 50,
        width: '100%',
        justifyContent: 'flex-end'
    },
    btn: {
        backgroundColor: "black",
        padding: 14,
        borderRadius: 30,
        width: '100%',
        marginBottom: 14
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 3

    },

})