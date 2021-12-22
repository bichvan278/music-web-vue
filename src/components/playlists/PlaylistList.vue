<template>
    <div class="playlist-list">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 140px;">
            <div class="head-title">
                <h1 class="text-page"><span>all playlist</span></h1>
            </div>
            <div class="row">
                <div class="nav">
                    <div class="form-group">
                        <router-link :to="{name: 'addplaylist'}">
                            <b-button class="btnAddPlaylist">+ NEW PLAYLIST</b-button>
                        </router-link>
                    </div>
                    <div class="form-group" style="width: 350px; margin-left:300px;">
                        <input type="text" placeholder="Search here ..."  class="search-bar" v-model="search" @keyup="submittoSearch">
                    </div>
                </div>

                <!-- List of all playlists -->
                <table class="table" style=" margin-top: 30px;" v-if="search ==='' "> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME PLAYLIST</th>
                            <th scope="col">IMG</th>
                            <th scope="col">CREATED BY</th>
                            <th scope="col">CREATE AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" playlist in playlists" :key="playlist._id">
                            <td scope="row">{{playlist._id}}</td>               
                            <td>
                                <router-link    :to="{name: 'playlistdetail', params: {id: playlist._id} }"
                                                style="text-decoration: none;">
                                    <p>{{playlist.name}}</p>
                                </router-link>
                            </td>
                            <td>image</td>
                            <td>{{playlist.createdBy.username}}</td>
                            <td>{{playlist.createdAt}}</td>
                        </tr>     
                    </tbody>
                </table>
                <!-- Render result of search playlist -->
                <table class="table" style=" margin-top: 30px;" v-else> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME PLAYLIST</th>
                            <th scope="col">IMG</th>
                            <th scope="col">CREATED BY</th>
                            <th scope="col">CREATE AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" playlist in playlistofSearch" :key="playlist._id">
                            <td scope="row">{{playlist._id}}</td>               
                            <td>
                                <router-link    :to="{name: 'playlistdetail', params: {id: playlist._id} }"
                                                style="text-decoration: none;">
                                    <p>{{playlist.name}}</p>
                                </router-link>
                            </td>
                            <td>image</td>
                            <td>{{playlist.createdBy.username}}</td>
                            <td>{{playlist.createdAt}}</td>
                        </tr>     
                    </tbody>
                </table>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from "@/components/partial/FooterComp.vue"
import { getAllPlaylists, deletePlaylist } from "@/services/ApiServices.js"

export default {
    name:'PlaylistList',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            playlists: [],
            playlistofSearch: [],
            search: ''
        }
    },
    async mounted() {
        const result = await getAllPlaylists();
        console.warn(result);
        this.playlists = result.data;
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search !== ''){
                this.playlistofSearch = this.playlists.filter((playlist)=>{
                    return playlist.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                this.playlistofSearch = this.playlists;
            }
        }
    }
}
</script>

<style scoped>
th, td {
    text-align: center;
}
.btnEdit {
    margin: 5px;
    border: none;
}
.nav{
    display: flex;
    justify-content: center;
}
.btnAddPlaylist {
    margin-left: 0px;
    background-color: white;
    color: black;
}
.btnAddPlaylist:hover {
    margin-left: 0px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}
.search-bar {
    width: 100%;
    height: 60%;
    margin-top: 10px;
    border: 1px solid rgb(42, 42, 100);
}
.search-bar:focus {
    width: 100%;
    height: 70%;
    margin-top: 10px;
    border: 1px solid rgb(42, 42, 100);
}



</style>