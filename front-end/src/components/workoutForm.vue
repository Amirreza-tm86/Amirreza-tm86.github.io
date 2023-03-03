<template>
    <div>
        <form ref="inp" :onSubmit="onsubmit">
            <div class="submit">
                <input class="inputTodo" required type="text" id="todo" v-model="store.state.newtodo">
                <button class="btn">ADD</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'workoutForm',
    setup() {
        const store = useStore()

        return {
            store
        }
    },
    methods: {
        onsubmit: function (e) {
            e.preventDefault();
            if (localStorage.getItem('user')) {
                this.store.dispatch('addtodo')

                // axios.post('/books', {
                //     Todo: this.store.state.Todo,
                //     headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                // })
                //     .then((res) => {
                //         axios.get('/books')
                //             .then(response => {
                //                 this.store.state.workouts = response.data
                //             })
                //         this.$refs.inp.reset()
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     })
            }
        },
    }
}
</script>

<style scoped>
@import url('../Style/style.css');
</style>