<template>
    <div class="art-album" style="display: grid;">
        <header-comp></header-comp>

        <!-- Content -->
        <div class="container" style="margin-top: 120px">
            <div class="head-title">
                <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>my all singles</span></h2>
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
                        <!-- <button type="submit" class="btn-search" >search</button> -->
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

                <!-- Display all when no doing search function -->
                <div v-if="search ==='' ">
                    <section>
                        <div class="cards">
                            <album-card v-for="album in albumArt" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
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
        const id = this.$router.params.id;
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

</style>