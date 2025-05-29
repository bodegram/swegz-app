import { useRegistration } from '@/contexts/RegistrationContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function setPin() {
    const {registrationData, updateRegistrationData} = useRegistration()
  const [pin, setPin] = useState(registrationData.pin);

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      setPin(pin + key);
    }
  };

  const renderPinDots = () => {
    return (
      <View style={styles.pinDotsContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Text key={index} style={styles.pinDot}>
            {pin.length > index ? '•' : ' '}
          </Text>
        ))}
      </View>
    );
  };

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a PIN</Text>
      <Text style={styles.subtitle}>A 4digits PIN</Text>

      {renderPinDots()}

      <View style={styles.keyboard}>
        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => key && handleKeyPress(key)}
                disabled={!key}
              >
                <Text style={styles.keyText}>
                  {key === 'backspace' ? '<' : key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        disabled={pin.length < 4}
        onPress={() => {
            updateRegistrationData({pin})
            router.push('/confirmPin')
        }}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 50,
    width:'100%',
    paddingHorizontal:14
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginBottom: 40,
  },
  pinDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
    width: '60%',
    margin:'auto'
  },
  pinDot: {
    fontSize: 24,
    marginHorizontal: 8,
  },
  keyboard: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  key: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 16,
    color: 'black',
    fontWeight:'600'
  },
  continueButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignSelf: 'center',
    opacity: 1,
    width:'100%'
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center'
  },
});
