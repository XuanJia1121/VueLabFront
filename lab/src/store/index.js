import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {ApiServer} from '../api/http.js'

const state = {
    userinfo:{}
};

const mutations = {
    SET_USERINFO(state,data){
        state.userinfo = data;
    },
};

const getters = {
    GET_USERINFO:state => {
        return state.userinfo;
    },
}

const actions = {
    LoginApi({commit},userData){
        return new Promise((resolve,reject) => {
            ApiServer.post('/login',userData)
            .then(function(data){
                let user = JSON.parse(data.data);
                commit('SET_USERINFO',user);
                resolve(user);
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