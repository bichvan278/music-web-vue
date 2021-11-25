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
                    <!-- <tbody>
                        <tr v-for="single in singles" :key="single.songid">
                            <td scope="row">{{single.songid}}</td>               
                            <td>{{single.namesong}}</td>
                            <td>{{single.imgsong}}</td>
                            <td>{{single.artistName}}</td>
                            <td style="display: flex; justify-content: center;">
                                <b-button class="btn btnEdit">EDIT</b-button>
                                <b-button class="btn btnEdit" variant="danger">DELETE</b-button>
                            </td>
                        </tr>     
                    </tbody> -->
                </table>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from "@/components/partial/FooterComp.vue"

export default {
    name:'AlbumList',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            artistName: null,
            singles: []
        }
    },
    async mounted() {
        axios
            .get('http://localhost:3000/singles')
            .then(response => {
                this.singles = response.data;
            axios 
                .get("http://localhost:3000/artists?embed=singles&id=" + response.data[0].artistID)
                .then( resq =>{
                    this.artistName = resq.data[0].name_a;
                    console.log(this.artistName);
            });

            })
            .catch(error => console.log(error))

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