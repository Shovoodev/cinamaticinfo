CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"backdrop_path" text DEFAULT '' NOT NULL,
	"genre_ids" text[],
	"original_language" text DEFAULT 'en' NOT NULL,
	"original_title" text NOT NULL,
	"overview" text NOT NULL,
	"popularity" integer,
	"poster_path" text NOT NULL,
	"release_date" text NOT NULL,
	"video" boolean DEFAULT false NOT NULL,
	"vote_average" integer,
	"vote_count" integer
);
