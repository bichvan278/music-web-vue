<template>
    <div class="add-artist">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="head-title">
                        <h1 class="text-page"><span>add artist</span></h1>
                    </div>
                </div>
                <!-- Form add new playlist -->
                <div class="col-md-6" style="display: grid; justify-content: center;">
                    <h2 style="text-align: center">ADD NEW ARTIST</h2>

                    <form action="" class="frmAddartist" @submit.prevent="submitArtist" enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" v-model="artist.name" placeholder="Name Artist" class="form-group">
                        </div>

                        <div class="form-group">
                            <label for="dob">Date of birth:</label>
                            <input type="date" v-model="artist.dob" placeholder="Date of birth" class="form-group">
                        </div>

                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea type="text" v-model="artist.description" placeholder="Description about artist" class="form-group"></textarea>
                        </div>

                        <!-- Upload image artist -->
                        <div class="form-group">
                            <label for="">Image:</label>
                            <input type="file" @change="selectedImg" accept="image" name="image" class="form-group">
                            <div v-if="selectedImgFile.length > 0">
                                <div>
                                    <img class="preview my-3" :src="selectedImgFile" alt="" style="width: fit-content; height: 50px;"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <b-button type="submit" class="btnsubmitArtist">ADD ARTIST</b-button>
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
import {createArtist, getUserProfile} from "@/services/ApiServices.js"

export default {
    name: 'AddArtist',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            artist: {
                name: '',
                dob: '',
                description: ''
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
        selectedImg(event) {
            this.image = event.target.files[0]
            console.log("image", this.image)
            var reader = new FileReader();
                reader.onloadend = (e) => {
                    this.selectedImgFile = e.target.result;
                }
                reader.readAsDataURL(this.image);
        },
        async submitArtist() {
            let name = this.artist.name;
            let image = this.selectedImgFile.replace("data:", "").replace(/^.+,/, "");
            let dob = this.artist.dob;
            let description = this.artist.description;

            const response = await createArtist(name, image, dob, description);
            const {data} = response;
            if(response.status === 201){
                alert("Added a new artist.")
                if (this.role === 'Member') {
                    this.$router.replace({ name: 'addsingle' });
                } else {
                    this.$router.replace({ name: 'artistlist' });
                }
            }else{
                alert("Sth maybe wrong!")
            }
        }
    }
}
</script>

<style scoped>
.btnsubmitArtist {
    margin-left: 120px;
    background-color: white;
    color: black;
}
.btnsubmitArtist:hover {
    margin-left: 120px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}

input, .form-group {
    width: 100%;
    padding: 5px;
}

</style>