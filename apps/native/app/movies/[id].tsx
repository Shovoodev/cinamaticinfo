import { Container } from "@/components/container";
import useFetch from "@/services/useFetch";
import fetchMovies from "@/utils/api";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movies } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <Container>
      <Text> Movie details {id}</Text>
    </Container>
  );
};

export default MovieDetails;
