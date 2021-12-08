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
                        <input type="text" placeholder="Search here ..."  class="search-bar">
                    </div>
                </div>

                <!-- List of all artists -->
                <table class="table" style=" margin-top: 30px;"> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME ARTIST</th>
                            <th scope="col">IMG</th>
                            <th scope="col">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="artist in artists" :key="artist._id">
                            <td scope="row">{{artist._id}}</td>               
                            <td>{{artist.name}}</td>
                            <td>image</td>
                            <!-- <td>{{artist.image}}</td> -->
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
            id_del: ''
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;
    },
    methods: {
        async removeArtist($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result1 = await deleteArtist(id)
            if(result1.status === 200) {
                window.location.reload();
                // this.$router.replace({ name: 'playlistlist' });
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