<template>
    <div class="artist">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 90px; display: grid;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>artist</span></h1>
                </div>
                <div class="art-detail">
                    <!-- Display image artist -->
                    <div class="art-img" v-if="currentArt.image ==='' ">
                        <img src="./../../assets/img/dongnhi.jpg" class="art-img">
                    </div>
                    <div class="art-img" v-if="currentArt.image !=='' ">
                        <img :src="`data:image/png;base64,${currentArt.image}`" class="art-img">
                    </div>
                    <!-- End -->
                    <h2 class="art-name">{{currentArt.name}}</h2>
                    <p style="text-align: center; font-size: 15px;">{{currentArt.dob}}</p>
                    <p style="text-align: center; font-size: 15px;">{{currentArt.description}}</p>
                    <div v-if="role !== null">
                        <router-link :to="{name: 'editartist', params: {id: currentArt._id}}" style="color: gray; text-align: center;">
                            <p class="edit-pro" style="color: gray;">EDIT ARTIST <i class="far fa-edit"></i></p>
                        </router-link>
                    </div>
                </div>

                <!-- Cont of this Artist -->
                <div class="art-single">

                    <!-- Show singles -->
                    <hr>
                    <h2 class="content-title" style="color: slategrey;">POPULAR SINGLE</h2>
                    <section>
                        <div class="cards">
                            <single-card v-for="single in singleArt" :key="single._id" :single="single"></single-card>
                        </div>
                        <div v-if="singleArt.length >= 3">
                            <router-link :to="{name: 'artistsingle', params: {id: currentArt._id} }" style="text-decoration: none;">
                                <h4 class="see-more">see more . . .</h4>
                            </router-link>
                        </div>
                    </section>
                    <hr>
                    <!-- Show album -->
                    <h2 class="content-title" style="color: slategrey;">ALBUM</h2>
                    <section>
                        <div class="cards">
                            <album-card v-for="album in albumArt" :key="album._id" :album="album"></album-card>
                        </div>
                        <div v-if="albumArt.length >= 3">
                            <router-link :to="{name: 'artistalbum', params: {id: currentArt._id} }" style="text-decoration: none;">
                                <h4 class="see-more">see more . . .</h4>
                            </router-link>
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
import { getArtistDetail, getSinglesofArtist, getAlbumsofArtist, getUserProfile } from "@/services/ApiServices.js"
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
                _id: '',
                name:'',
                dob: '',
                description: '',
                image: ''
            },
            singleArt: [],
            albumArt: [],
            role: null
        }
    },
    async created() {
        const result3 = await getUserProfile();
        this.role = result3.data.role.name;
        console.log("role:", this.role);
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getArtistDetail(id);
        console.warn(result);
        this.currentArt = result.data;

        const result1 = await getSinglesofArtist(id);
        console.warn(result1);
        this.singleArt = result1.data.allSingle.slice(0,3);

        const result2 = await getAlbumsofArtist(id);
        console.warn(result2);
        this.albumArt = result2.data.albumofArt.slice(0,3);
    }

}
</script>

<style>
.art-img {
    width: 980px;
    height: 350px;
    object-fit: cover;
    object-position: 50% 50%;
}

.art-name {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    margin-top: 20px;
    color: rgb(37, 28, 163);
}

.art-detail {
    margin-top: -40px;
    display: grid;
    justify-content: center;
}

.see-more {
    text-align: center;
    font-size: 22px;
    color: rgb(37, 28, 163);
}
</style>