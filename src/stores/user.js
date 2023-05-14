import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('userStore', {
    state: () => (
            { 
                userData: 'adroc65@outlook.es',
                loginData: 'Usuario Logeado',
            }
    ), //Retorno implisito.
    
    // Los GETTERS son similares a una propiedad computada, no cambian el valor del STATE
    getters: {
        minuscula( state ){
            return state.userData.toLowerCase()
        }
    },

    // Las ACTIONS son similar a los Métodos se usan para modificar el estado.
    actions: {
        registerUser(name) {
            this.userData = name;
        },
    },
})