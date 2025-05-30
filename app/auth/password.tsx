import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useRegistration } from '@/contexts/RegistrationContext'
import passwordSchema from '@/schemas/registration/password'
import api from '@/utils/api'
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router'


export default function password() {
    const [loading, setLoading] = useState(false)
    const { registrationData, updateRegistrationData } = useRegistration()
    const { values, touched, errors, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            password: registrationData.password
        },
        validationSchema: passwordSchema,
        onSubmit: async (values) => {
            updateRegistrationData({ password: values.password })

            try {
                setLoading(true)
                const { data } = await api.post('/users/register', {
                    firstname: registrationData.firstName,
                    lastname: registrationData.lastName,
                    email: registrationData.email,
                    password: registrationData.password,
                    middlename: registrationData.middleName
                })
                console.log('data', data);
                
                await SecureStore.setItemAsync('token', data.token);
                router.replace('/(tabs)')
            } catch (error: any) {
                console.log(error);

                return Alert.alert('Error', error.response.data.message || 'An error occurred')
            }finally{
                setLoading(false)
            }
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.headerText}>Create password</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='****************' secureTextEntry value={values.password} onChangeText={(text) => setFieldValue('password', text)} />
                    {touched.password && errors.password && (
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                    )}
                </View>

                <TouchableOpacity>
                    <Text style={styles.promoBtn}>Do you have a promo code? </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()} disabled={loading}>
                  {!loading &&  <Text style={styles.btnText}>Create Account</Text>}
                  {loading && <ActivityIndicator size={'small'} color={'white'}/>}
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
        width: '100%',
        flexDirection:'row',
        gap:4,
        justifyContent:'center'
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
    },
    promoBtn: {
        fontWeight: '500',
        marginTop: 10
    }
})