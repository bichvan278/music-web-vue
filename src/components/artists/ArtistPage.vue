<template>
    <div class="art-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>artist</span></h1>
                </div>
                <div class="popular-list" style="margin-top: -80px;">
                    <section>
                        <div class="cards">
                            <artist-card  v-for="artist in artists" :key="artist._id" :artist="artist"></artist-card>
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
import ArtistCard from './ArtistCard.vue'
import { getAllArtists } from "@/services/ApiServices.js"

export default {
    name: 'ArtistPage',
    components: { HeaderComp, SearchBar, FooterComp, ArtistCard },
    data() {
        return {
            artists: [],
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;
    }

}
</script>

<style>

</style>