import { computed } from 'vue'
import { useStore } from 'vuex'
export function useTodoList () {
  const store = useStore()
  const todoList = computed(() => store.state.todoList)
  const todosNum = computed(() => store.getters.todosNum)
  const addItem = item => store.dispatch('addItemToTodoList', item)
  const delItem = idx => store.dispatch('deleteItemOnTodoList', idx)
  return {
    todoList,
    todosNum,
    addItem,
    delItem
  }
}
