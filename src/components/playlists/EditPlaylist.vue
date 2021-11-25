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

                    <form action="" class="frmEditplaylist">
                        <div class="form-group">
                            <input type="text" v-model="playlist.name" placeholder="Name Playlist" class="form-group">
                        </div>

                        <!-- Upload image playlist -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="file" @change="selectedImg" accept="image" ref="file" class="form-group">
                            <!-- <div v-if="previewImg">
                                <div>
                                    <img class="preview my-3" :src="previewImg" alt="" style="width: 50px; height: 50px;"/>
                                </div>
                            </div> -->
                        </div>

                        <div class="form-group">
                            <b-button @click="submitSavePlaylist" class="btnsubmitSavePlaylist">SAVE CHANGE</b-button>
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
                selectedImg: null,
            }        
        }
    },
    async mounted() {
        const result = await axios.get("http://localhost:3000/artists/");
        console.warn(result);
        this.artists = result.data;
    },
    methods: {
        selectedImg(event) {
            this.selectedImg = event.target.files[0];
        },
        selectedAudio(event) {
            console.log(event);
        },
        submitSavePlaylist() {

        }
    }
}
</script>

<style scoped>
.btnsubmitSavePlaylist {
    margin-left: 115px;
    background-color: white;
    color: black;
}
.btnsubmitSavePlaylist:hover {
    margin-left: 115px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>