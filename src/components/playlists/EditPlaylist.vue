<template>
    <div class="edit-playlist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>edit playlist</span></h1>
                    </div>
                </div>

                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 10px;">
                    <!-- <h2 style="text-align: center">EDIT PLAYLIST</h2> -->

                    <form action="" class="frmEditplaylist" @submit.prevent="submitSavePlaylist">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="playlist.name" placeholder="Name Playlist" class="form-group">
                        </div>

                        <!-- Upload image playlist -->
                        <div class="form-group">
                            <span>Image:</span>
                            <div v-if="playlist.image !== null ">
                                <img :src="`data:image/png;base64,${playlist.image}`" class="img-playlist"/>
                            </div>
                            <div v-else>
                                <img src="./../../assets/img/music.jpg" class="img-playlist"/>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <span>Change image:</span>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if="selectedImgFile.length > 0">
                                <img class="preview my-3" v-bind:src="selectedImgFile" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitSavePlaylist">SAVE CHANGE</b-button>
                        </div>
                    </form>

                </div>
                <!-- End form add new playlist -->
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue';
import { updatePlaylist, getPlaylistDetail, getUserProfile } from "@/services/ApiServices.js"

export default {
    name: 'EditPlaylist',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            playlist: {
                name: '',
                image: ''
            },
            image: null,
            selectedImgFile: "",
            sendImg: null,
            role: null        
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getPlaylistDetail(id);
        console.warn(result);
        this.playlist = result.data;
    },
    async created() {
        const result1 = await getUserProfile();
        console.warn(result1);
        this.role = result1.data.role.name;
        console.log("role:",this.role);
    },
    methods: {
        selectedImg(event) {
            this.image = event.target.files[0];
            console.log("image alb:",this.image);
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
            reader.readAsDataURL(this.image);
        },
        async submitSavePlaylist() {
            let name = this.playlist.name;
            
            // Check image before send to server
            if (this.image !== null) {
                this.sendImg = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");
            } else {
                this.sendImg = this.playlist.image.replace("data:", "").replace(/^.+,/, "");
            }
            let image = this.sendImg;
            
            const id = this.$route.params.id;
            const response = await updatePlaylist(id,name,image);
            if (response.status === 200) {
                alert("Update successful!");
                if (this.role === 'Member') {
                    // this.$router.replace({ name: 'userprofile' });
                    window.history.back()
                } else {
                    this.$router.replace({ name: 'playlistlist' });
                }
            } else {
                alert("Update is failed !!!");
                window.location.load();
            }
        }
    }
}
</script>

<style scoped>
.btnsubmitSavePlaylist {
    margin-left: 140px;
    background-color: white;
    color: black;
}
.btnsubmitSavePlaylist:hover {
    margin-left: 140px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}
.img-playlist {
    width: fit-content; 
    height: 150px;
}
</style>