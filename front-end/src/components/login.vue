<template>
    <form class="formAuth" @submit.prevent="authlogin">
        <div class="container">
            <div>
                <h1>Log in</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <label for="email"><b>Email</b></label>
                <input class="input" v-model="email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input class="input" v-model="password" type="password" id="password" placeholder="Enter Password"
                    name="psw" required>

                <div class="flex">
                    <input @click="showpass" type="checkbox">
                    <p class="text">show password</p>
                </div>

                <div class="clearfix">
                    <button type="submit" class="signupbtn">Log in</button>
                </div>
                <div v-if="store.state.isError" class="error">
                    {{ store.state.error }}
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex'
export default {
    name: 'login',
    data() {
        const store = useStore()
        return {
            email: '',
            password: '',
            store
        }
    },
    methods: {
        authlogin: async function () {
            await axios.post('/login', {
                email: this.email,
                password: this.password
            })
                .then(response => {
                    this.store.state.user = response.data.email
                    localStorage.setItem('user', response.data.email)
                })
                .catch(response => {
                    this.store.state.error = response.response.data.msg
                    this.store.state.error = response.response.data.msg
                    this.store.state.isError = true
                    console.log(response.response);
                })
            window.location.reload()
        },
        showpass: function () {
            const inp = document.getElementById('password')
            if (inp.type === "password") {
                inp.type = "text"
            }
            else {
                inp.type = "password"
            }
        }
    }
}
</script>

<style scoped>
@import url('../Style/style.css');
</style>