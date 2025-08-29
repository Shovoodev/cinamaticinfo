import { Container } from "@/components/container";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <Container>
      <Text> Movie details {id}</Text>
    </Container>
  );
};

export default MovieDetails;
