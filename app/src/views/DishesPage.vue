<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import NewDishForm from '../components/NewDishForm.vue'
import DishCard from '../components/DishCard.vue'
import SideMenu from '../components/SideMenu.vue'
import type { Dish } from '@/types'
import { useDishStore } from '@/stores/DishStore'

/**
 * Data
 */
const dishStore = useDishStore()
const dishList = dishStore.list
const filterText = ref('')
const isShowNewForm = ref(false)

/**
 * Computed
 */
const filteredDishList = computed((): Dish[] => {
  return dishList.filter((dish) => {
    if (dish.name) {
      return dish.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return dishList
    }
  })
})

const numberOfDishes = computed((): number => {
  return filteredDishList.value.length
})

/**
 * Methods
 */
const addDish = (payload: Dish): void => {
  dishStore.addDish(payload)
  hideForm()
}

const deleteDish = (payload: Dish): void => {
  dishStore.deleteDish(payload)
}

const hideForm = (): void => {
  isShowNewForm.value = false
}

const updateFilterText = (event: KeyboardEvent) => {
  filterText.value = (event.target as HTMLInputElement).value
}

/**
 * Lifecycle
 */
onMounted((): void => {
  const route = useRoute()

  if (route.query.new) {
    isShowNewForm.value = true
  }
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Main Content -->
      <div class="column">
        <h1 class="title">Dishes</h1>

        <!-- CTA Bar -->
        <nav v-if="!isShowNewForm" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ numberOfDishes }}</strong> dishes
              </p>
            </div>

            <p class="level-item">
              <button @click="isShowNewForm = true" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Dish name"
                    :value="filterText"
                    @keyup.enter="updateFilterText"
                  />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Dish Form -->
        <NewDishForm v-if="isShowNewForm" @add-new-dish="addDish" @cancel-new-dish="hideForm" />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredDishList" class="column is-full" :key="`item-${item}`">
            <DishCard :dish="item" @delete-dish="deleteDish" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
