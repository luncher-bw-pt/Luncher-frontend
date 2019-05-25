import { DISP_SCHOOL_GRID } from '../actions';

const initialState = {
    schools: [],
    error: null
}

export const schoolReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISP_SCHOOL_GRID: {
            return {
                schools: action.payload
            }
        }
        default:
            return state;
    }
}