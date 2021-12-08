<template>
    <div class="add-playlist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="head-title">
                <h1 class="text-page"><span>add playlist</span></h1>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: -20px;">
                    <h2 style="text-align: center">ADD NEW PLAYLIST</h2>

                    <form action="" class="frmAddplaylist" @submit.prevent="submitPlaylist" enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" v-model="playlist.name" placeholder="Name Playlist" class="form-group">
                        </div>

                        <!-- Upload image playlist -->
                        <div class="form-group">
                            <label for="image">Image:</label>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if=" previewImg.length>0 ">
                                <img class="preview my-3" v-bind:src="previewImg" alt="" style="width: 150px; height: 150px;"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitPlaylist">ADD PLAYLIST</b-button>
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
import { createPlaylist } from "@/services/ApiServices.js"

export default {
    name: 'AddPlaylist',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            playlist: {
                name: ''
            },
            image: null,
            previewImg: "",
            strImg: ""
        }
    },
    async mounted() {
        
    },
    methods: {
        async selectedImg(event) {

            // this.file = this.$refs.file.files[0];
            // console.warn(this.file)

            // const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
            this.image = event.target.files[0]
            console.log("image", this.image)
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.previewImg = e.target.result;
                }
                reader.readAsDataURL(this.image);

            // console.warn(this.selectedfile.buffer);
            // let buffer = Buffer.from(this.selectedfile,'base64');
            // const buffer = new ArrayBuffer(strImg,"base64")
            // const buffer = strImg.split("")
            // console.log("buffer:", buffer)

            // if(!allowedTypes.includes(file.type)){
            //     this.message = "Filetype is wrong!!"
            // }
            // if(file.size>500000){
            //     this.message = 'Too large, max size allowed is 500kb'
            // }
        },
        async submitPlaylist() {
            
            // console.log("string:",strImg)
            // let image = new FormData();
            // image.append('image',this.image.name);
            let name = this.playlist.name;
            // let strImg = btoa(this.image)
            let image = btoa(this.image);

            const response = await createPlaylist(name, image);
            console.warn(response);
            if(response.status === 201 && image !== ""){
                alert('Add playlist successful!')
                this.$router.replace({ name: 'playlistlist' });
            }else{
                alert('Try again')
            }
        }
    }
}
</script>

<style scoped>
.btnsubmitPlaylist {
    margin-left: 105px;
    background-color: white;
    color: black;
}
.btnsubmitPlaylist:hover {
    margin-left: 105px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>