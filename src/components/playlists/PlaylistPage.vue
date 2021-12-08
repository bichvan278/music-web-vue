<template>
    <div class="play-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>playlist</span></h1>
                </div>
                <div class="popular-list" style="margin-top: -80px;">
                    <section>
                        <div class="cards">
                            <playlist-card  v-for="playlist in playlists" :key="playlist._id" :playlist="playlist"></playlist-card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from '../partial/FooterComp.vue'
import HeaderComp from '../partial/HeaderComp.vue'
import SearchBar from '../partial/SearchBar.vue'
import PlaylistCard from './PlaylistCard.vue'
import { getAllPlaylists, searchPlaylist } from "@/services/ApiServices.js"

export default {
    name: 'PlaylistPage',
    components: { HeaderComp, SearchBar, FooterComp, PlaylistCard },
    data() {
        return {
            playlists: []
        }
    },
    async mounted() {
        const result = await getAllPlaylists();
        console.warn(result);
        this.playlists = result.data;
    }
}
</script>

<style>

</style>