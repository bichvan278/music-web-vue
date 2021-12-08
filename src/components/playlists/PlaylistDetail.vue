<template>
    <div class="play-detail">
        <header-comp></header-comp>
        <div class="container content-detail" style="margin-top: 150px; display: grid;">
            <div class="row">
                <!-- Playlist information -->
                <div class="info-playlist">
                    <!-- Display image -->
                    <div class="img-playlist" v-if="playlist.image !== '' ">
                        <img :src="`data:image/jpg;base64,${playlist.image}`" class="img-playlist">
                    </div>
                    <div class="img-playlist" v-else>
                        <img src="./../../assets/img/music.jpg" class="img-playlist">
                    </div>
                    <!-- End display image -->
                    <div class="detail-info-play">
                        <h4 class="u-title">PLAYLIST</h4>
                        <div class="head-title">
                            <h3 class="text-user"><span>{{playlist.name}}</span></h3>
                        </div>
                        <p class="edit-pro">CREATE BY {{playlist.createdBy.username}}</p>
                        <router-link :to="{name: 'editplaylist', params: {id: playlist._id}}" style="color: gray;">
                            <p class="edit-pro" style="color: gray;">EDIT PLAYLIST <i class="far fa-edit"></i></p>
                        </router-link>
                    </div>
                </div>
                <!-- Show singles in this PLAYLIST -->
                <div v-if="singlesinplay.length > 0">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">ARTIST</th>
                                <th scope="col">PLAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singlesinplay" :key="single._id">
                                <td scope="row">{{single.name}}</td>               
                                <td>Artist</td>
                                <td style="display: flex; justify-content: left;">
                                    <button class="action-btn" id="play">
                                        <i class="far fa-play-circle" style="font-size: 25px;"></i>
                                    </button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>
                <div v-else style="display: grid; justify-content: center;">
                    <img src="./../../assets/img/song.png" alt="" class="no-song">
                    <h2 class="text-title" style="text-align: center; color: gray;">no song in playlist</h2>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from '../partial/FooterComp.vue'
import HeaderComp from '../partial/HeaderComp.vue'
import { getPlaylistDetail, getAllSinglesinPlaylist } from "@/services/ApiServices.js"

export default {
    name: 'PlaylistDetial',
    components: {HeaderComp, FooterComp},
    data () {
        return {
            playlist: {
                name: null,
                username: null,
                image: ''
            },
            singlesinplay: [],
            imagePlay: null
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getPlaylistDetail(id);
        console.warn(result);
        this.playlist = result.data;

        // Convert string to image file (no completed)
        // this.playlist.image = atob(result.data.image);
        console.log("image:", this.playlist.image)

        const result2 = await getAllSinglesinPlaylist(id);
        console.warn(result2.data.getAllsingles[0].singleIn);
        this.singlesinplay = result2.data.getAllsingles[0].singleIn;
    }
}
</script>

<style>
th, td {
    text-align: left;
}

.info-playlist{
    display: flex;
    border: 2px solid rgb(37, 28, 163);
}

.detail-info-play{
    margin-top: 25px;
    margin-left: 20px;
}

.img-playlist{
    width: 200px;
    height: 200px;
}

.text-user {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    /* color: rgb(197, 194, 194); */
    color: rgb(37, 28, 163);
}
.action-btn {
    background: white;
    border: 0px;
    font-size: 25px;
    color: rgb(21, 22, 26);
    cursor: pointer;
    padding: 10px;
    margin: 0px 15px;
    margin-left: -5px;
}

.no-song{
    width: 250px;
    height: 250px;
    margin: 50px;
}
</style>