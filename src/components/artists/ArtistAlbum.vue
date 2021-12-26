<template>
    <div class="art-album" style="display: grid;">
        <header-comp></header-comp>

        <!-- Content -->
        <div class="container" style="margin-top: 120px;">
            <div class="head-title">
                <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>all albums</span></h2>
            </div>

            <div class="row">
                <!-- Search album -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find album of this artist..." 
                                class="b-search"
                                v-model="search"
                                @keyup="submittoSearch">
                    </div>
                </div>

                <!-- Result of this search func -->
                <div v-if="search !=='' ">
                    <section>
                        <div class="cards">
                            <album-card v-for="album in searchAlbumArt" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
                </div>
                <div v-if="searchAlbumArt.length === 0 && search !=='' " style="display: grid; justify-content: center;">
                    <h2 class="text-title" style="text-align: center; color: gray;">cannot find album</h2>
                </div>

                <!-- Display all when no doing search function -->
                <div v-if="search ==='' ">
                    <section>
                        <div class="cards">
                            <album-card v-for="album in albumArt" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
                </div>
                <div v-if="albumArt.length === 0 " style="display: grid; justify-content: center;">
                    <h2 class="text-title" style="text-align: center; color: gray;">no album</h2>
                    <img src="./../../assets/img/song.png" alt="" class="no-song">
                </div>
                <!-- End search -->

            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from '../partial/FooterComp.vue'
import HeaderComp from '../partial/HeaderComp.vue'
import AlbumCard from '../albums/AlbumCard.vue'
import { getAlbumsofArtist } from "@/services/ApiServices.js"

export default {
    name: 'ArtistSingle',
    components: {HeaderComp, FooterComp, AlbumCard},
    data() {
        return {
            albumArt: [],
            searchAlbumArt: [],
            search: ''
        }
    },
    async mounted() {
        const id = this.$route.params.id;
        const result2 = await getAlbumsofArtist(id);
        this.albumArt = result2.data.albumofArt;
        console.log("alb-art:",this.albumArt);
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.searchAlbumArt = this.albumArt.filter((album)=>{
                    return album.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                alert("Cannot found album! ");
                window.location.load();
            }
        }
    }

}
</script>

<style>
.search-bar, .select-play {
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

select {
    padding: 5px 10px;
    text-align: center;
    border: 2px solid grey;
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

.text-title {
    text-align: center;
    color: gray;
    margin-top: 50px;
    font-size: 55px;
}

.no-song{
    width: 250px;
    height: 250px;
    margin: 50px;
}
</style>