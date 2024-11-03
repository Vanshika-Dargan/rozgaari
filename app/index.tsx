import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [progress, setProgress] = useState(0.1); 

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <View style={styles.lang}>
      <Text style={styles.title}>Select Language</Text>
      
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, selectedLanguage === "en" ? styles.buttonSelected : styles.buttonDefault]}
          onPress={() => {
            setSelectedLanguage("en");
            setProgress(0.2); 
          }}
        >
          <Text style={styles.buttonText}>English</Text>
        </Pressable>

        <Pressable
          style={[styles.button, selectedLanguage === "hi" ? styles.buttonSelected : styles.buttonDefault]}
          onPress={() => {
            setSelectedLanguage("hi");
            setProgress(0.2); // Update progress when Hindi is selected
          }}
        >
          <Text style={styles.buttonText}>Hindi</Text>
        </Pressable>
      </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text  style={styles.bottomBtn}>Continue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  progressContainer: {
    marginTop:80,
    height: 10,
    width: "80%", // Adjust width as needed
    backgroundColor: "#e0e0e0", // Background color of the progress bar
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20, // Space between progress bar and title
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4f83cc", // Color of the progress bar
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "80%",
    justifyContent: "center",
    alignItems: "center", // Center buttons horizontally
  },
  button: {
    fontSize: 24,
    paddingVertical: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    margin: 5,
    borderRadius: 80,
    backgroundColor: "#d3d3d3",
  },
  buttonDefault: {
    backgroundColor: "#d3d3d3",
  },
  buttonSelected: {
    backgroundColor: "#4f83cc",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  selectedLanguageText: {
    fontSize: 18,
    marginTop: 20,
  },
  continueButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor: "#4f83cc", // Background color for the continue button
    alignItems: "center",
    justifyContent: "center",
    width: "80%", // Adjust width as needed
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  lang: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: "80%",
    paddingVertical: 15,
    marginBottom: 30,
    borderTopWidth: 2,
    borderTopColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: "#d3d3d3", // Make sure the color is set as well
    backgroundColor: "white", // Optional: to see the border clearly against the background
  },
  bottomBtn: {
    fontSize: 18,
   
  },
});
