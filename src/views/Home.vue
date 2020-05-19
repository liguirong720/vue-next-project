<template>
  <button @click="add">add count</button>
  <div ref="doms">count: {{count}}</div>
  <div class="red">double count: {{count2}}</div>
  <button @click="toTodoList">go to todo list by router</button>
</template>

<script>
import { useRouter } from 'vue-router'
import { useCount } from '../hooks/useCount'
import { ref, onMounted, watch } from 'vue'

export default {
  setup () {
    const { push } = useRouter()
    // 获取DOM节点
    const doms = ref()
    onMounted(() => {
      console.log(doms.value)
    })
    const toTodoList = () => {
      push({
        path: '/todoList',
        params: {
          from: 'home'
        }
      })
    }
    const { data, add } = useCount()
    watch(
      () => data.count,
      (newVal, oldVal) => {
        console.log('newVal: ', newVal.value)
        console.log('oldVal: ', oldVal && oldVal.value)
      },
      {
        immediate: true,
        deep: true
      }
    )
    return {
      ...data,
      add,
      doms,
      toTodoList
    }
  }
}
</script>
<style lang="less">
  .red {
    color: red;
  }
</style>
