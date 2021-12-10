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
                        <div v-if="role === 'Admin' ">
                            <router-link :to="{name: 'editalbum', params: {id: album._id} }" style="color: gray;">
                                <p class="edit-pro" style="color: gray;">EDIT ALBUM <i class="far fa-edit"></i></p>
                            </router-link>
                        </div>
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
                <!-- For Watcher + User -->
                <div v-if="singlesinalb.length === 0" style="display: grid; justify-content: center; margin-top: 20px;">
                    <img src="./../../assets/img/song.png" alt="" class="no-song">
                    <h2 class="text-title" style="text-align: center; color: gray;">no song in playlist</h2>
                </div>
                <!-- For Admin -->
                <div v-if=" singlesinalb.length > 0 && role === 'Admin' " style="display: grid; justify-content: center; margin-top: 20px;">
                    <router-link :to="{name: 'addsingleinalbum'}" style="text-decoration: none;">
                        <h2 class="content-title1" style="color: rgb(37, 28, 163);"><i class="fas fa-plus"></i> ADD SINGLE</h2>
                    </router-link>
                </div>
                <!-- For Admin with no single -->
                <div v-if=" singlesinalb.length === 0  && role === 'Admin' " style="display: grid; justify-content: center; margin-top: 20px;">
                    <router-link :to="{name: 'addsingleinalbum'}" style="text-decoration: none;">
                        <h2 class="content-title1" style="color: rgb(37, 28, 163);"><i class="fas fa-plus"></i> ADD SINGLE</h2>
                    </router-link>
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
import { getAlbumDetail, getAllSinglesinAlbum, getUserProfile } from "@/services/ApiServices.js"

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
            singlesinalb: [],
            role: null
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

    },
    async created() {
        const result2 = await getUserProfile();
        this.role = result2.data.role.name;
        console.log("role:", this.role);
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
    width: 265px;
    height: 265px;
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
.content-title1{
    color: rgb(37, 28, 163);
    margin-top: 20px;
    text-align: center;
}
.content-title1:hover {
    color: rgb(121, 157, 235);
    margin-top: 20px;
    text-align: center;
}
</style>