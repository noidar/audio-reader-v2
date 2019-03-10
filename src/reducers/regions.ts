import { RegionsInterface } from './index.t';

const defaultState: RegionsInterface = [];

const configs = (state: RegionsInterface = defaultState, action: any): RegionsInterface => {
    switch (action.type) {
        default:
            return state
    }
}

export default configs;