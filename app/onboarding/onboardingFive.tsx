import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function onboardingFive() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require('@/assets/images/Frame 166.png')} style={styles.img} />
            </View>
            <View style={styles.bottomSection}>
                <View>
                    <Text style={styles.title}>Lets get started</Text>
                    <View style={styles.main}>
                        <View>
                            <Text style={styles.number}>1</Text>
                            <View style={styles.line}></View>
                            <Text style={styles.number}>2</Text>
                            <View style={styles.line}></View>
                            <Text style={styles.number}>3</Text>

                        </View>
                        <View>
                            <View style={styles.field}>
                                <Text style={styles.text}>Create your account</Text>
                                <Text style={styles.subtext}>Using your email and password</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.text}>Secure your account</Text>
                                <Text style={styles.subtext}>Add your mobile phone</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.text}>Verify your identity</Text>
                                <Text style={styles.subtext}>Add personal details and upload and ID</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => router.push("/auth/location")}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    topSection: {
        flex: 1
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 20
    },
    img: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 14
    },
    btn: {
        padding: 16,
        backgroundColor: "#0F0F0F",
        borderRadius: 30
    },
    btnText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white'
    },
    main: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30
    },
    number: {
        backgroundColor: '#E0E0E059',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 30,
        color: '#404040'
    },
    line: {
        width: 2,
        height: 25,
        backgroundColor: "#CECECE33",
        marginLeft: 15
    },
    text: {
        fontSize: 15,
        fontWeight: '500'
    },
    field: {
        marginBottom: 30
    },
    subtext: {
        fontSize: 12,
        color: '#9B9B9B'
    }
})