export default function visitsreducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_VISITS':
            return action.visits;
        case 'ADD_VISIT':
            console.log(action.visit);
            return [action.visit].concat(state);
        default:
            return state;
    }
}