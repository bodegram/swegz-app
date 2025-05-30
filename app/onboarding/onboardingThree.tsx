import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function onboardingThree() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.inactive}></View>
                    <View style={styles.inactive}></View>
                    <View style={styles.active}></View>
                    <View style={styles.inactive}></View>
                </View>
                <TouchableOpacity style={styles.skipBtn} onPress={()=>router.push('/onboarding/onboardingFour')}>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <View style={styles.imgContainer}>
                    <Image source={require('@/assets/images/Vector 25.png')} style={styles.img} />
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.title}>Pay bills </Text>
                <Text style={styles.text}>Sell your cryptocurrency coin and trade
                    easily on Swegz</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => router.push('/auth/location')}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login} onPress={() => router.push("/auth/login")}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECFEC4',
    },
    topSection: {
        flex: 1
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 24
    },
    title: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '800',
        marginBottom: 8
    },
    text: {
        textAlign: 'center',
        color: '#000000'
    },
    btnContainer: {
        marginTop: 60
    },
    btn: {
        backgroundColor: "black",
        padding: 18,
        borderRadius: 30,
    },
    btnText: {
        textAlign: 'center',
        color: 'white'
    },
    login: {
        padding: 18
    },
    loginText: {
        textAlign: 'center',
        fontWeight: "500"
    },
    header: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
        paddingHorizontal: 24
    },
    active: {
        width: '100%',
        height: 7,
        backgroundColor: 'black',
        borderRadius: 30,
        flex: 1
    },
    inactive: {
        width: '100%',
        height: 7,
        backgroundColor: '#F4F4F4',
        borderRadius: 30,
        flex: 1
    },
    skipBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 24
    },
    imgContainer: {
        paddingHorizontal: 24
    },
    img: {
        width: 180,
        height: 180,
        alignSelf:'center',
        marginTop:30
    },
  
})