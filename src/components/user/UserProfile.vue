<template>
    <div class="user-pro">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 150px;">
            <div class="row">
                <div class="info-user">
                    <div class="img-user">
                        <img src="./../../assets/img/user.png" class="img-user">
                    </div>
                    <div class="detail-info">
                        <h3 class="u-title">PROFILE</h3>
                        <div class="head-title">
                            <h4 class="text-user" v-if="user"><span>{{user.username}}</span></h4>
                        </div>
                        <p>{{role.name}}</p>
                        <router-link :to="{name: 'editprofile'}" style="color: gray;">
                            <p class="edit-pro" style="color: gray;">EDIT PROFILE <i class="far fa-edit"></i></p>
                        </router-link>
                    </div>
                </div>

                <!-- Single of user -->
                <hr>
                <div class="user-single">
                    <div class="us-text">
                        <h2 class="content-title" style="color: slategrey; margin-bottom: 5px;">MY SINGLE</h2>
                        <h2 class="contet-title" style="margin-left: 5px;"> /</h2>
                        <router-link :to="{name: 'addsingle'}" style="text-decoration: none;">
                            <h2 class="content-title1" style="color: rgb(37, 28, 163);"> ADD NEW SINGLE</h2>
                        </router-link>
                    </div>

                    <!-- Table list of single's user -->
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <!-- <th scope="col">POSTE BY</th> -->
                                <th scope="col">NAME SONG</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">PLAY</th>
                                <th scope="col">EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singles" :key="single._id">
                                <!-- <td scope="row">{{single.postBy.username}}</td>                -->
                                <td>{{single.name}}</td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <router-link :to="{name: 'singledetail', params: {id: single._id} }">
                                        <button class="action-btn" id="play">
                                            <i class="far fa-play-circle" style="font-size: 25px;"></i>
                                        </button>
                                    </router-link>
                                </td>
                                <td style="display: table-cell; justify-content: left;">
                                    <router-link :to="{name: 'editsingle', params: {id: single._id} }">
                                        <b-button class="btnEdit">EDIT</b-button>
                                    </router-link>
                                    <b-button   class="btn btnEdit" 
                                                variant="danger"
                                                v-bind:value="single._id"
                                                v-on:click="removeSingle">DELETE</b-button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                    <div v-if="singles.length >= 4">
                        <router-link :to="{name: 'myallsingles'}" style="text-decoration: none;">
                            <h4 class="see-more">see more . . .</h4>
                        </router-link>
                    </div>
                </div>

                <!-- Playlists created by user -->
                <hr>
                <div class="user-playlist">
                    <div class="us-text">
                        <h2 class="content-title" style="color: slategrey; margin-bottom: 5px;">MY PLAYLIST</h2>
                        <h2 class="contet-title" style="margin-left: 5px;">/</h2>
                        <router-link :to="{name: 'addplaylist'}" style="text-decoration: none;">
                            <h2 class="content-title1" style=""> NEW PLAYLIST</h2>
                        </router-link>
                    </div>
                    <!-- List playlist's user -->
                    <section>
                        <div class="cards">
                            <playlist-card v-for="playlist in playlists" :key="playlist._id" :playlist="playlist"></playlist-card>
                        </div>
                    </section>
                    <div v-if="playlists.length >= 3">
                        <router-link :to="{name: 'myallplaylists'}" style="text-decoration: none;">
                            <h4 class="see-more">see more . . .</h4>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue'
import {getUserProfile, getSingleofOwner, getPlaylistofOwner, deleteSingle} from "@/services/ApiServices.js"
import PlaylistCard from '../playlists/PlaylistCard.vue'

export default {
    name: 'UserProfile',
    components: {
        HeaderComp,
        FooterComp,
        PlaylistCard
    },
    data() {
        return {
            user: null,
            role: null,
            singles: [],
            playlists: [],
            id_del: ''
        }
    },
    async created() {
        const result = await getUserProfile();
        console.warn(result);
        this.user = result.data;
        this.role = result.data.role;
    },
    async mounted() {
        const result1 = await getSingleofOwner();
        console.warn(result1);
        this.singles = result1.data.slice(0,4);

        const result2 = await getPlaylistofOwner();
        console.warn(result2);
        this.playlists = result2.data.slice(0,3);
    },
    methods: {
        async removeSingle($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result3 = await deleteSingle(id)
            if(result3.status === 200) {
                window.location.reload();
            }
        }
    }
}
</script>

<style scoped>
.us-text {
    display: flex;
}

.content-title1{
    color: rgb(37, 28, 163);
    margin-left: 5px;
}
.content-title1:hover {
    color: rgb(121, 157, 235);
    margin-left: 5px;
}

.info-user{
    display: flex;
}

.detail-info{
    margin-top: 25px;
    margin-left: 20px;
}

.img-user{
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

.btnEdit {
    margin: 5px;
    border: none;
}

.see-more {
    text-align: center;
    font-size: 22px;
    color: rgb(37, 28, 163);
}

</style>