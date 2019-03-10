import { combineReducers } from 'redux'

import regions from './regions'
import activeRegion from './active-region'
import audio from './audio'

import {
  AppState
} from './index.t';

export default combineReducers<AppState>({
  regions,
  activeRegion,
  audio,
})
