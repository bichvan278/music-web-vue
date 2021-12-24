<template>
    <div class="add-sing">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>add song</span></h1>
                    </div>
                </div>
                <!-- Form add new single -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 10px;">
                    <h2 style="text-align: center">ADD NEW SINGLE</h2>
                    <form action="" class="frmAddsingle" @submit.prevent="submitSingle">

                        <div class="form-group">
                            <input type="text" v-model="single.name" placeholder="Name song" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <label for="artistID">Select Artist:</label>
                            <select class="form-group" @change="selectedObj">
                                <option aria-placeholder="Select Artist" 
                                        v-bind:value="artist._id" 
                                        v-for="artist in artists" :key="artist._id">{{artist.name}}
                                </option>
                            </select>
                        </div>

                        <!-- Upload audio single -->
                        <div class="form-group">
                            <span>Audio:</span>
                            <input type="file" @change="selectedAudio" accept="audio" name="audio" class="form-group">
                        </div>

                        <!-- Upload image single -->
                        <div class="form-group">
                            <span>Image:</span>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if="selectedImgFile.length > 0">
                                    <img class="preview my-3" v-bind:src="selectedImgFile" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <b-button type="submit" class="btnSubmitsingle">ADD SINGLE</b-button>
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
import { getAllArtists, createSingle, getUserProfile } from "@/services/ApiServices.js"

export default {
    name: 'AddSingle',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            single: {
                name: "",
                artistID: ""
            },
            image: null,
            audio: null,
            selectedAudioFile: null,
            selectedImgFile: "",
            artists: [],
            role: null
        }
    },
    async created() {
        const result = await getUserProfile();
        console.warn(result);
        this.role = result.data.role.name;
        console.log("role:",this.role);
    },
    async mounted() {
        const result = await getAllArtists();
        console.warn(result);
        this.artists = result.data;
    },
    methods: {
        selectedImg(event) {
            this.image = event.target.files[0];
            console.log("image", this.image)
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
                reader.readAsDataURL(this.image);

        },
        selectedAudio(event) {
            this.audio = event.target.files[0];
            console.log("audio",this.audio);
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedAudioFile = e.target.result;
                }
                reader.readAsDataURL(this.audio);
        },
        selectedObj(e) {
            this.single.artistID = e.target.options[e.target.options.selectedIndex].value;
            console.log("choose:", this.single.artistID);
        },
        async submitSingle() {
            let name = this.single.name;
            let artistID = this.single.artistID;
            let image = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");
            let encodeAudio = this.selectedAudioFile.replace("data:", "").replace(/^.+,/, "");
            let audio = utf8.encode(encodeAudio);

            if(image === null) {
                alert("Upload with no image file, aren't you?")
            }
            else if(audio === null){
                alert("Upload with no mp3 file, aren't you?")
            }
            const response = await createSingle(name, artistID, image, audio)
            console.log("result:",response)
            if(response.status === 201){
                alert("Add single successful :) !!!")
                if (this.role === 'Member') {
                    this.$router.replace({ name: 'userprofile' });
                } else {
                    this.$router.replace({ name: 'singlelist' });
                }
            }else{
                alert("Try again >< !")
            }
        }
    }
}
</script>

<style scoped>
.btnSubmitsingle {
    margin-left: 120px;
    background-color: white;
    color: black;
}
.btnSubmitsingle:hover {
    margin-left: 120px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}
</style>