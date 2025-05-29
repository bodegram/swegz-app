import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import { router } from 'expo-router'
import * as Yup from 'yup'

const phoneNoSchema = Yup.object().shape({
    phoneNo: Yup.string().required('Code is required')
})

export default function code() {
    const { values, setFieldValue, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            phoneNo: ""
        },
        validationSchema: phoneNoSchema,
        onSubmit: (values) => {
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>Enter the code we sent
                    +234 70 4794 345</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Code</Text>
                    <TextInput value={values.phoneNo} onChangeText={(text) => setFieldValue('phoneNo', text)} style={{ borderRadius: 10, borderWidth: 1, borderColor: '#BABABA', padding: 14 }} />
                    {touched.phoneNo && errors.phoneNo && (
                        <Text style={{ color: 'red' }}>{errors.phoneNo}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F3F3F3',
        padding: 14,
        borderRadius: 10
    }
})