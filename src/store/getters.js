/**
 * Created by wyw on 2018/8/4.
 */
export default {
    unReadCount(state) {
        let count = 0;
        state.data.forEach(v => {
            count += v.count;
        });
        return count;
    }
}