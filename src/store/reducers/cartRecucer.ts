const initialState = { bookedHotels: [] };

interface item {
    id: any;
}

function addToCart(state = initialState, action): any {
    let nextState;
    switch (action.type) {
        case 'BOOKING':
            const bookedHotelsIndex = state.bookedHotels.findIndex(
                (item: item): any => item.id === action.value.id
            );
            if (bookedHotelsIndex === -1) {
                nextState = {
                    ...state,
                    bookedHotels: [...state.bookedHotels, action.value]
                };
            }
            return nextState || state;
        case 'REMOVE_BOOKING':
            nextState = {
                bookedHotels: state.bookedHotels.filter(
                    (item: item): any => item.id !== action.value.id
                )
            };
            return nextState || state;
        default:
            return state;
    }
}
export default addToCart;
