<template>
    <div class="home-page">
        <div class="header-vue">
            <header-comp></header-comp>
            <search-bar></search-bar>
        </div>
        <slide-comp></slide-comp>
        <!-- Body -->
        <div class="body-content" >
            <!-- Popular singles in home page -->
            <div class="head-title">
                <h1 class="text-page"><span>popular</span></h1>
            </div>
            <div class="popular-list" style="margin-top: -80px; margin-left: 46px">
                <section>
                    <div class="cards">
                        <single-card  v-for="single in singles" :key="single._id" :single="single"></single-card>
                    </div>
                </section>
                <router-link :to="{name: 'singlepage'}" style="text-decoration: none;">
                    <h4 class="see-more">see more . . .</h4>
                </router-link>
            </div>
            <div class="artist-slide" style="height: 450px; margin-left: 46px; margin-top: 20px;">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-page"><span>top artist</span></h1>
                    </div>
                    <div class="col-md-6">
                        <slide-artist></slide-artist>
                    </div>
                </div>
            </div>
        </div>
        <!-- End body -->
        <div class="footer" style="margin-top: 1160px">
            <footer-comp></footer-comp>
        </div>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from "@/components/partial/FooterComp.vue"
import SingleCard from "@/components/singles/SingleCard.vue"
import SearchBar from "@/components/partial/SearchBar.vue"
import SlideComp from "@/components/partial/SlideComp.vue"
import SlideArtist from './partial/SlideArtist.vue'
import { getAllSingles } from "@/services/ApiServices.js"

export default {
    name: "HomePage",
    components: {
        HeaderComp,
        SingleCard,
        SearchBar,
        SlideComp,
        FooterComp,
        SlideArtist
    },
    data() {
        return {
            singles: [],
        }
    },
    async mounted() {
        const result = await getAllSingles();
        console.warn(result);
        this.singles = result.data.slice(0,4);
    }
}
</script>

<style scoped>
.see-more {
    text-align: center;
    font-size: 22px;
    color: rgb(37, 28, 163);
}

.body-content {
    margin-top: 620px;
    position: absolute;
    display: grid;
}
.home-page {
    display: grid;
}
</style>