import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      coins: 0,
      stage: 1,
      player: {
        damage: 1,
        level: 1,
        damageIncreaseOnLevelUp: 1,
        levelUpCost: 5,
        description: "master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of the last living practitioners of the Ionian art of Wuju, Yi has devoted his life to continuing the legacy of his people—scrutinizing potential new disciples with the Seven Lenses of Insight to identify the most worthy among them.",
        showDescription: false
      },

      skills: {
        judgement: {
          damage: 0,
          level: 0,
          damageIncreaseOnLevelUp: 120,
          levelUpCost: 240,
          unlocked: false,
          image: "judgement.png",
          description: "rapidly spinning your sword for 30s, dealing constant damage over time (15 minutes CD)",
          showDescription: false
        },
        gullotine: {
          damage: 0,
          level: 0,
          damageIncreaseOnLevelUp: 24000,
          levelUpCost: 8000,
          unlocked: false,
          image: "gullotine.png"
        }  
      },

      enemies: {
        displaying: {
          enemy: "gromp.png",
          currentHealth: 16,
          totalHealth: 16,
          name: 'minion',
        },
        
        boss: {
          types: ["mountain-drake.png"],
          totalHealth: 60,
          currentHealth: 60,
          name: 'Boss',
          totalTime: 30,
          currentTime: 30,
        },
  
        minion: {
          types: ["gromp.png", "krug.png"],
          currentTypeIndex: 0,
          total: 10,
          current: 0,
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
          damageIncreaseOnLevelUp: 13,
          imageLocation: "garen.png",
          description: "Born into the noble Crownguard family, along with his younger sister Lux, Garen knew from an early age that he would be expected to defend the throne of Demacia with his life. His father, Pieter, was a decorated military officer, while his aunt Tianna was Sword-Captain of the elite Dauntless Vanguard—and both were recognized and greatly respected by King Jarvan III. It was assumed that Garen would eventually come to serve the king’s son in the same manner.", 
          showDescription: false
        },

        darius: {
          name: "Darius - the hand of noxus",
          level: 0,
          damage: 0,
          levelUpCost: 760,
          damageIncreaseOnLevelUp: 142,
          imageLocation: "darius.png",
          description: "There is no greater symbol of Noxian might than Darius, the nation’s most feared and battle-hardened leader. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire’s enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the commander of the Trifarian Legion can expect no mercy.",
          showDescription: false
        },

        leesin: {
          name: "Yasuo - the unforgiven",
          level: 0,
          damage: 0,
          levelUpCost: 52900,
          damageIncreaseOnLevelUp: 3500,
          imageLocation: "yasuo.png",
          description: "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self-defense. In time, his master’s true killer was revealed, and his brother mysteriously returned from death, yet Yasuo still could not forgive himself for all he had done. Now, he wanders the world with only the wind to guide his blade.",
          showDescription: false
        }
      },

      damagePerSecond: 0,
      isBoss: false,
      isTrainingGround: false,
      isAudio: true,
      isMenu: false,
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

    updateTrainingGroundStatus(state, value) {
      state.isTrainingGround = value
    },

    updateAudioStatus(state, value) {
      state.isAudio = value
    },

    updateMenuStatus(state, value) {
      state.isMenu = value
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