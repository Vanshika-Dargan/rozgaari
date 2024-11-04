import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [progress, setProgress] = useState(0.1);

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      {/* <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View> */}

      
      <View style={styles.lang}>
        <Text style={styles.title}>{selectedLanguage==="en" ? "Select Language" : "भाषा चुनें"}</Text>

        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#32a89f", "#1b6b8a"]}
            style={styles.gradientBorder}
          >
            <Pressable
              style={[
                styles.button,
                selectedLanguage === "en" && styles.buttonSelected,
              ]}
              onPress={() => {
                setSelectedLanguage("en");
                setProgress(0.2);
              }}
            >
              <MaskedView maskElement={<Text style={styles.buttonTextGradient}>English</Text>}>
              <LinearGradient  colors={["#32a89f", "#1b6b8a"]}>
              <Text style={styles.buttonText}>English</Text>
              </LinearGradient>
              </MaskedView>
              
             
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={["#32a89f", "#1b6b8a"]}
            style={styles.gradientBorder}
          >
            <Pressable
              style={[
                styles.button,
                selectedLanguage === "hi" && styles.buttonSelected,
              ]}
              onPress={() => {
                setSelectedLanguage("hi");
                setProgress(0.2);
              }}
            >
             <MaskedView maskElement={<Text style={styles.buttonTextGradient}>हिंदी</Text>}>
              <LinearGradient  colors={["#32a89f", "#1b6b8a"]}>
              <Text style={styles.buttonText}>हिंदी</Text>
              </LinearGradient>
              </MaskedView>
            </Pressable>
          </LinearGradient>
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
    backgroundColor: "black", // Black background color
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10
   
  },
  gradientBorder: {
    padding: 3, // Border thickness
    borderRadius: 10,
    margin: 5,
    width: "100%"
  },
  gradientBorderContinue: {
    padding: 3, // Border thickness
    borderRadius: 30,
    margin: 5,
  },
  button: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "black", 
    alignItems: "center",
    color: "white",
  },
  continue: {
    height: 40, 
    width: 40, 
    borderRadius: 20, 
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center", 
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
