import Vuex from 'vuex'
import {
  ADD_ITEM_TO_LIST,
  ADD_ITEM_TO_TODO_LIST,
  DELETE_ITEM_ON_LIST,
  DELETE_ITEM_ON_TODO_LIST
} from './types'

export default Vuex.createStore({
  state: {
    dataList: [],
    todoList: []
  },
  getters: {
    todosNum (state) {
      return state.todoList.length
    }
  },
  mutations: {
    [ADD_ITEM_TO_LIST] (state, payload) {
      state.dataList.push(payload)
    },
    [DELETE_ITEM_ON_LIST] (state, index) {
      state.dataList.splice(index, 1)
    },
    [ADD_ITEM_TO_TODO_LIST] (state, payload) {
      state.todoList.push(payload)
    },
    [DELETE_ITEM_ON_TODO_LIST] (state, index) {
      state.todoList.splice(index, 1)
    }
  },
  actions: {
    addItemToTodoList ({ commit }, payload) {
      commit('ADD_ITEM_TO_TODO_LIST', payload)
    },
    deleteItemOnTodoList ({ commit }, payload) {
      commit('DELETE_ITEM_ON_TODO_LIST', payload)
    }
  }
})
