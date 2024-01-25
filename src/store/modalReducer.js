const defaultState = {
    modal: false,
}
export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "toggle":
            return {...state, modal: action.payload}
        default:
            return state;
    }
}
