/**
 * Created by wyw on 2018/8/4.
 */
import api from '../api';
export default {
    getUserInfo({commit, state, dispatch}, that) { // 注释
        api.getUserInfo().then(r => {
           
            
        });
    },
}