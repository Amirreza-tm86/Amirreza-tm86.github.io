<template>
    <div class="contanier">
        <div class="topnav">
            <router-link class="link" :to="getItem ? '/' : '/signin'">Home</router-link>
            <router-link id="link" class="link" :to="!getItem ? '/signin' : '/'">sign up</router-link>
            <router-link id="link" class="link" :to="!getItem ? '/login' : '/'">Login</router-link>
            <button class="logout" v-if="store.state.user" @click="logout">Log out</button>
            <span class="me-2" v-if="store.state.user">Hello {{ userwithoutpass }}!</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import 'vue-router'
import { useStore } from 'vuex';
import router from '../../routes/router';
import { getAuth } from '../remove';
export default {
    name: 'navVue',
    setup() {
        const store = useStore()
        const currect = window.location.pathname
        const logout = () => {
            window.location.reload()
            getAuth()
            store.dispatch('logout')
        }

        const userwithoutpass = store.state.user.replace('@gmail.com', '')

        const getItem = localStorage.getItem('user')

        if (!getItem && currect === '/') {
            router.push('/signin')
        } if (getItem && currect === '/signin') {
            router.push('/')
        } if (getItem && currect === '/login') {
            router.push('/')
        }

        return {
            logout,
            store,
            getItem,
            userwithoutpass
        }
    }
}
</script>

<style scoped>
@import url('../Style/style.css');
.me-2 {
    margin-left: 0.5rem;
}
</style>