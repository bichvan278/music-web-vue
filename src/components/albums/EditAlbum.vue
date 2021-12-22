<template>
    <div class="edit-album">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 120px;">
            <div class="row">
                <div class="col-md-6">
                     <div class="head-title">
                        <h1 class="text-page"><span>edit album</span></h1>
                    </div>
                </div>
                <!-- Form edit new album -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 0px;">
                    <!-- <h2 style="text-align: center">EDIT ALBUM</h2> -->

                    <form action="" class="frmEditalbum" @submit.prevent="submitSaveAlbum">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="album.name" placeholder="Name album" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <label for="alBofArtist">Artist:</label>
                            <select class="form-group" @change="selectedObj">
                                <option value="alBofArtist">{{album.alBofArtist.name}}</option>
                                <option v-for="artist in artists" :key="artist._id"
                                        v-bind:value="artist._id">{{artist.name}}</option>
                            </select>
                        </div>
                        
                        <!-- Upload image album -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="text" v-model="album.image" class="form-group">
                        </div>

                        <div class="form-group">
                            <span>Change image:</span>
                            <input type="file" @change="selectedImg" accept="image" name="selectedImgFile" class="form-group">
                            <div v-if="previewImg.length > 0">
                                <img class="preview my-3" v-bind:src="previewImg" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitSaveAlbum">SAVE CHANGE</b-button>
                        </div>
                    </form>
                </div>
                <!-- End form add new album -->
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
            previewImg: "",
            selectedImgFile: null,
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
        this.album.image = atob(result1.data.image);
        // Decode Image
        // const dataImg = this.album.image;
        // const decodeImg = toString(dataImg);
        // console.log(decodeImg)
        // const decodeImg = dataImg.join();
        // console.log("String image:", decodeImg)
    },
    methods: {
        async selectedImg(event) {
            this.selectedImgFile = event.target.files[0];
            console.log("image alb:",this.selectedImgFile);
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.previewImg = e.target.result;
                }
            reader.readAsDataURL(this.selectedImgFile);
        },
        selectedObj(e) {
            this.album.alBofArtist = e.target.options[e.target.options.selectedIndex].value;
            console.log("change artist:", this.album.alBofArtist);
        },
        async submitSaveAlbum() {
            let name = this.album.name;
            let alBofArtist = this.album.alBofArtist;
            let image = btoa(this.selectedImgFile);
            
            const id = this.$route.params.id;
            const response = await updateAlbum(id,name,alBofArtist,image);
            const {data} = response;
            alert("Update successful!");
            this.$router.replace({ name: 'albumlist' });
        }
    }
}
</script>

<style scoped>
.btnsubmitSaveAlbum {
    margin-left: 145px;
    background-color: white;
    color: black;
}
.btnsubmitSaveAlbum:hover {
    margin-left: 145px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>