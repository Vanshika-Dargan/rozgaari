import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useRouter } from 'expo-router';
const OTPComponent = () => {

    const router = useRouter();

    const handleNavigateToAuth = () => {
      router.push('/auth'); // Navigate to the auth screen
    };

  return (
    <View style={styles.container}>
        <View style={styles.otpContainer}>
            <Text style={styles.heading2}>We've sent a verification code to </Text>
            <Text style={styles.heading3}>+91-8273152919</Text>
        </View>
      <OTPTextInput inputCount={6} tintColor="blue" autoFocus={true}  textInputStyle={styles.textInput}/>
      <View style={styles.bottomContainer}><Text>Didn't get OTP?</Text>
      <Pressable style={styles.pressable}  onPress={handleNavigateToAuth} >
            <MaskedView maskElement={<Text style={styles.buttonTextGradient}>Resend OTP</Text>}>
                <LinearGradient colors={["#ff5e3a", "#ff2a00"]}>
                    <Text style={styles.buttonText}>Resend OTP</Text>
                </LinearGradient>
            </MaskedView>
        </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    bottomContainer: {
        marginTop: 50,
        flexDirection: 'row',
        columnGap: 5
    },
    pressable: {
      
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpView: {
    width: '80%',
    height: 200,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  underlineStyleHighLighted: {
    borderBottomColor: '#03DAC6',
  },

  textInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
  },
  otpContainer: {
   marginBottom: 50
  },
  heading2: {
  fontSize: 16
  },
  heading3: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 5
  },
  buttonText: {
    opacity: 0,
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonTextGradient: {
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default OTPComponent;
