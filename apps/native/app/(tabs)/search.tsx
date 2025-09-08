import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import fetchMovies from "@/utils/api";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const fetchingsearchmovies = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(fetchingsearchmovies);
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-black">
      <Image source={images.bg} className=" absolute w-full z-0" />
      <FlatList
        data={movies}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 26,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <View className=" w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className=" h-10 w-12" />
            </View>
            <View className=" my-5">
              <SearchBar
                placeholder="Search Movies...."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size={"large"}
                color={"#0000ff"}
                className=" my-3"
              />
            )}
            {error && (
              <Text className=" text-red-500 px-5 my-5">
                ERROR : {error.message}
              </Text>
            )}
            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className=" text-xl text-white font-bold ">
                Search Result for{" "}
                <Text className=" text-white">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className=" mt-10 px-5">
              <Text className=" text-center text-gray-500">
                {searchQuery.trim() ? "no movies found" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
