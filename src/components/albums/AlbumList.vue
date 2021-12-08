<template>
    <div class="album-list">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 140px;">
            <div class="head-title">
                <h1 class="text-page"><span>album list</span></h1>
            </div>
            <div class="row">
                <div class="nav">
                    <div class="form-group">
                        <router-link :to="{name: 'addalbum'}">
                            <b-button class="btnAddAlbum">+ NEW ALBUM</b-button>
                        </router-link>
                    </div>
                    <div class="form-group" style="width: 350px; margin-left:300px;">
                        <input type="text" placeholder="Search here ..."  class="search-bar">
                    </div>
                </div>

                <!-- List of all singles -->
                <table class="table" style=" margin-top: 30px;"> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME ALBUM</th>
                            <th scope="col">IMG</th>
                            <th scope="col">ARTIST</th>
                            <th scope="col">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="album in albums" :key="album._id">
                            <td scope="row">{{album._id}}</td>               
                            <td>{{album.name}}</td>
                            <td>image</td>
                            <!-- <td>{{album.image}}</td> -->
                            <td>{{album.alBofArtist.name}}</td>
                            <td style="display: flex; justify-content: center;">
                                <router-link :to="{name: 'editalbum', params: {id: album._id} }">
                                    <b-button class="btn btnEdit">EDIT</b-button>
                                </router-link>
                                <b-button   class="btn btnEdit" 
                                            variant="danger"
                                            v-bind:value="album._id"
                                            v-on:click="removeAlb">DELETE</b-button>
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
import { getAllAlbums, deleteAlbum } from "@/services/ApiServices.js"

export default {
    name:'AlbumList',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            albums: [],
            id_del: ''
        }
    },
    async mounted() {
        const result = await getAllAlbums();
        console.warn(result);
        this.albums = result.data;
    },
    methods: {
        async removeAlb($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result1 = await deleteAlbum(id)
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
.btnAddAlbum {
    margin-left: 0px;
    background-color: white;
    color: black;
}
.btnAddAlbum:hover {
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