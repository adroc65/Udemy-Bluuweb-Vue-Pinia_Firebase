import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('userStore', {
    state: () => (
            { 
                userData: null
            }
    ), //Retorno implisito.

    // Las ACTIONS son similar a los Métodos se usan para modificar el estado.
    actions: {
        async registerUser(email, password) {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        }
       
    },
});