import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useRouter } from 'expo-router';
const PhoneNumberInput = () => {
  const router = useRouter();

  const handleNavigateToAuth = () => {
    router.push('/otp'); // Navigate to the auth screen
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bottomBox}>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={styles.heading}>Log in or sign up</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.countryCodeInput}
              keyboardType="phone-pad"
              defaultValue="+91"
            />
            <View style={styles.verticalBar} />
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Enter Phone Number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.bottomContainer}>
      <Pressable onPress={handleNavigateToAuth} style={({ pressed }) => [
      
        { opacity: pressed ? 0.7 : 1 } // Optional: change opacity on press
      ]}>
        <LinearGradient
          colors={["#ff5e3a", "#ff2a00"]}
          style={styles.gradientFilledButton}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </LinearGradient>
      </Pressable>
    </View>
          <View style={styles.tncContainer}>
            <Text style={styles.heading3}>
              By continuing you agree to Rozgaari 
            </Text>
            <View style={styles.container2}>
              <Text style={styles.tnc}>Terms of Use </Text>
              <Text>and </Text>
              <Text style={styles.tnc}>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    columnGap: 8,
  },
  heading3: {},
  tnc: {
    fontSize: 13,
    color: '#888',
  },
  tncContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -220,
    rowGap: 6
  },
  gradientFilledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  verticalBar: {
    width: 1,
    height: '150%',
    backgroundColor: '#ccc',
    marginLeft: 20,
    marginRight: 10
  },
  bottomBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
     backgroundColor: '#F5F5F7'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  loginContainer: {
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 300,
    borderRadius: 10,
  },
  countryCodeInput: {
    fontSize: 18,
  },
  phoneNumberInput: {
    fontSize: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
});

export default PhoneNumberInput;
