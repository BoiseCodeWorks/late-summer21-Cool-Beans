<template>
  <div class="component">
    <h1>Blended Drinks</h1>
    {{ drinks }}
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      drinks: computed(() => AppState.drinks.blended)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
