import { FETCH_NOTES, FETCH_NOTE, DELETE_NOTE, EDIT_NOTE
 } from '../actions';
import _ from 'lodash';


export default function(state={}, action) {
    switch (action.type) {
        case FETCH_NOTE:
            // return state, adding new data on to existing state obj
            // key interpolation used to se7t id as key
            return { ...state, [action.payload.data.id]: action.payload.data
            };
        case FETCH_NOTES:
            return _.mapKeys(action.payload.data, 'id');

        case DELETE_NOTE:
            // if id is in state obj, omit and return new object with that row deleted
            return _.omit(state, action.payload);

        case EDIT_NOTE:
            return { ...state};

        default:
            return state;

    
                
    }
}