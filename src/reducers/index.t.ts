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

export interface AppState {
  regions: RegionsInterface,
  activeRegion: RegionInterface | null
  audio: AppAudioType | null
};

