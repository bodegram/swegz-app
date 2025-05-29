import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import { useRegistration } from '@/contexts/RegistrationContext'
import { router } from 'expo-router'
import emailSchema from '@/schemas/registration/email'

export default function email() {
    const { registrationData, updateRegistrationData } = useRegistration()
    const { values, touched, errors, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            email: registrationData.email
        },
        validationSchema: emailSchema,
        onSubmit: (values) => {
            updateRegistrationData({ email: values.email })
            router.push('/auth/password')
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>What’s your email
                    address</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Email address</Text>
                    <TextInput style={styles.input} placeholder='name@your-mail.com' defaultValue={values.email} onChangeText={(text) => setFieldValue('email', text)} />
                    {touched.email && errors.email && (
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
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