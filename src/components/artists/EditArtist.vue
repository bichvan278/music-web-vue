<template>
    <div class="edit-artist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>edit artist</span></h1>
                    </div>
                </div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 0px;">
                    <!-- <h2 style="text-align: center">EDIT ARTIST</h2> -->

                    <form action="" class="frmEditartist" @submit.prevent="submitSaveArtist">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" v-model="artist.name" placeholder="Name Artist" class="form-group">
                        </div>

                        <!-- Upload image artist -->
                        <div class="form-group">
                            <span>Image:</span>
                            <div v-if="artist.image !== null ">
                                <img :src="`data:image/png;base64,${artist.image}`" class="img-art"/>
                            </div>
                            <div v-else>
                                <img src="./../../assets/img/music.jpg" class="img-art"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span>Change image:</span>
                            <input type="file" @change="selectedImg" accept="image" name="image"  class="form-group">
                            <div v-if="selectedImgFile.length > 0">
                                <img class="preview my-3" v-bind:src="selectedImgFile" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
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
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue';
import { updateArtist, getArtistDetail, getUserProfile } from "@/services/ApiServices.js"

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
            selectedImgFile: "",
            image: null,
            sendImg: null,
            role: null
        }
    },
    async mounted() {
        const id = this.$route.params.id;
        const result = await getArtistDetail(id);
        console.warn(result);
        this.artist = result.data;

        const result1 = await getUserProfile();
        console.warn(result1);
        this.role = result1.data.role.name;
        console.log("role:",this.role);
    },
    methods: {
        selectedImg(event) {
            this.image = event.target.files[0];
            console.log("image alb:",this.image);
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
            reader.readAsDataURL(this.image);
        },
        async submitSaveArtist() {
            let name = this.artist.name;
            let dob = this.artist.dob;
            let description = this.artist.description;

            // Check image before send to server
            if (this.image !== null) {
                this.sendImg = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");
            } else {
                this.sendImg = this.artist.image.replace("data:", "").replace(/^.+,/, "");
            }
            let image = this.sendImg;
            
            const id = this.$route.params.id;
            const response = await updateArtist(id, name, image, dob, description);
            if (response.status === 200) {
                alert("Update successful!");
                if (this.role === 'Member') {
                    // this.$router.replace({ name: 'userprofile' });
                    window.history.back()
                } else {
                    this.$router.replace({ name: 'artistlist' });
                }
            } else {
                alert("Update is failed !!!");
                window.location.load();
            }
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
.img-art {
    width: fit-content; 
    height: 150px;
}
</style>