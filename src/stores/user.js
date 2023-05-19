import { defineStore } from 'pinia';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut, 
} from "firebase/auth";
import { auth } from '../firebaseConfig';
import router from '../router'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('userStore', {
    state: () => (
            { 
                userData: null,
                loadingUser: false,
                loadingSession: false,
            }
    ), //Retorno implisito.

    // Las ACTIONS son similar a los Métodos se usan para modificar el estado.
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                //console.log(user);
                this.userData = { email: user.email, uid: user.uid }
                this.login = true
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false
            }
        },

        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password);
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false
            }
        },

        async logOut() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        },

        currentUser(){
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged( auth, ( user ) =>{
                    if (user) {
                        this.userData = { email: user.email, uid: user.uid }
                    } else {
                        this.userData = null
                    }
                    resolve( user )
                }, e => reject(e))  // Retorna el error.
                unsuscribe()        // La documentación de Firebase pide este "unsuscribe", es un observador.
            })
        },
    },
});