


const initiallyState = {
    count: 0
};

const countReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case "COUNT" :
            return {
                count: action.payLoad
            };
        default:
            return state
    }
};

export default countReducer