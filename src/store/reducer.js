import * as types from  './types';
let reducer = (state,action)=>{
    let {type,payload}=action;
    switch (type) {
        case types.VIEW_HOME:
            return Object.assign({}, state, {
                home: payload.data
            });
        case types.VIEW_OPEN:
            return Object.assign({}, state, {
                open: payload.data
            });
        case types.VIEW_LIST:
            return Object.assign({}, state, {
                list: payload.data
            });
    }
    return state;
};

export default reducer;