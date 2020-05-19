<template>
  <div @click="handleClick" class="item">
    {{todoItemText}}
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'todoItem',
  props: {
    todoItemText: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { ctx } = getCurrentInstance()
    const handleClick = () => {
      ctx.$emit('del')
    }
    return {
      ...props,
      handleClick
    }
  }
}
</script>
<style lang="less">
  .item {
    height: 30px;
    line-height: 30px;
    background: #f3f3f3;
    margin-bottom: 10px;
    cursor: pointer;
  }
</style>
