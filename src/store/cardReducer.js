const defaultState = {
    updatedTask: {},
    createModal: false,
    editModal: false,
}
export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "toggleCreate":
            return {...state, createModal: action.payload}
        case "toggleEdit":
            return {...state, editModal: action.payload}
        case "patchTask":
            return {
                ...state, updatedTask:
                    {...action.payload, [action.key]: action.value, key: action.key}
            }
        default:
            return state;
    }
}
