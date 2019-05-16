/*
 * @Author: james.zhang 
 * @Date: 2019-01-28 09:50:30 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-01-28 09:52:05
 * @Description: 访客登记涉及流程的状态管理
 */

const state = {
    visitorData: {
        visitorPhotoByEnter: "",
        reasons: [],
        certTypes: [],
        visitNumber: ""
    }
}

const getters = {
    visitorPhotoByEnter: state => state.visitorData.visitorPhotoByEnter,
    reasons: state => state.visitorData.reasons,
    certTypes: state => state.visitorData.certTypes,
    visitNumber: state => state.visitorData.visitNumber,
}

const actions = {
    // 来访登记的抓拍照片
    setVisitorPhotoByEnter: ({commit}, data) => {
        commit("SET_VISITOR_PHOTO_BY_ENTER", data)
    },
    // 来访事由
    setReasons: ({commit}, data) => { 
        commit("SET_REASONS", data)
    },
    // 证件类型
    setCertTypes: ({commit}, data) => {
        commit("SET_CERTTYPES", data)
    },
    // 来访编号
    setVisitNumber: ({commit}, data) => {
        commit("SET_VISIT_NUMBER", data)
    },
}

const mutations = {
    SET_VISITOR_PHOTO_BY_ENTER: (state, data) => {
        state.visitorData.visitorPhotoByEnter = data;
    },
    SET_REASONS: (state, data) => {
        state.visitorData.reasons = data
    },
    SET_CERTTYPES: (state, data) => {
        state.visitorData.certTypes = data
    },
    SET_VISIT_NUMBER: (state, data) => {
        state.visitorData.visitNumber = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}