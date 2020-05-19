<template>
  <input
    type="text"
    placeholder="write something..."
    v-model="todoItem"
    @keyup.enter="handleAdd"
  />
  <button @click="handleAdd">add todo item</button>
  <button @click="toggle">toggle test directive</button>
  <p>the number of todos is {{todosNum}}</p>
  <p v-hide="show">test directive</p>
  <TodoListItem
    v-for="(item, index) in todoList"
    @del="delItem(index)"
    :todoItemText="item"
    :key="index"
  />
</template>

<script>
import { reactive, toRefs } from 'vue'
// import { useRoute } from 'vue-router'
import { useTodoList } from '../hooks/useTodoList'
import TodoListItem from './TodoListItem.vue'
export default {
  components: {
    TodoListItem
  },
  setup (props, ctx) {
    const data = reactive({
      show: true,
      todoItem: ''
    })
    // const { params, path } = useRoute()
    // console.log('useRoute', params, path)
    const { todoList, todosNum, addItem, delItem } = useTodoList()
    const handleAdd = () => {
      addItem(data.todoItem)
      data.todoItem = ''
    }
    const toggle = () => {
      data.show = !data.show
    }
    return {
      ...toRefs(data),
      todoList,
      todosNum,
      handleAdd,
      delItem,
      toggle
    }
  }
}
</script>
