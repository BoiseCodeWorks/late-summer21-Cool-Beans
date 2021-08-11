<template>
  <div class="component">
    <h1>Hot Drinks</h1>
    {{ drinks }}
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      drinks: computed(() => AppState.drinks.hot)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
