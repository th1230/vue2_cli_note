//引入axios
import axios from "axios";
// 引入隨機id nanoid
import { nanoid } from "nanoid";

export default {
  //開啟命名空間
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") == 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("請填入姓王的人名");
      }
    },

    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [],
  },
  getters: {},
};
