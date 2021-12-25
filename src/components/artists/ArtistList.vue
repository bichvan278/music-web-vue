<template>
    <div class="artist-list">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 140px;">
            <div class="head-title">
                <h1 class="text-page"><span>artist list</span></h1>
            </div>
            <div class="row">
                <div class="nav">
                    <div class="form-group">
                        <router-link :to="{name: 'addartist'}">
                            <b-button class="btnAddArtist">+ NEW ARTIST</b-button>
                        </router-link>
                    </div>
                    <div class="form-group" style="width: 350px; margin-left:300px;">
                        <input type="text" placeholder="Search here ..."  class="search-bar" v-model="search" @keyup="submittoSearch">
                    </div>
                </div>

                <!-- Display result of searching artist-->
                <div v-if="search !=='' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">NAME ARTIST</th>
                                <th scope="col">IMG</th>
                                <th scope="col">EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(artist, index) in artistofSearch" :key="artist._id">
                                <td scope="row">{{index + 1}}</td>               
                                <td>
                                    <router-link    :to="{name: 'artistdetail', params: {id: artist._id} }"
                                                    style="text-decoration: none;">
                                        <p>{{artist.name}}</p>
                                    </router-link>
                                </td>
                                <td v-if="artist.image !== null">
                                    <img :src="`data:image/png;base64,${artist.image}`" style="width: 25px; height: 25px;">
                                </td>
                                <td v-if="artist.image === null">
                                    <img src="./../../assets/img/music.jpg" style="width: 25px; height: 25px;">
                                </td>
                                <td style="display: flex; justify-content: center;">
                                    <router-link :to="{name: 'editartist', params: {id: artist._id} }">
                                        <b-button class="btn btnEdit">EDIT</b-button>
                                    </router-link>
                                    <b-button   class="btn btnEdit" 
                                                variant="danger"
                                                v-bind:value="artist._id"
                                                v-on:click="removeArtist">DELETE</b-button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>

                <!-- Display all artists when no use search func -->
                <div v-if="search ==='' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">NAME ARTIST</th>
                                <th scope="col">IMG</th>
                                <th scope="col">EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(artist, index) in artists" :key="artist._id">
                                <td scope="row">{{index + 1}}</td>               
                                <td>
                                    <router-link    :to="{name: 'artistdetail', params: {id: artist._id} }"
                                                    style="text-decoration: none;">
                                        <p>{{artist.name}}</p>
                                    </router-link>
                                </td>
                                <td v-if="artist.image !== null">
                                    <img :src="`data:image/png;base64,${artist.image}`" style="width: 25px; height: 25px;">
                                </td>
                                <td v-if="artist.image === null">
                                    <img src="./../../assets/img/music.jpg" style="width: 25px; height: 25px;">
                                </td>
                                <td style="display: flex; justify-content: center;">
                                    <router-link :to="{name: 'editartist', params: {id: artist._id} }">
                                        <b-button class="btn btnEdit">EDIT</b-button>
                                    </router-link>
                                    <b-button   class="btn btnEdit" 
                                                variant="danger"
                                                v-bind:value="artist._id"
                                                v-on:click="removeArtist">DELETE</b-button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from "@/components/partial/FooterComp.vue"
import { getAllArtists, deleteArtist } from "@/services/ApiServices.js"

export default {
    name:'ArtistList',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            artists: [],
            artistofSearch: [],
            id_del: '',
            search: ''
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.artistofSearch = this.artists.filter((artist)=>{
                    return artist.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                return false;
            }
        },
        async removeArtist($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result1 = await deleteArtist(id)
            if(result1.status === 200) {
                window.location.reload();
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
.btnAddArtist {
    margin-left: 0px;
    background-color: white;
    color: black;
}
.btnAddArtist:hover {
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