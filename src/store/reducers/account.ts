const initialState = { persoInfosIsValid: false, persoInfos: {} };

interface item {
    id: any;
}

function personnalInfos(state = initialState, action): any {
    let nextState;
    switch (action.type) {
        case 'CHANGE_PERSO_INFOS':
            nextState = action.value;
            return nextState || state;
        default:
            return state;
    }
}
export default personnalInfos;
