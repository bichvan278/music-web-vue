<template>
    <div class="play-detail">
        <header-comp></header-comp>
        <div class="container content-detail" style="margin-top: 150px; display: grid;">
            <div class="row">
                <!-- Playlist information -->
                <div class="info-playlist">
                    <!-- Display image -->
                    <div class="img-playlist" v-if="playlist.image !== '' ">
                        <img :src="`${playlist.image}`" class="img-playlist">
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
                        <div v-if="role !== null">
                            <router-link :to="{name: 'editplaylist', params: {id: playlist._id}}" style="color: gray;">
                                <p class="edit-pro" style="color: gray;">EDIT PLAYLIST <i class="far fa-edit"></i></p>
                            </router-link>
                        </div>
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
                                <th scope="col" v-if="role !== null">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singlesinplay" :key="single._id">
                                <td scope="row">{{single.singleIn[0].name}}</td>               
                                <td>Artist</td>
                                <td style="display: flex; justify-content: left;">
                                    <button class="action-btn" id="play">
                                        <i class="far fa-play-circle" style="font-size: 25px;"></i>
                                    </button>
                                </td>
                                <td v-if="role !== null">
                                    <button class="action-btn" 
                                            id="delete"
                                            v-bind:value="single.singleIn[0]._id"
                                            v-on:click="removeSingleinPlaylist">
                                        <i class="fas fa-trash-alt" style="font-size: 25px;"></i>
                                    </button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>
                <!-- Layout if no song in playlist -->
                <div v-if="singlesinplay.length === 0 && role === null" style="display: grid; justify-content: center;">
                    <img src="./../../assets/img/song.png" alt="" class="no-song">
                    <h2 class="text-title" style="text-align: center; color: gray;">no song in playlist</h2>
                </div>
                <!-- For Member and Admin with no song in playlist -->
                <div v-if=" singlesinplay.length === 0  && role !== null" style="display: grid; justify-content: center; margin-top: 20px;">
                    <router-link :to="{name: 'addsingleinplaylist', params: {id: playlist._id}}" style="text-decoration: none;">
                        <h2 class="content-title1" style="color: rgb(37, 28, 163);"><i class="fas fa-plus"></i> ADD SINGLE</h2>
                    </router-link>
                    <img src="./../../assets/img/song.png" alt="" class="no-song">
                    <h2 class="text-title" style="text-align: center; color: gray;">no song in playlist</h2>
                </div>
                <!-- For Member and Admin want to add more song -->
                <div v-if=" singlesinplay.length > 0 && role !== null" style="display: grid; justify-content: center; margin-top: 20px;">
                    <router-link :to="{name: 'addsingleinplaylist', params: {id: playlist._id}}" style="text-decoration: none;">
                        <h2 class="content-title1" style="color: rgb(37, 28, 163);"><i class="fas fa-plus"></i> ADD SINGLE</h2>
                    </router-link>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from '../partial/FooterComp.vue'
import HeaderComp from '../partial/HeaderComp.vue'
import { getPlaylistDetail, getAllSinglesinPlaylist, getUserProfile, delSingleinPlaylist } from "@/services/ApiServices.js"

export default {
    name: 'PlaylistDetial',
    components: {HeaderComp, FooterComp},
    data () {
        return {
            playlist: {
                name: null,
                username: null,
                image: null
            },
            single: {
                artistID: '',
                singleIn: []
            },
            singlesinplay: [],
            imagePlay: null,
            role: null,
            id_user: null,
            owner_play: '',
            id_del: '',
            id_play: ''
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getPlaylistDetail(id);
        console.warn(result);
        this.playlist = result.data;
        this.owner_play = result.data.createdBy._id;
        console.log("owner_play:",this.owner_play);

        // Convert string to image file (no completed)
        // this.playlist.image = atob(result.data.image);
        console.log("image:", this.playlist.image)

        const result2 = await getAllSinglesinPlaylist(id);
        console.warn(result2.data.getAllsingles);
        this.singlesinplay = result2.data.getAllsingles;

    },
    async created() {
        const result3 = await getUserProfile();
        this.role = result3.data.role.name;
        console.log("role:", this.role);
        this.id_user = result3.data._id;
        console.log("id_user:",this.id_user);
    },
    methods: {
        async removeSingleinPlaylist($event){
            if (this.owner_play === this.id_user) {
                this.id_del = $event.currentTarget.value
                console.log("result:",this.id_del)
                const id_del = this.id_del

                this.id_play = this.$route.params.id
                const id_play = this.id_play
                
                console.log("id_play:",this.id_play)
                alert("Are you sure to remove it?")
            
                const result1 = await delSingleinPlaylist(id_play, id_del)
                if(result1.status === 200) {
                    window.location.reload();
                }
            } else {
                alert("Oops! You are not owner of this playlist >.<!")
                window.location.reload();
            }
        }
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
.content-title1{
    color: rgb(37, 28, 163);
    margin-top: 20px;
    margin-left: 10px;
    text-align: center;
}
.content-title1:hover {
    color: rgb(121, 157, 235);
    margin-top: 20px;
    margin-left: 10px;
    text-align: center;
}
</style>