export const BUY_LESSON = 'BUY_LESSON';
export const RECHARGE = 'RECHARGE';

//account相关的action creator
export const buyLessonActionCreator = payload => {
    return {
        type:BUY_LESSON,
        payload
    }
}

export const rechargeActionCreator = payload => {
    return {
        type:RECHARGE,
        payload
    }
}

//mineItemDateSource相关的action creator
export const ADD_DATA_TO_MINE_PAGE = 'ADD_DATA_TO_MINE_PAGE';
export const SET_IS_DOTED = 'SET_IS_DOTED';
export const addDataToMinePageActionCreator = payload => {
    return{
        type:ADD_DATA_TO_MINE_PAGE,
        payload,
    }
}
export const setIsDotedActionCreator = payload => {
    return{
        type:SET_IS_DOTED,
        payload
    }
}