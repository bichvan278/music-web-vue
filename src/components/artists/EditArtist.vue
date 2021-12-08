<template>
    <div class="edit-artist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="head-title">
                <h1 class="text-page"><span>edit artist</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">EDIT ARTIST</h2>

                    <form action="" class="frmEditartist" @submit.prevent="submitSaveArtist">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="artist.name" placeholder="Name Artist" class="form-group">
                        </div>

                        <!-- Upload image artist -->
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
                            <label for="dob">Date of birth:</label>
                            <input type="date" v-model="artist.dob" placeholder="Date of birth" class="form-group">
                        </div>

                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea type="text" v-model="artist.description" placeholder="Description about artist" class="form-group"></textarea>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitSaveArtist">SAVE CHANGE</b-button>
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
import { updateArtist, getArtistDetail } from "@/services/ApiServices.js"

export default {
    name: 'EditArtist',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            artist: {
                name: '',
                image: '',
                dob: '',
                description: ''
            },
            file: ''
        }
    },
    async mounted() {
        const id = this.$route.params.id;
        const result = await getArtistDetail(id);
        console.warn(result);
        this.artist = result.data;
    },
    methods: {
        selectedImg(event) {
            // const file = this.$refs.file.files[0];
            // this.file = file;
        },
        async submitSaveArtist() {
            let name = this.artist.name;
            let image = this.artist.image;
            let dob = this.artist.dob;
            let description = this.artist.description;
            
            const id = this.$route.params.id;
            const response = await updateArtist(id, name, image, dob, description);
            const {data} = response;
            alert("Update successful!")
            this.$router.replace({ name: 'artistlist' });
        }
    }
}
</script>

<style scoped>
.btnsubmitSaveArtist {
    margin-left: 105px;
    background-color: white;
    color: black;
}
.btnsubmitSaveArtist:hover {
    margin-left: 105px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>