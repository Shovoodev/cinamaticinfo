import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import useFetch from "@/services/useFetch";
import fetchMovies from "@/utils/api";
import MovieCard from "@/components/movieCard";
export default function HomeScreen() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-black">
      <Image source={images.bg} className=" absolute w-full z-0" />

      <Image source={icons.logo} className=" w-12 h-10 mt-20 mb-5 mx-auto" />

      <ScrollView>
        {moviesLoading ? (
          <ActivityIndicator size={"large"} color="#000ff" />
        ) : moviesError ? (
          <Text> Error : {moviesError.message}</Text>
        ) : (
          <View className=" flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search For a movie"
            />
            <>
              <Text className=" text-xl text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => {
                  return <MovieCard {...item} />;
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className=" mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
