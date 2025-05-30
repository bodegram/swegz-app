import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import api from '@/utils/api'
import { router } from 'expo-router'
import { Image } from 'react-native'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email address is required')
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ),
    password: Yup.string().required('Password is required')
})

export default function login() {
    const [loading, setLoading] = useState(false)
    const { values, setFieldValue, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const { data } = await api.post('/users/login', { email: values.email, password: values.password })
                router.replace('/(tabs)')
            } catch (error: any) {
                return Alert.alert('Error', error.response.data.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('@/assets/images/Frame-16.png')} style={{ flex: 1, width: '100%' }}>
                <View style={styles.topSection}>
                    <Image source={require('@/assets/images/SwegzTrade-logo.png')} style={{ width: 200, height: 50, alignSelf: 'center' }} />
                </View>
            </ImageBackground>
            <View style={styles.bottomSection}>
                <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 10, marginBottom: 20 }}>Login</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Email address</Text>
                    <TextInput style={styles.input} placeholder='Enter your email address' value={values.email} onChangeText={(text) => setFieldValue('email', text)} />
                    {touched.email && errors.email && (
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                    )}
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='*********' secureTextEntry value={values.password} onChangeText={(text) => setFieldValue('password', text)} />
                    {touched.password && errors.password && (
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                    )}
                </View>
                <View style={styles.field}>
                    <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()} disabled={loading}>
                        {!loading && <Text style={styles.btnText}>Login</Text>}
                        {loading && <ActivityIndicator size={'small'} color={'white'} />}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 14
    },
    field: {
        marginBottom: 14
    },
    label: {
        fontSize: 14,
        marginBottom: 2
    },
    input: {
        padding: 14,
        borderWidth: 1,
        borderColor: "#ACAAAA",
        borderRadius: 10
    },
    btn: {
        backgroundColor: '#003430',
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3
    },
    btnText: {
        color: "#FAFAFA",
        fontSize: 13,
        textAlign: 'center'
    }
})