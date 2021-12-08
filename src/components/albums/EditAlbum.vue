<template>
    <div class="edit-album">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 120px;">
            <div class="head-title">
                <h1 class="text-page"><span>edit album</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form edit new album -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">EDIT ALBUM</h2>

                    <form action="" class="frmEditalbum" @submit.prevent="submitSaveAlbum">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="album.name" placeholder="Name album" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <label for="alBofArtist">Artist:</label>
                            <select class="form-group">
                                <option value="alBofArtist">{{album.alBofArtist.name}}</option>
                                <option value="Artist" v-for="artist in artists" :key="artist._id">{{artist.name}}</option>
                            </select>
                        </div>
                        
                        <!-- Upload image album -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="text" v-model="album.image" class="form-group">
                            <!-- <input type="file" @change="selectedImg" accept="image" ref="file" class="form-group"> -->
                            <!-- <div v-if="previewImg">
                                <div>
                                    <img class="preview my-3" :src="previewImg" alt="" style="width: 50px; height: 50px;"/>
                                </div>
                            </div> -->
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitSaveAlbum">SAVE CHANGE</b-button>
                        </div>
                    </form>
                </div>
                <!-- End form add new album -->
                <div class="col-md-3"></div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue';
import { updateAlbum, getAlbumDetail, getAllArtists } from "@/services/ApiServices.js"

export default {
    name: 'AddAlbum',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            album: {
                name: '',
                alBofArtist: '',
                image: ''
            },
            artists: []
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;

        const id = this.$route.params.id
        const result1 = await getAlbumDetail(id);
        console.warn(result1);
        this.album = result1.data;
        // Decode Image
        // const dataImg = this.album.image;
        // const decodeImg = toString(dataImg);
        // console.log(decodeImg)
        // const decodeImg = dataImg.join();
        // console.log("String image:", decodeImg)
    },
    methods: {
        // selectedImg(event) {
        //     this.selectedImg = event.target.files[0];
        // },
        // selectedAudio(event) {
        //     console.log(event);
        // },
        async submitSaveAlbum() {
            let name = this.album.name;
            let image = this.album.image;
            
            const id = this.$route.params.id;
            const response = await updateAlbum(id,name,image);
            const {data} = response;
            alert("Update successful!");
            this.$router.replace({ name: 'albumlist' });
        }
    }
}
</script>

<style scoped>
.btnsubmitSaveAlbum {
    margin-left: 55px;
    background-color: white;
    color: black;
}
.btnsubmitSaveAlbum:hover {
    margin-left: 55px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>