const initialState = {
    data: null,
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, data: action.payload, error: null };
        case 'FETCH_FAILURE':
            return { ...state, data: null, error: action.error };
        case 'CLEAR_DATA':
            return { ...state, data: null, error: null };
        default:
            return state;
    }
};

export default rootReducer;