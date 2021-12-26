<template>
    <div class="search-bar">
        <div class="search-text">
            <h3 class="s-text">search here</h3>
        </div>
        <div class="s-bar">
            <input  type="text" 
                    value placeholder="  find something about music..." 
                    class="b-search"
                    v-model="search">
            <button type="submit" class="btn-search" @click="submittoSearch">search</button>
        </div>
    </div>
</template>

<script>
import { searchPlaylist } from "@/services/ApiServices.js"

export default {
    name: 'SearchBar',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        async submittoSearch(value) {
            // console.log(this.search)
            const route = { path: '/search', query: {name: this.search}}
            this.$router.push(route)
            window.location.load()
            console.log(route.query.name)
        }
    }
}
</script>

<style>
.search-bar {
    margin-top: 127px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 100%;
}

.s-text {
    line-height: 0.7em;
    text-align: center;
    font-size: 35px;
    color: rgb(197, 194, 194);
}

.s-bar {
    position: relative;
    margin: 0px 0px 9px 0;
    left: 18px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start;
}

.b-search {
    height: 42px;
    width: 40rem;
    border-radius: 4rem;
    border: 2px solid grey;
}

.btn-search {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    background-color: white;
}

.btn-search:hover {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    background-color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    color: white;
}

</style>