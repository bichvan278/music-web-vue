<template>
    <div class="edit-sing">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>edit song</span></h1>
                    </div>
                </div>
                <!-- Form add new single -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 0px;">
                    <!-- <h2 style="text-align: center">EDIT SINGLE</h2> -->
                    <form action="" class="frmEditsingle" @submit.prevent="submitSaveSingle">

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="single.name" placeholder="Name song" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <label for="artistID">Artist:</label>
                            <select class="form-group" @change="selectedObj">
                                <option value="artistID">{{single.artistID.name}}</option>
                                <option v-for="artist in artists" :key="artist._id"
                                        v-bind:value="artist._id">{{artist.name}}</option>
                            </select>
                        </div>

                        <!-- Upload image single -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="text" v-model="single.image" placeholder="No Image " class="form-group">
                        </div>

                        <div class="form-group">
                            <span>Change image:</span>
                            <input type="file" @change="selectedImg" accept="image" name="selectedImgFile" class="form-group">
                            <div v-if="previewImg.length > 0">
                                <img class="preview my-3" v-bind:src="previewImg" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>

                        <!-- Upload audio single -->
                        <div class="form-group">
                            <span>Audio:</span>
                            <input type="text" v-model="single.audio" placeholder="Audio URL" class="form-group">
                        </div>

                        <div class="form-group">
                            <span>Change audio:</span>
                            <input type="file" @change="selectedAudio" accept="audio" name="selectedAudioFile" class="form-group">
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnSavesingle">SAVE CHANGE</b-button>
                        </div>
                    </form>
                </div>
                <!-- End form add new single -->
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue';
import { updateSingle, getSingleDetail, getAllArtists } from "@/services/ApiServices.js"

export default {
    name: 'EditSingle',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            single: {
                name: '',
                artistID: '',
                image: null,
                audio: null
            },
            previewImg: "",
            selectedImgFile: null,
            selectedAudioFile: null,
            artists: []
        }
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;

        const id = this.$route.params.id
        const result1 = await getSingleDetail(id);
        console.warn(result1);
        this.single = result1.data;
    },
    methods: {
        selectedObj(e) {
            this.single.artistID = e.target.options[e.target.options.selectedIndex].value;
            console.log("change artist:", this.single.artistID);
        },
        selectedImg(event) {
            this.selectedImgFile = event.target.files[0];
            console.log("image change:",this.selectedImgFile);
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.previewImg = e.target.result;
                }
            reader.readAsDataURL(this.selectedImgFile);
        },
        selectedAudio(event) {
            this.selectedAudioFile = event.target.files[0];
            console.log("audio change:",this.selectedAudioFile);
        },
        async submitSaveSingle() {
            let name = this.single.name;
            let artistID = this.single.artistID;
            let image = btoa(this.selectedImgFile);
            let audio = new FormData();
            audio.append("audio", this.selectedAudioFile);
            
            const id = this.$route.params.id;
            const response = await updateSingle(id, name, artistID, image, audio);
            const {data} = response;
            alert("Update successful!")
            this.$router.replace({ name: 'singlelist' });
        }
    }
}
</script>

<style scoped>
.btnSavesingle {
    margin-left: 145px;
    background-color: white;
    color: black;
}
.btnSavesingle:hover {
    margin-left: 145px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}
</style>