import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import locationSchema from '@/schemas/registration/location'
import { useRegistration } from '@/contexts/RegistrationContext'
import { router } from 'expo-router'

export default function location() {
    const { updateRegistrationData, registrationData } = useRegistration()
    const { values, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            location: registrationData.location
        },
        validationSchema: locationSchema,
        onSubmit: (values) => {
            updateRegistrationData({ location: values.location })
            router.push('/auth/personal')
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>First, can you tell us
                    where you live?</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Location</Text>
                    <TouchableOpacity style={styles.input}>
                        <View>
                            <Text>{values.location}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
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
        flexDirection: "row",
        alignItems: 'flex-end',
        paddingHorizontal: 14,
        paddingVertical: 50,
        width: '100%'
    },
    btn: {
        backgroundColor: "black",
        padding: 14,
        borderRadius: 30,
        width: '100%'
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20

    },
    field: {
        marginBottom: 14
    },
    label: {
        fontSize: 14,
        marginBottom: 3
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F3F3F3',
        padding: 14,
        borderRadius: 10
    }
})