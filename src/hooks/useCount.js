import { reactive, computed, toRefs } from 'vue'

export function useCount () {
  const data = reactive({
    count: 1,
    count2: computed(() => data.count + 1)
  })

  const add = () => {
    data.count++
  }

  return {
    data: toRefs(data),
    add
  }
}
