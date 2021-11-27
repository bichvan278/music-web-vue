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
                        <p class="edit-pro">{{album.alBofArtist.name}}</p>
                        <p class="edit-pro">{{album.release}}</p>
                        <!-- <router-link :to="{name: 'editalbum'}" style="color: gray;">
                            <p class="edit-pro" style="color: gray;">EDIT ALBUM <i class="far fa-edit"></i></p>
                        </router-link> -->
                    </div>
                </div>
                <!-- Show singles in this album -->
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
                            <td scope="row">{{single.singleInAlb[0].name}}</td>
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
        console.warn(result1);
        this.singlesinalb = result1.data;
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

</style>