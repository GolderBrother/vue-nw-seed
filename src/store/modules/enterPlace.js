/*
 * @Author: james.zhang 
 * @Date: 2019-01-28 09:46:49 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-01-28 09:47:13
 * @Description: 获取当前登记地点的状态管理
 */

const state = {
    enterPlace: {
        id: ""
    }
}
const getters = {
    enterPlaceId: state => state.enterPlace.id
}
const actions = {
    setEnterPlaceId({commit}, data) {
        commit("SET_ENTERPLACE_ID", data)
    }
}
const mutations = {
    SET_ENTERPLACE_ID:(state, data) => {
        state.enterPlace.id = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}