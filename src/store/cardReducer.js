const defaultState = {
    updatedTask: {},
}
export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "patchTask":
            return {
                ...state, updatedTask:
                    {...action.payload, [action.key]: action.value, key: action.key}
            }
        default:
            return state;
    }
}
