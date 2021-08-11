import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  drinks: {
    HotDrinks: ['Drip Coffee', 'Tea', 'Hot Chocolate'],
    BlendedDrinks: ['Peach Sunrise', 'Blended Coffee', 'Blended Slice of Cake']
    // specialty: ['Tom\'s Madness']
  },
  food: {
    pastries: ['Muffins', 'Scones', 'Cake', 'Danish'],
    burritos: ['Curizho', 'Jallapenio', 'Chocolate Cake'],
    bowls: ['Bean', 'Peach', 'Acai', 'Super Cake Bowl'],
    specialty: ['Tom\'s Madness Soup', 'Jar of Almonds', 'Bag \'o Cheese and Baglees']
  }
})
