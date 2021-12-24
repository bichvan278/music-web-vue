<template>
    <div class="single-detail" style="display: grid">
        <div class="header-vue">
            <header-comp></header-comp>
            <search-bar></search-bar>
        </div>
        <!-- Display detail of single view -->
        <div class="view-detail" style="margin-top: 100px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-1"></div>

                    <!-- Main content single detail -->
                    <div class="col-md-10" style="display: grid;">
                        <div class="main-view">
                            <div class="row">
                                <!-- Display image of single -->
                                <div class="col-md-8">
                                    <div class="view-img" style="margin-left: 50px;" v-if="single.image !== null ">
                                        <img :src="`data:image/png;base64,${single.image}`" class="img-single"/>
                                    </div>
                                    <div class="view-img" style="margin-left: 50px;" v-else>
                                        <img src="./../../assets/img/music.jpg" class="img-single"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="view-audio">
                                        <!-- Name single and artist -->
                                        <div class="head-title">
                                            <h3 class="text-title" style="margin-left: 140px; width: 170px;"><span>{{single.name}}</span></h3>
                                        </div>
                                        <div class="view-nav">
                                            <router-link :to="{name: 'artistdetail', params: {id: single.artistID._id}}" class="name-art" style="text-decoration: none;">
                                                <p class="name-art">{{single.artistID.name}}</p>
                                            </router-link>
                                        </div>
                                        <!-- Button music player -->
                                        <div class="navigation">
                                            <button class="action-btn" id="prev"><i class="fas fa-backward"></i></button>
                                            <button class="action-btn" id="play" v-on:click="playingSingle" v-if="isPlaying === false">
                                                <i class="far fa-play-circle" style="font-size: 45px;"></i>
                                            </button>
                                            <button class="action-btn" id="next"><i class="fas fa-forward"></i></button>
                                        </div>
                                        <!-- Music time bar -->
                                        <div class="progress_time">
                                            <span class="current_time">0:00</span>
                                            <span class="total_time">4:00</span>
                                        </div>
                                        <div class="progress_bar" @click="clickProgress">
                                            <div class="progress_current"  :style="{ width: progress_bar + '%' }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Comment Class -->
                        <div class="row cmt-content" style="display: grid;">
                            <div class="head-title">
                                <h4 class="text-page"><span>comment</span></h4>
                            </div>
                            <section>
                                <div class="cmt-class">
                                    <form action="#" class="cmt-form" @submit.prevent="submitCmt">
                                        <div class="media g-mb-30 media-comment">
                                            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description">
                                            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30" 
                                                style="height: 200px; margin-top: -15px; margin-left: 10px; background-color: #fafafa;">
                                            <div class="g-mb-15">
                                                <h5 class="h5 g-color-gray-dark-v1 mb-0" style="color: rgb(37, 28, 163);">ADD YOUR COMMENT</h5>
                                            </div>
                                            <b-textarea style="font-size: 13px; margin-left: -5px;" 
                                                        placeholder="Comment here . . ."
                                                        v-model="comment.content"></b-textarea>
                                            <button type="submit" value="POST" class="btnCmt">POST</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>

                        <!-- Display all comments of this single -->
                        <div class="all-cmt" style="margin-top: 60px">
                            <table class="table table-striped table-hover" v-if="cmtinsingle.length >= 0">
                                <thead>
                                    <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">CONTENT</th>
                                        <th scope="col">TIME</th>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="cmt in cmtinsingle" :key="cmt._id">
                                        <td scope="row">{{cmt.cmtBy.username}}</td>
                                        <td>{{cmt.content}}</td>
                                        <td>{{cmt.createdAt}}</td>
                                        <td>{{cmt._id}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- End Main Content -->
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue'
import SearchBar from '../partial/SearchBar.vue'
import { getSingleDetail, getAllCommentinSingle, getUserProfile, createComment } from "@/services/ApiServices.js"

export default {
    name: 'SingleDetail',
    components: {
        HeaderComp,
        FooterComp,
        SearchBar
    },
    data() {
        return {
            cmtinsingle: [],
            single: {
                name: null,
                artistID: null,
                image: null,
                audio: null
            },
            role: null,
            id_sing: '',
            comment: {
                content: ''
            },
            isPlaying: false
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const result = await getSingleDetail(id);
        console.warn(result);
        this.single = result.data;

        const result1 = await getAllCommentinSingle(id);
        console.warn(result1);
        this.cmtinsingle = result1.data;
        console.log("cmt:",this.cmtinsingle);

        const result2 = await getUserProfile();
        console.warn(result2);
        this.role = result2.data.role.name;
    },
    methods: {
        async submitCmt() {
            if(this.role === 'Member') {
                this.id_sing = this.$route.params.id;
                console.log("id single:", this.id_sing);
                const cmtofSingle = this.id_sing;
                const content = this.comment.content;
                const response = await createComment(content,cmtofSingle);
                if(response.status === 201) {
                    alert("Your comment is saved! ")
                    window.location.reload()
                }else{
                    alert("Try again!")
                }
            }else{
                alert("Please SIGN IN to post your comment!")
                this.$router.replace({ name: 'signin' });
            }
        },
        async playingSingle(sound) {
            if (this.isPlaying === false) {
                sound = `data:audio/mpeg;base64,${this.single.audio}`;
                var audio = new Audio(sound);
                audio.play();
                this.isPlaying = true;
            } else {
                sound = `data:audio/mpeg;base64,${this.single.audio}`;
                var audio = new Audio(sound);
                audio.pause();
                // this.isPlaying = false;
            }
        }
    }
}
</script>

<style>
.cmt-content {
    margin-top: 20px;
}
.cmt-class {
    margin-left: 165px;
    margin-top: -70px;
    width: 600px;
    height: 200px;
}
.btnCmt {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgb(37, 28, 163);
}

.content-title1 {
    line-height: 0.7em;
    text-align: left;
    font-size: 45px;
    color: slategrey;
    visibility: inherit;
}

@media (min-width: 0) {
    .g-mr-15 {
        margin-right: 1.07143rem !important;
    }
}
@media (min-width: 0){
    .g-mt-3 {
        margin-top: 0.21429rem !important;
    }
}

.g-mb-15 {
    margin-top: -25px;
    display: inline-block;
}

.g-height-50 {
    height: 50px;
}

.g-width-50 {
    width: 50px !important;
}

@media (min-width: 0){
    .g-pa-30 {
        padding: 2.14286rem !important;
    }
}

/* .g-bg-secondary {
    background-color: #fafafa !important;
} */

.u-shadow-v18 {
    box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}

.g-color-gray-dark-v4 {
    color: #777 !important;
}

.g-font-size-12 {
    font-size: 0.85714rem !important;
}

.media-comment {
    margin-top:20px
}
/* END CSS OF COMMENT */
body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
.main-view {
    border: 2px ;
    height: 350px;
    display: grid;
    background-color: black;
}

.text-title {
    line-height: 0.7em;
    text-align: center;
    font-size: 100px;
    color: rgb(197, 194, 194);
}

.img-single {
    width: 300px;
    height: 300px;
}

.view-nav {
    align-items: center;
    margin-left: 140px;
    margin-top: -30px;
}

.name-art {
    text-align: center;
    font-size: 35px;
    color: rgb(37, 28, 163);
    width: 170px;
    margin-left: 12px;
}

.navigation {
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    display: flex;
}

.action-btn {
    background: black;
    border: 0px;
    font-size: 25px;
    /* background-image: linear-gradient(125deg,#ffff,#064497); */
    color: white;;
    cursor: pointer;
    padding: 10px;
    margin: 0px 15px;
}

.view-audio {
    display: grid;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 35px;
    justify-content: flex-start;
    margin-left: -30px;
    position: inherit;
}

.btn-heart {
    background: white;
    border: 0px;
    font-size: 40px;
    color: cornflowerblue;
    cursor: pointer;
}

.btn-back {
    background: white;
    border: 0px;
    font-size: 40px;
    color: cornflowerblue;
    cursor: pointer;
    margin-right: 150px;
}

/* Time bar */
.progress_time {
    width: 100%;
	height: 1rem;
	display: flex;
	justify-content: space-between;
}

.progress_bar {
	width: 100%;
    height: 1.5px;
	background-color: whitesmoke;;
	margin:0.75rem 0;
}

.progress_current {
	background-color: cornflowerblue;
	width: 0px;
	height: 2px;
	transition: 100ms;
}

.art-name1 {
    color: rgb(37, 28, 163);
    text-decoration: none;
}

.content-title1 {
    line-height: 0.7em;
    text-align: left;
    font-size: 45px;
    color: slategrey;
    visibility: inherit;
}

</style>