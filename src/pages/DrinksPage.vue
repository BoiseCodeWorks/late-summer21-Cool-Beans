<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col-md-3 d-none d-md-block">
        <ol>
          <!-- <li v-for="(value, key) in drinks" :key="key">
            <router-link :to="{name: 'Sprints', params: {id: value.id}}">
              {{ key }}
            </router-link>
          </li> -->
          <router-link :to="{name: 'HotDrinks'}" v-if="$route.name != 'HotDrinks'">
            Hot
          </router-link>
          <router-link :to="{name: 'BlendedDrinks'}" v-if="$route.name != 'BlendedDrinks'">
            Blended
          </router-link>
        </ol>
      </div>
      <div class="col">
        <small>nested route here</small>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      drinks: computed(() => AppState.drinks)
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  color: red
}
</style>
