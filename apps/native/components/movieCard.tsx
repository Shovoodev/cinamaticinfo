import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: MovieProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className=" w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          resizeMode="cover"
          className=" w-full h-52 rounded-lg"
        />
        <Text className=" text-white text-sm font-bold mt-2" numberOfLines={1}>
          {title}
        </Text>
        <View className=" flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className=" size-4" />
          <Text className=" text-xs text-white font-bold uppercase">
            {" "}
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className=" flex-row justify-between items-center">
          <Text className=" text-sm text-white font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className=" text-white uppercase text-xs font-medium">
            {" "}
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({});

export default MovieCard;
