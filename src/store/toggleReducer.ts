export const TOGGLE_CREATE = "toggleCreate"
export const TOGGLE_EDIT = "toggleEdit"

type DefaultStateType = {
     isCreateModalOpen: boolean,
    isEditModalOpen: boolean,
}
const defaultState = {
    isCreateModalOpen: false,
    isEditModalOpen: false,
}
export const toggleReducer = (state = defaultState, action: any): DefaultStateType => {
    switch (action.type) {
        case TOGGLE_CREATE:
            return {...state, isCreateModalOpen: !state.isCreateModalOpen}
        case TOGGLE_EDIT:
            return {...state, isEditModalOpen: !state.isEditModalOpen}
        default:
            return state;
    }
}
