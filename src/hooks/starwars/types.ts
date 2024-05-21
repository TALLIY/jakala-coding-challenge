import { StarWarsApiItemCategoriesEnum } from "../../../model/starwars/starwars";

type FilmResponseType = {
  characters: string[] | PeopleResponseType[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[] | PlanetResponseType[];
  producer: string;
  release_date: Date;
  species: string[] | SpeciesResponseType[];
  starships: string[] | StarshipResponseType[];
  title: string;
  url: string;
  vehicles: string[] | VehicleResponseType[];
};

type PeopleResponseType = {
  birth_year: string;
  eye_color: string;
  films: string[] | FilmResponseType[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string | PlanetResponseType;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[] | SpeciesResponseType[];
  starships: string[] | StarshipResponseType[];
  url: string;
  vehicles: string[] | VehicleResponseType[];
};

type PlanetResponseType = {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[] | FilmResponseType[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | PeopleResponseType[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

type SpeciesResponseType = {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string | PlanetResponseType;
  language: string;
  name: string;
  people: string[] | PeopleResponseType[];
  films: string[] | FilmResponseType[];
  skin_colors: string;
  url: string;
};

type StarshipResponseType = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[] | FilmResponseType[];
  pilots: string[] | PeopleResponseType[];
  starship_class: string;
  url: string;
};

type VehicleResponseType = {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | PeopleResponseType[];
  films: string[] | FilmResponseType[];
  url: string;
  vehicle_class: string;
};

export type ResponseType<T extends StarWarsApiItemCategoriesEnum> =
  T extends StarWarsApiItemCategoriesEnum.FILMS
    ? FilmResponseType
    : T extends StarWarsApiItemCategoriesEnum.PEOPLE
    ? PeopleResponseType
    : T extends StarWarsApiItemCategoriesEnum.STARSHIPS
    ? StarshipResponseType
    : T extends StarWarsApiItemCategoriesEnum.PLANETS
    ? PlanetResponseType
    : T extends StarWarsApiItemCategoriesEnum.SPECIES
    ? SpeciesResponseType
    : VehicleResponseType;
