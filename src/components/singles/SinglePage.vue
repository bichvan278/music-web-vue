<template>
    <div class="single-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>single</span></h1>
                </div>
                <div class="popular-list" style="margin-top: -80px;">
                    <section>
                        <div class="cards">
                            <single-card v-for="single in singles" :key="single._id" :single="single"></single-card>
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
import { getAllSingles } from "@/services/ApiServices.js"
import SingleCard from '@/components/singles/SingleCard.vue'

export default {
    name: 'singlePage',
    components: { HeaderComp, SearchBar, FooterComp, SingleCard },
    data() {
        return {
            singles: [],
        }
    },
    async mounted() {
        const result = await getAllSingles();
        console.warn(result);
        this.singles = result.data;
    }
}
</script>

<style>

</style>