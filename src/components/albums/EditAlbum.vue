<template>
    <div class="edit-album">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="head-title">
                <h1 class="text-page"><span>edit album</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form add new single -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">EDIT ALBUM</h2>

                    <form action="" class="frmEditalbum">
                        <div class="form-group">
                            <input type="text" v-model="single.namesong" placeholder="Name album" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <select v-model="single.artist" class="form-group">
                                <option value="Artist" v-for="artist in artists" :key="artist.id">{{artist.name_a}}</option>
                            </select>
                        </div>
                        
                        <!-- Upload image single -->
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
                            <b-button @click="submitSaveAlbum" class="btnsubmitSaveAlbum">SAVE CHANGE</b-button>
                        </div>
                    </form>
                </div>
                <!-- End form add new single -->
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
    name: 'AddAlbum',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            single: {
                namesong: '',
                artist: '',
                selectedImg: null,
                selectedAudio: null
            },
            artists: []
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
        submitSaveAlbum() {

        }
    }
}
</script>

<style scoped>
.btnsubmitSaveAlbum {
    margin-left: 105px;
    background-color: white;
    color: black;
}
.btnsubmitSaveAlbum:hover {
    margin-left: 105px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>