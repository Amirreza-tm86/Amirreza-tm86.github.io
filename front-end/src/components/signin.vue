<template>
    <form class="formAuth" @submit.prevent="submitSiginup">
        <div class="container">
            <div>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <label for="email"><b>Email</b></label>
                <input class="input" v-model="email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input class="input" v-model="password" id="password" type="password" placeholder="Enter Password"
                    name="psw" required>

                <div class="flex">
                    <input @click="showpass" type="checkbox">
                    <p class="text">show password</p>
                </div>

                <div class="clearfix">
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
                <div v-if="store.state.isError" class="error">
                    {{ store.state.error }}
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
export default {
    name: 'signin',
    data() {
        const store = useStore()
        return {
            email: '',
            password: '',
            store
        }
    },
    methods: {
        submitSiginup: async function () {
            await axios.post('/signup', {
                email: this.email,
                password: this.password
            })
                .then(response => {
                    console.log(response);
                    this.store.state.user = response.data.email
                    this.$router.push('/')
                })
                .catch(response => {
                    console.log(response.response);
                    this.store.state.error = response.response.data.msg
                    this.store.state.isError = true
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