<template>
    <div class="artist">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 120px; display: grid;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>artist</span></h1>
                </div>
                <div class="art-detail" style=" margin-top: -25px;">
                    <div class="art-img" v-if="currentArt.image ==='' ">
                        <img src="./../../assets/img/dongnhi.jpg" class="art-img">
                    </div>
                    <div class="art-img" v-if="currentArt.image !=='' ">
                        <img :src="`data:image/png;base64,${currentArt.image}`" class="art-img">
                    </div>
                    <h2 class="art-name">{{currentArt.name}}</h2>
                    <p style="text-align: center; font-size: 15px;">{{currentArt.dob}}</p>
                    <p style="text-align: center; font-size: 15px;">{{currentArt.description}}</p>
                    <hr>
                </div>
                <!-- Cont of this Artist -->
                <div class="art-single">
                    <!-- Show singles -->
                    <h2 class="content-title" style="color: slategrey;">POPULAR SINGLE</h2>
                    <section>
                        <div class="cards">
                            <single-card v-for="single in singleArt" :key="single._id" :single="single"></single-card>
                        </div>
                    </section>
                    <hr>
                    <!-- Show album -->
                    <h2 class="content-title" style="color: slategrey;">ALBUM</h2>
                    <section>
                        <div class="cards">
                            <album-card v-for="album in albumArt" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue'
import { getArtistDetail, getSinglesofArtist, getAlbumsofArtist } from "@/services/ApiServices.js"
import SingleCard from '../singles/SingleCard.vue'
import AlbumCard from '../albums/AlbumCard.vue'

export default {
    name: 'ArtistDetail',
    components: {
        HeaderComp,
        FooterComp,
        SingleCard,
        AlbumCard
    },
    data() {
        return {
            currentArt: {
                name:'',
                dob: '',
                description: '',
                image: ''
            },
            singleArt: [],
            albumArt: []
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getArtistDetail(id);
        console.warn(result);
        this.currentArt = result.data;

        const result1 = await getSinglesofArtist(id);
        console.warn(result1);
        this.singleArt = result1.data.allSingle;

        const result2 = await getAlbumsofArtist(id);
        console.warn(result2);
        this.albumArt = result2.data.albumofArt;
    }

}
</script>

<style>
.art-img {
    width: 980px;
    height: 350px;
    object-fit: cover;
    object-position: 50% 50%;
    margin-left: 65px;
}

.art-name {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    margin-top: 20px;
    color: rgb(37, 28, 163);
}
</style>