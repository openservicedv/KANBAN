const defaultState = {
    isCreateModalOpen: false,
    isEditModalOpen: false,
}
export const toggleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "toggleCreate":
            return {...state, isCreateModalOpen: action.payload}
        case "toggleEdit":
            return {...state, isEditModalOpen: action.payload}
        default:
            return state;
    }
}
