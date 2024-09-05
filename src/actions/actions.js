export const fetchPersonData = (url) => async (dispatch) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error });
    }
};

export const clearData = () => ({ type: 'CLEAR_DATA' });