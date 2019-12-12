function register(state = [], action) {
    switch (action.type) {
        case 'REGISTER_PATIENT':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case 'REGISTER_PHARMACIST':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state
    }
}

export default register
