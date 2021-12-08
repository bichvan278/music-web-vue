<template>
    <div class="alb-detail">
        <header-comp></header-comp>
        <div class="container content-detail" style="margin-top: 150px; display: grid;">
            <div class="row">
                <!-- Album information -->
                <div class="info-album">
                    <div class="img-album">
                        <!-- <img src="./../../assets/img/music.jpg" class="img-album"> -->
                        <img v-bind:src=" `data:image/jpg;base64,${album.image}` " class="img-album">
                    </div>
                    <div class="detail-info-play">
                        <h4 class="u-title">ALBUM</h4>
                        <div class="head-title">
                            <h3 class="text-user"><span>{{album.name}}</span></h3>
                        </div>
                        <router-link :to="{name: 'artistdetail', params:{id: album.alBofArtist._id}}"  class="edit-pro" style="text-decoration: none">
                            <p class="edit-pro">{{album.alBofArtist.name}}</p>
                        </router-link>
                        <p class="edit-pro1">{{album.release}}</p>
                        <!-- <router-link :to="{name: 'editalbum'}" style="color: gray;">
                            <p class="edit-pro" style="color: gray;">EDIT ALBUM <i class="far fa-edit"></i></p>
                        </router-link> -->
                    </div>
                </div>
                <!-- Show singles in this album -->
                <div v-if="singlesinalb.length > 0">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">ARTIST</th>
                                <th scope="col">PLAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singlesinalb" :key="single._id">
                                <td scope="row">{{single.name}}</td>
                                <td>{{album.alBofArtist.name}}</td>
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
import { getAlbumDetail, getAllSinglesinAlbum} from "@/services/ApiServices.js"

export default {
    name: 'AlbumDetial',
    components: {HeaderComp, FooterComp},
    data() {
        return {
            album: {
                image: null,
                name: null,
                alBofArtist: null,
                realese: null
            },
            singlesinalb: []
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getAlbumDetail(id);
        console.warn(result);
        this.album = result.data;

        const result1 = await getAllSinglesinAlbum(id);
        console.warn(result1.data.getAllsingles[0].singleInAlb);
        this.singlesinalb = result1.data.getAllsingles[0].singleInAlb;

    }
}
</script>

<style>

.info-album{
    display: flex;
    border: 2px solid rgb(37, 28, 163);
}

.detail-info-play{
    margin-top: 25px;
    margin-left: 20px;
}

.img-album{
    width: 200px;
    height: 200px;
}

.text-user {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    margin-top: 25px;
    /* color: rgb(197, 194, 194); */
    color: rgb(37, 28, 163);
}

.edit-pro {
    font-size: 20px;
    color: rgb(121, 157, 235);
}

.edit-pro:hover {
    font-size: 20px;
    color: rgb(60, 61, 63);
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