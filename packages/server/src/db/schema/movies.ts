import { pgTable, text, boolean, serial, integer } from "drizzle-orm/pg-core";

export const Movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),
  backdrop_path: text("backdrop_path").default("").notNull(),
  genre_ids: text("genre_ids").array(),
  original_language: text("original_language").default("en").notNull(),
  original_title: text("original_title").notNull(),
  overview: text("overview").notNull(),
  popularity: integer("popularity"), // or numeric if you want decimals
  poster_path: text("poster_path").notNull(),
  release_date: text("release_date").notNull(),
  video: boolean("video").default(false).notNull(),
  vote_average: integer("vote_average"), // use numeric if fractional
  vote_count: integer("vote_count"),
});
