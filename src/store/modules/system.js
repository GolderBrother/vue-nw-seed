/*
 * @Author: james.zhang 
 * @Date: 2019-01-28 09:53:53 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-01-28 09:54:55
 * @Description: 系统信息的状态管理 
 */

const state = {
    systemData: {
        macData: "",
        cpuData: ""
    }
}
const getters = {
    macData: state => state.systemData.macData,
    cpuData: state => state.systemData.cpuData,
}
const actions = {
    setMacData({commit}, data) {
        commit("SET_MAC_DATA", data)
    },
    setCpuData({commit}, data) {
        commit("SET_CPU_DATA", data)
    }
}
const mutations = {
    SET_MAC_DATA:(state, data) => {
        state.systemData.macData = data;
    },
    SET_CPU_DATA:(state, data) => {
        state.systemData.cpuData = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}