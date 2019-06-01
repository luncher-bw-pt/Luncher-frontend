import { DISP_SCHOOL_GRID, SUCCESS, FAILURE, DELETE_SCHOOL } from '../actions';

const initialState = {
    schools: [],
    error: null
}

export const schoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISP_SCHOOL_GRID: {
            return {
                ...state,
                error: null
            }
        }
        case DELETE_SCHOOL: {
            return {
                ...state,
                schools: action.payload,
                error: null
            }
        }
        case SUCCESS: {
            return {
                ...state,
                schools: action.payload
            }
        }
        case FAILURE: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}