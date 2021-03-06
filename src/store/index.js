import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user';
import team from './module/team'
import auth from './module/auth'
import meeting from './module/meeting'
import notification from './module/notification'
import message from './module/message'
import feedback from './module/feedback'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        team,
        auth,
        meeting,
        notification,
        message,
        feedback
    }
});
export default store;