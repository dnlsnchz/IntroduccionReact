export default function userReducer(state = {name : 'Daniel'}, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {jwt : action.jwt};
        default:
            return state;
    }
    return state;
}