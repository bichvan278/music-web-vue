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
                            <artist-card  v-for="single in singles" :key="single.songid" :single="single"></artist-card>
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

export default {
    name: 'ArtistPage',
    components: { HeaderComp, SearchBar, FooterComp, ArtistCard },
    data() {
        return {
            singles: [],
        }
    },
    async mounted() {
        const result = await axios.get("http://localhost:3000/singles/");
        console.warn(result);
        this.singles = result.data;
    }

}
</script>

<style>

</style>