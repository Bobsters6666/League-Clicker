import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      coins: 10005,
      stage: 1,
      player: {
        damage: 1,
        level: 1,
        damageIncreaseOnLevelUp: 1,
        levelUpCost: 10,
      },

      skills: {
        judgement: {
          damage: 0,
          level: 0,
          damageIncreaseOnLevelUp: 120,
          levelUpCost: 240
        },
        gullotine: {
          damage: 0,
          level: 0,
          damageIncreaseOnLevelUp: 24000,
          levelUpCost: 8000
        }  
      },

      enemies: {
        displaying: {
          enemy: "gromp.png",
          currentHealth: 12,
          totalHealth: 12,
          name: 'minion',
        },
        
        boss: {
          types: ["mountain-drake.png"],
          totalHealth: 100,
          currentHealth: 100,
          name: 'Boss',
          totalTime: 30,
          currentTime: 30,
        },
  
        minion: {
          types: ["gromp.png", "krug.png"],
          currentTypeIndex: 0,
          total: 10,
          current: 1,
          totalHealth: 12,
          currentHealth: 12,
          name: 'Minion'
        },
      },


      heroes: {
        garen: {
          name: "Garen - the might of Demacia",
          level: 0,
          damage: 0,
          levelUpCost: 50,
          damageIncreaseOnLevelUp: 15,
          imageLocation: "garen.png"
        },

        darius: {
          name: "Darius - the hand of noxus",
          level: 0,
          damage: 0,
          levelUpCost: 1760,
          damageIncreaseOnLevelUp: 280,
          imageLocation: "darius.png"
        },

        leesin: {
          name: "Yasuo - the unforgiven",
          level: 0,
          damage: 0,
          levelUpCost: 52900,
          damageIncreaseOnLevelUp: 3500,
          imageLocation: "yasuo.png"
        }
      },

      damagePerSecond: 0,
      isBoss: false,
      isTrainingGround: false,
    };
  }, 

  mutations: {
    updateCoins(state, value) {
      state.coins = value;
    },

    updateStage(state) {
      state.stage++
    },

    updateBossStatus(state, value) {
      state.isBoss = value
    },

    updateDamagePerSecond(state) {
      let damagePerSecond = 0;
      
      for (const heroKey in state.heroes) {
        const hero = state.heroes[heroKey];
        damagePerSecond += hero.damage;
      }
      
      state.damagePerSecond = damagePerSecond;
    },
    
    reduceCurrentHealth(state) {
      state.enemies.displaying.currentHealth -= (state.damagePerSecond / 10);
    }
  },
  
  actions: {
    startDamageInterval({ commit }) {
      setInterval(() => {
        commit('updateDamagePerSecond')
        commit('reduceCurrentHealth');
      }, 100);
    }
  },

  plugins: [
    (store) => {
      // Start the damagePerSecond interval when the store is created
      store.dispatch('startDamageInterval');
    }
  ]

  // Add actions, getters, and modules as needed
});

export default store;