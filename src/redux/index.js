export const ADD_NUMBER = 'ADD_NUMBER';

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        number,
    }
}

const initialState = {
    number: '',
};

export function reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                number: String(state.number) + String(action.number),
            };
        default:
            return state;
    }
}