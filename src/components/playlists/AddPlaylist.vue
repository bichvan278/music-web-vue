<template>
    <div class="add-playlist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>add playlist</span></h1>
                    </div>
                </div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center; margin-top: 0px;">
                    <h2 style="text-align: center">ADD NEW PLAYLIST</h2>

                    <form action="" class="frmAddplaylist" @submit.prevent="submitPlaylist" enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" v-model="playlist.name" placeholder="Name Playlist" class="form-group">
                        </div>

                        <!-- Upload image playlist -->
                        <div class="form-group">
                            <label for="image">Image:</label>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if=" selectedImgFile.length>0 ">
                                <img class="preview my-3" v-bind:src="selectedImgFile" alt="" style="width: fit-content; height: 250px;"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitPlaylist">ADD PLAYLIST</b-button>
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
import { createPlaylist, getUserProfile } from "@/services/ApiServices.js"

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
            selectedImgFile: "",
            role: null
        }
    },
    async mounted() {
        const result1 = await getUserProfile();
        console.warn(result1);
        this.role = result1.data.role.name;
        console.log("role:",this.role);
    },
    methods: {
        async selectedImg(event) {
            this.image = event.target.files[0]
            console.log("image", this.image)
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
                reader.readAsDataURL(this.image);
        },
        async submitPlaylist() {
            let name = this.playlist.name;
            let image = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");

            if (name === '') {
                alert("Name playlist must be set!")
            }
            else {
                const response = await createPlaylist(name, image);
                console.log("result:",response)
                if(response.status === 201){
                    alert("Add playlist successful :) !!!")
                    if (this.role === 'Member') {
                        this.$router.replace({ name: 'userprofile' });
                    } else {
                        this.$router.replace({ name: 'playlistlist' });
                    }
                }else if(response.status !== 201) {
                    alert("Name playlist is existed!")
                    window.location.load();
                }else{
                    alert("Try again >< !")
                }
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