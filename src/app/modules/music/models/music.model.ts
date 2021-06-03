export interface ApiResponse {
  resultCount: number;
  results: Interpret[];
}

export interface Interpret {
  artistId: string;
  artistName: string;
  artistLinkUrl?: string;
  primaryGenreName?: string;
  albums?: number;
  collectionName?: string,
  artworkUrl60?: string,
  releaseDate?: string,
  copyright?: string,
}
