import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is my Home Page</Text>
      <Link href="/ProjectsPage" style={styles.link}>
        Go to Projects Page
      </Link>
      <Link href="/SkillsPage" style={styles.link}>
        Go to Skills Page
      </Link>
      <Link href="/ContactPage" style={styles.link}>
        Go to Contact Page
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1", 
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 20,
    fontFamily: "Cursive", 
  },
  link: {
    margin: 10,
    fontSize: 18,
    color: "#ff1493", 
    textDecorationLine: "underline", 
    borderColor: "#ff1493",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffebf1", 
    textAlign: "center",
  },
});

export default HomePage;
