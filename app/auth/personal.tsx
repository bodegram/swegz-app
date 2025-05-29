import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import { useRegistration } from '@/contexts/RegistrationContext'
import personalSchema from '@/schemas/registration/personal'
import { router } from 'expo-router'

export default function personal() {
    const { registrationData, updateRegistrationData } = useRegistration()
    const { values, handleSubmit, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            middleName: registrationData.middleName
        },
        validationSchema: personalSchema,
        
        onSubmit: (values) => {
            updateRegistrationData({ firstName:values.firstName, lastName:values.lastName, middleName:values.middleName })
            router.push('/auth/email')
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>What’s your name as
                    it appears on official
                    document</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>First name</Text>
                    <TextInput style={styles.input} defaultValue={values.firstName} onChangeText={(text) => setFieldValue('firstName', text)} />
                    {touched.firstName && errors.firstName && (
                        <Text style={{ color: 'red' }}>{errors.firstName}</Text>
                    )}
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Middle name (optional)</Text>
                    <TextInput style={styles.input} defaultValue={values.middleName} onChangeText={(text) => setFieldValue('middleName', text)} />
                    {touched.middleName && errors.middleName && (
                        <Text style={{ color: 'red' }}>{errors.middleName}</Text>
                    )}
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Last name</Text>
                    <TextInput style={styles.input} defaultValue={values.lastName} onChangeText={(text) => setFieldValue('lastName', text)} />
                    {touched.lastName && errors.lastName && (
                        <Text style={{ color: 'red' }}>{errors.lastName}</Text>
                    )}
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
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BABABA'
    }
})