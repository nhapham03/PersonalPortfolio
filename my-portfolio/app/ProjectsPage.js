import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

const projects = [
  { id: 1, name: "Project One" },
  { id: 2, name: "Project Two" },
  { id: 3, name: "Project Three" },
];

const ProjectsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects Page</Text>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/project/${project.id}`}
          style={styles.link}
        >
          {project.name}
        </Link>
      ))}
      <Pressable onPress={() => router.push("/HomePage")}>
        <Text style={styles.link}>Go To Home Page using Push method</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1",
    padding: 20,
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

export default ProjectsPage;
