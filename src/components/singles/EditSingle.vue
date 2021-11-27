<template>
    <div class="edit-sing">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="head-title">
                <h1 class="text-page"><span>edit song</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form add new single -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">EDIT SINGLE</h2>
                    <form action="" class="frmEditsingle">

                        <div class="form-group">
                            <input type="text" v-model="single.name" placeholder="Name song" class="form-group">
                        </div>

                        <!-- Selection Artist Dropdown -->
                        <div class="form-group">
                            <select v-model="single.artist" class="form-group">
                                <option value="Artist" v-for="artist in artists" :key="artist._id">{{artist.name}}</option>
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
                        <!-- Upload audio single -->
                        <div class="form-group">
                            <span>Audio:</span>
                            <input type="file" @change="selectedAudio" accept="audio" ref="file" class="form-group">
                        </div>

                        <div class="form-group">
                            <b-button @click="submitSaveSingle" class="btnSavesingle">SAVE CHANGE</b-button>
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
import { getAllArtists } from "@/services/ApiServices.js"

export default {
    name: 'EditSingle',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            single: {
                namesong: '',
                selectedImg: null,
                selectedAudio: null
            },
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
            this.selectedImg = event.target.files[0];
        },
        selectedAudio(event) {
            console.log(event);
        },
        submitSaveSingle() {

        }
    }
}
</script>

<style scoped>
.btnSavesingle {
    margin-left: 115px;
    background-color: white;
    color: black;
}
.btnSavesingle:hover {
    margin-left: 115px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}
</style>