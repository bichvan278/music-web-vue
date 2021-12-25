<template>
    <div class="add-single-play" style="display: grid;">
        <div class="head-title">
            <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>single in playlist</span></h2>
        </div>
        <!-- Content -->
        <div class="container">
            <div class="row">
                <!-- Choose playlist -->
                <!-- <div class="select-play" style="margin: 35px;">
                    <div class="search-text">
                        <h3 class="s-text">choose playlist</h3>
                    </div>
                    <select class="s-bar" @change="selectedObj">
                        <option aria-placeholder="Select playlist" 
                                v-bind:value="playlist._id" 
                                v-for="playlist in playlists" :key="playlist._id">{{playlist.name}}
                        </option>
                    </select>
                </div> -->

                <!-- Search single to add -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find single..." 
                                class="b-search"
                                v-model="search">
                        <button type="submit" class="btn-search" v-on:click="submittoSearch">search</button>
                    </div>
                </div>
                <!-- Result Search -->
                <div v-if=" search !== '' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">POSTE BY</th>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">ADD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(single, index) in singleofSearch" :key="single._id">
                                <td>{{index + 1}}</td>
                                <td scope="row">{{single.postBy.username}}</td>               
                                <td>{{single.name}}</td>
                                <td v-if="single.image !== null">
                                    <img :src="`data:image/png;base64,${single.image}`" style="width: 25px; height: 25px;">
                                </td>
                                <td v-if="single.image === null">
                                    <img src="./../../assets/img/music.jpg" style="width: 25px; height: 25px;">
                                </td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <b-button   class="btn btnEdit" 
                                                style="margin-left: 0px;"
                                                v-bind:value="single._id"
                                                v-on:click="addSingle">ADD</b-button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>

                <!-- Show all single when not search -->
                <div v-if=" search === '' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">POSTE BY</th>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">ADD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singles" :key="single._id">
                                <td scope="row">{{single.postBy.username}}</td>               
                                <td>{{single.name}}</td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <b-button   class="btn btnEdit" 
                                        style="margin-left: 0px;"
                                        v-bind:value="single._id"
                                        v-on:click="addSingle">ADD</b-button>
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllSingles, getPlaylistDetail, addSingleinPlaylist, getUserProfile } from "@/services/ApiServices.js"

export default {
    data() {
        return {
            search: '',
            playlists: [],
            singles: [],
            singleIn: '',
            ofPlaylist: '',
            role: null,
            singleofSearch: [],
            owner_play: '',
            id_user: ''
        }
    },
    async created() {
        const result3 = await getUserProfile();
        this.role = result3.data.role.name;
        console.log("role:", this.role);
        this.id_user = result3.data._id;
        console.log("user_id:",this.id_user);
    },
    async mounted() {
        const result = await getAllSingles();
        console.log("singles:",result);
        this.singles = result.data;

        // const result1 = await getPlaylistofOwner();
        // console.log("playlists:",result1);
        // this.playlists = result1.data;

        this.ofPlaylist = this.$route.params.id
        const id = this.ofPlaylist;
        const result2 = await getPlaylistDetail(id);
        console.log("playlist_id:",this.ofPlaylist)
        this.owner_play = result2.data.createdBy._id;
        console.log("owner_play:",this.owner_play)
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.singleofSearch = this.singles.filter((single)=>{
                    return single.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                return false;
            }
        },
        // selectedObj(e) {
        //     this.ofPlaylist = e.target.options[e.target.options.selectedIndex].value;
        //     console.log("choose playlist:", this.ofPlaylist);
        // },
        async addSingle($event) {
            if (this.id_user === this.owner_play) {
                this.singleIn = $event.currentTarget.value;
                console.log("result:",this.singleIn);

                const singleIn = this.singleIn;
                const ofPlaylist = this.ofPlaylist;

                const response = await addSingleinPlaylist(singleIn, ofPlaylist);
                console.log("send:",response)

                if(response.status === 201) {
                    alert("Successful ^^ !!!")
                    this.$router.replace({ name: 'playlistdetail', params: {id: this.ofPlaylist} });
                }else if(response.singleIn === this.singleIn) {
                    alert("This single is added in your playlist!")
                    window.location.load();
                }
                else{
                    alert("Try again!")
                }
            } else {
                alert("Oops! You are not owner of this playlist >.<!")
                this.$router.replace({ name: 'playlistdetail', params: {id: this.ofPlaylist} });
            }
        }
    }
}
</script>

<style>
.search-bar, .select-play {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 100%;
}

select {
    padding: 5px 10px;
    text-align: center;
    border: 2px solid grey;
}

.s-text {
    line-height: 0.7em;
    text-align: center;
    font-size: 35px;
    color: rgb(197, 194, 194);
}

.s-bar {
    position: relative;
    margin: 0px 0px 9px 0;
    left: 18px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start;
}

.b-search {
    height: 42px;
    width: 40rem;
    border-radius: 4rem;
    border: 2px solid grey;
}

.btn-search {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    background-color: white;
}

.btn-search:hover {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    background-color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    color: white;
}
</style>