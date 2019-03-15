import { WebAudioOptions, AudioOptions } from 'peaks.js';

export interface RegionInterface {
  id: string,
  text: string,
  start: number,
  end: number,
}

export type AppAudioType = AudioOptions & {
  url: string
};

export interface RegionsInterface extends Array<RegionInterface> { }

export interface BookListInterface {
  id: string,
  name: string,
}
export interface LoadingMetaInterface {
  isLoading: number,
  lastLoad ?: Date | null,
}

export interface BookListsInterface {
  books: Array<BookListInterface>,
  loadingMeta: LoadingMetaInterface,
}

export interface AppState {
  regions: RegionsInterface,
  activeRegion: RegionInterface | null
  audio: AppAudioType | null,
  bookList: BookListsInterface,
};

