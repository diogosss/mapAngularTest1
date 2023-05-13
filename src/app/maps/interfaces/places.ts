export interface PlacesResponce {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:         string;
  type:       string;
  place_type: string[];
  relevance:  number;
  properties: Properties;
  text:       string;
  place_name: string;
  center:     number[];
  geometry:   Geometry;
  context:    Context[];
  bbox?:      number[];
}

export interface Context {
  id:          string;
  mapbox_id:   string;
  text:        string;
  short_code?: string;
  wikidata?:   string;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  mapbox_id?:  string;
  accuracy?:   string;
  foursquare?: string;
  landmark?:   boolean;
  category?:   string;
  address?:    string;
  maki?:       string;
}
