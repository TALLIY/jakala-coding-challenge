export const STAR_WARS_API_URL = "https://swapi.dev/api/";

export const STAR_WARS_WIKI_URL = "https://starwars.fandom.com/wiki/";

enum RelevantFilmDataEnum {
  TITLE = "title",
  DIRECTOR = "director",
  EPISODE_ID = "episode_id",
  RELEASE_DATA = "release_date",
}

enum RelevantPeopleDataEnum {
  NAME = "name",
  HEIGHT = "height",
  HOMEWORLD = "homeworld",
  BIRTH_YEAR = "birth_year",
}

enum RelevantPlanetDataEnum {
  NAME = "name",
  POPULATION = "population",
  GRAVITY = "gravity",
  CLIMATE = "climate",
  TERRAIN = "terain",
}

enum RelevantSpeciesDataEnum {
  NAME = "name",
  AVERAGE_HEIGHT = "average_height",
  AVERAGE_LIFESPAN = "average_lifespan",
  HOMEWORLD = "homeworld",
}

enum RelevantStarshipDataEnum {
  NAME = "name",
  CREW = "crew",
  STARSHIPCLASS = "starship_class",
}

enum RelevantVehicleDataEnum {
  NAME = "name",
  CREW = "crew",
  VEHICLE_CLASS = "vehicle_class",
}

enum LinkableValuesEnum {
  TITLE = "title",
  NAME = "name",
}

export const LinkableValues = Object.values(LinkableValuesEnum) as string[];
export const RelevantFilmData = Object.values(RelevantFilmDataEnum) as string[];
export const RelevantPeopleData = Object.values(
  RelevantPeopleDataEnum
) as string[];
export const RelevantPlanetData = Object.values(
  RelevantPlanetDataEnum
) as string[];
export const RelevantStarshipData = Object.values(
  RelevantStarshipDataEnum
) as string[];
export const RelevantVehicleData = Object.values(
  RelevantVehicleDataEnum
) as string[];
export const RelevantSpeciesData = Object.values(
  RelevantSpeciesDataEnum
) as string[];
