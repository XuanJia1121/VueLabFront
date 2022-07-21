import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {ApiServer} from '../api/http.js'

const state = {
    userinfo:{},
    errMsg:'',
};

const mutations = {
    SET_USERINFO(state,data){
        state.userinfo = data;
    },
    SET_ERRMSG(state,data){
        state.errMsg = data;
    }
};

const getters = {
    GET_USERINFO:state => {
        return state.userinfo;
    },
    GET_ERRMSG:state => {
        return state.errMsg;
    },
}

const actions = {
    LoginApi({commit},userData){
        return new Promise((resolve,reject) => {
            ApiServer.post('/login',userData)
            .then(function(data){
                if (data.code != '200') {
                    commit('SET_ERRMSG',data.msg);
                    reject(data);
                } else {
                    let user = JSON.parse(data.data);
                    commit('SET_USERINFO',user);
                    commit('SET_ERRMSG',data.msg);
                    resolve(data);
                }
            })
            .catch(function(err){
                reject(err);
            })
        })
    },
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});