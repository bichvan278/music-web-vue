<template>
    <div class="edit-playlist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="head-title">
                <h1 class="text-page"><span>edit playlist</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">EDIT PLAYLIST</h2>

                    <form action="" class="frmEditplaylist" @submit.prevent="submitSavePlaylist">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="playlist.name" placeholder="Name Playlist" class="form-group">
                        </div>

                        <!-- Upload image playlist -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="text" v-model="playlist.image" placeholder="Image URL" class="form-group">
                            <!-- <input type="file" @change="selectedImg" accept="image" ref="file" class="form-group"> -->
                            <!-- <div v-if="previewImg">
                                <div>
                                    <img class="preview my-3" :src="previewImg" alt="" style="width: 50px; height: 50px;"/>
                                </div>
                            </div> -->
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitSavePlaylist">SAVE CHANGE</b-button>
                        </div>
                    </form>
                </div>
                <!-- End form add new playlist -->
                <div class="col-md-3"></div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue';
import { updatePlaylist, getPlaylistDetail } from "@/services/ApiServices.js"

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
                image: '',
                selectedImg: null
            }        
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getPlaylistDetail(id);
        console.warn(result);
        this.playlist = result.data;
    },
    methods: {
        selectedImg(event) {
            this.selectedImg = event.target.files[0];
        },
        async submitSavePlaylist() {
            let name = this.playlist.name;
            let image = this.playlist.image;
            
            const id = this.$route.params.id;
            const response = await updatePlaylist(id,name,image);
            const {data} = response;
            alert("Update successful!");
            this.$router.replace({ name: 'playlistlist' });
        }
    }
}
</script>

<style scoped>
.btnsubmitSavePlaylist {
    margin-left: 60px;
    background-color: white;
    color: black;
}
.btnsubmitSavePlaylist:hover {
    margin-left: 60px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>