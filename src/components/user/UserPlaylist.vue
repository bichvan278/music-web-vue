<template>
    <div class="my-playlist" style="display: grid;">
        <header-comp></header-comp>
        <!-- Content -->
        <div class="container" style="margin-top: 120px">
            <div class="head-title">
                <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>my all playlists</span></h2>
            </div>

            <div class="row">
                <!-- Search playlist -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find your playlist..." 
                                class="b-search"
                                v-model="search">
                        <button type="submit" class="btn-search" v-on:click="submittoSearch">search</button>
                    </div>
                </div>

                <!-- Show result of searching playlist -->
                <div v-if="search !=='' ">
                    <section>
                        <div class="cards">
                            <playlist-card v-for="playlist in playlistofSearch" :key="playlist._id" :playlist="playlist"></playlist-card>
                        </div>
                    </section>
                </div>

                <!-- Show all playlist when no search func -->
                <div v-if="search ==='' ">
                    <section>
                        <div class="cards">
                            <playlist-card v-for="playlist in playlists" :key="playlist._id" :playlist="playlist"></playlist-card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../partial/HeaderComp.vue'
import PlaylistCard from '../playlists/PlaylistCard.vue'
import { getPlaylistofOwner } from "@/services/ApiServices.js"

export default {
    components: { HeaderComp, PlaylistCard },
    data() {
        return {
            playlists: [],
            playlistofSearch: [],
            search: ''
        }
    },
    async mounted() {
        const result2 = await getPlaylistofOwner();
        console.warn(result2);
        this.playlists = result2.data;
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.playlistofSearch = this.playlists.filter((playlist)=>{
                    return playlist.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                return false;
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
</style>