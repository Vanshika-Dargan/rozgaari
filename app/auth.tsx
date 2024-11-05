import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [progress, setProgress] = useState(0.1);
  const handlePress = () => {
    setSelectedLanguage("en");
    setProgress(0.2);
  };
  const handlePressHn = () => {
    setSelectedLanguage("hi");
    setProgress(0.2);
  };
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      {/* <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View> */}

      
      <View style={styles.lang}>
        <Text style={styles.title}>{selectedLanguage==="en" ? "Select Language" : "भाषा चुनें"}</Text>

        <View style={styles.buttonContainer}>
        {selectedLanguage === 'en' ? (
  <Pressable onPress={handlePress}>
    <LinearGradient
      colors={["#ff5e3a", "#ff2a00"]}
      style={styles.gradientFilledButton}
    >
      <Text style={styles.buttonText2}>English</Text>
    </LinearGradient>
  </Pressable>
) : (
  <LinearGradient
  colors={["#ff5e3a", "#ff2a00"]}
    style={styles.gradientBorder}
  >
    <Pressable
      style={styles.button}
      onPress={handlePress}
    >
      <MaskedView maskElement={<Text style={styles.buttonTextGradient}>English</Text>}>
        <LinearGradient colors={["#ff5e3a", "#ff2a00"]}>
          <Text style={styles.buttonText}>English</Text>
        </LinearGradient>
      </MaskedView>
    </Pressable>
  </LinearGradient>
)}

{selectedLanguage === 'hi' ? (
  <Pressable onPress={handlePressHn}>
    <LinearGradient
      colors={["#ff5e3a", "#ff2a00"]}
      style={styles.gradientFilledButton}
    >
      <Text style={styles.buttonText2}>Hindi</Text>
    </LinearGradient>
  </Pressable>
) : (
  <LinearGradient
  colors={["#ff5e3a", "#ff2a00"]}
    style={styles.gradientBorder}
  >
    <Pressable
      style={styles.button}
      onPress={handlePressHn}
    >
      <MaskedView maskElement={<Text style={styles.buttonTextGradient}>Hindi</Text>}>
        <LinearGradient colors={["#ff5e3a", "#ff2a00"]}>
          <Text style={styles.buttonText}>Hindi</Text>
        </LinearGradient>
      </MaskedView>
    </Pressable>
  </LinearGradient>
)}
        </View>
      </View>
      
      {/* <View style={styles.bottomContainer}>
      <LinearGradient
            colors={["#ff5e3a", "#ff2a00"]} 
            style={styles.gradientBorderContinue}
          >
            <View
              style={[
                styles.continue
              ]}
            >
             <MaskedView maskElement={<Text style={styles.buttonTextGradient}>&gt;</Text>}>
              <LinearGradient  colors={["#ff5e3a", "#ff2a00"]} >
              <Text style={styles.buttonText}>&gt;</Text>
              </LinearGradient>
              </MaskedView>
            </View>
          </LinearGradient>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white", // Black background color
  },
  progressContainer: {
    marginTop: 80,
    height: 10,
    width: "80%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4f83cc",
  },
  gradientFilledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20
   
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 1,
  },
  
  button: {
    width: 250-2,
    height: 50-2,
    borderRadius: 10,
    backgroundColor: "white", 
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    paddingHorizontal: 10,
    
  },

  
  buttonSelected: { 
    backgroundColor: "#30363e"
  },
  buttonText: {
    opacity: 0,
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonTextGradient: {
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontSize: 18,
  },
  lang: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
   
  },
  bottomContainer: {
    width: "90%",
    paddingVertical: 15,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bottomBtn: {
    fontSize: 18,
  },
  map:{
   
  }
});
