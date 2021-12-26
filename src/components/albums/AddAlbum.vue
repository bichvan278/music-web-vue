<template>
    <div class="add-album">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>add album</span></h1>
                    </div>
                </div>
                <!-- Form add new album -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 0px;">
                    <h2 style="text-align: center">ADD NEW ALBUM</h2>

                    <form action="" class="frmAddalbum" @submit.prevent="submitAlbum">
                        <div class="form-group">
                            <input type="text" v-model="album.name" placeholder="Name album" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <label for="alBofArtist">Artist:</label>
                            <select class="form-group" @change="selectedObj">
                                <option aria-placeholder="Select Artist" 
                                        v-bind:value="artist._id" 
                                        v-for="artist in artists" :key="artist._id">{{artist.name}}
                                </option>
                            </select>
                        </div>
                        
                        <!-- Upload image album -->
                        <div class="form-group">
                            <label for="">Image:</label>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if="selectedImgFile.length > 0">
                                    <img class="preview my-3" v-bind:src="selectedImgFile" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitAlbum">ADD ALBUM</b-button>
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
import { getAllArtists, createAlbum } from "@/services/ApiServices.js"

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
                alBofArtist: ''
            },
            image: null,
            selectedImgFile: "",
            artists: []
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;
    },
    methods: {
        selectedImg(event) {
            this.image = event.target.files[0];
            console.log("image alb:",this.image)
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
            reader.readAsDataURL(this.image);
        },
        selectedObj(e) {
            this.album.alBofArtist = e.target.options[e.target.options.selectedIndex].value;
            console.log("choose:", this.album.alBofArtist);
        },
        async submitAlbum() {
            let name = this.album.name;
            let alBofArtist = this.album.alBofArtist;
            let image = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");

            if (name==='') {
                alert("Name album must be set!")
            } else {
                const response = await createAlbum(name, alBofArtist, image);
                if(response.status === 201){
                    alert("Add album successful ^^ !!!");
                    this.$router.replace({ name: 'albumlist' });
                }
                else if(response.status !== 201) {
                    alert("Name album is existed!");
                    window.location.load();
                }else{
                    alert("Try again!");
                    window.location.load();
                }
            }
        }
    }
}
</script>

<style scoped>
.btnsubmitAlbum {
    margin-left: 120px;
    background-color: white;
    color: black;
}
.btnsubmitAlbum:hover {
    margin-left: 120px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>