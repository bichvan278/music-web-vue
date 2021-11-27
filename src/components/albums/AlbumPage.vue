<template>
    <div class="alb-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>album</span></h1>
                </div>
                <div class="popular-list" style="margin-top: -80px;">
                    <section>
                        <div class="cards">
                            <album-card  v-for="album in albums" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from '../partial/HeaderComp.vue'
import FooterComp from '../partial/FooterComp.vue'
import SearchBar from '../partial/SearchBar.vue'
import AlbumCard from './AlbumCard.vue'
import { getAllAlbums } from "@/services/ApiServices.js"

export default {
    name: 'AlbumPage',
    components: { HeaderComp, SearchBar, FooterComp, AlbumCard },
    data() {
        return {
            albums: [],
        }
    },
    async mounted() {
        const result = await getAllAlbums();
        console.warn(result);
        this.albums = result.data;
    }

}
</script>

<style>

</style>