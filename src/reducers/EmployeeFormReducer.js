import {
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    RESET_FORM
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value } //not an array - key interpolation ES6
        case EMPLOYEE_CREATE:
            return INITIAL_STATE
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}