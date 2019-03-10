import { RegionInterface } from './index.t';

const defaultState: RegionInterface | null = null;

const configs = (state: RegionInterface | null = defaultState, action: any): RegionInterface | null => {
  switch (action.type) {
    default:
      return state
  }
}

export default configs;
