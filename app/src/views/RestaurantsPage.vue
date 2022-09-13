<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import NewRestaurantForm from '../components/NewRestaurantForm.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import SideMenu from '../components/SideMenu.vue'
import type { Restaurant } from '@/types'
import { RESTAURANT_LIST } from '@/stubs'

/**
 * Data
 */
const filterText = ref('')
const restaurantList = ref<Restaurant[]>(RESTAURANT_LIST)
const isShowNewForm = ref(false)

/**
 * Computed
 */
const filteredRestaurantList = computed((): Restaurant[] => {
  return restaurantList.value.filter((restaurant) => {
    if (restaurant.name) {
      return restaurant.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return restaurantList.value
    }
  })
})

const numberOfRestaurants = computed((): number => {
  return filteredRestaurantList.value.length
})

/**
 * Methods
 */
const addRestaurant = (payload: Restaurant): void => {
  restaurantList.value.push(payload)
  hideForm()
}

const deleteRestaurant = (payload: Restaurant): void => {
  restaurantList.value = restaurantList.value.filter(({ id }) => id !== payload.id)
}

const hideForm = (): void => {
  isShowNewForm.value = false
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
        <h1 class="title">Restaurants</h1>

        <!-- CTA Bar -->
        <nav v-if="!isShowNewForm" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ numberOfRestaurants }}</strong> restaurants
              </p>
            </div>

            <p class="level-item">
              <button @click="isShowNewForm = true" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Restaurant name" v-model="filterText" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Restaurant Form -->
        <NewRestaurantForm v-if="isShowNewForm" @add-new-restaurant="addRestaurant" @cancel-new-restaurant="hideForm" />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredRestaurantList" class="column is-full" :key="`item-${item}`">
            <RestaurantCard :restaurant="item" @delete-restaurant="deleteRestaurant" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
