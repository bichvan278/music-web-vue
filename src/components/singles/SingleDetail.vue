<template>
    <div class="single-detail">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <!-- Display detail of single view -->
        <div class="view-detail" style="margin-top: 130px;">
            <div class="container">
                <div class="row">
                    <!-- Imagine single detail -->
                    <div class="col-md-9">
                        <div class="main-view" v-for="currentSong in singles" :key="currentSong.songid">
                            <div class="head-title">
                                <h3 class="text-title"><span>{{currentSong.namesong}}</span></h3>
                            </div>
                            <div class="view-audio">
                                <div class="view-img">
                                    <img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" />
                                </div>
                                <div class="view-nav">
                                    <p class="name-art">{{currentSong.artist}}</p>
                                    <!-- Button music player -->
                                    <div class="navigation" style="margin-left: 9px;">
                                        <button class="action-btn" id="prev"><i class="fas fa-backward"></i></button>
                                        <button class="action-btn" id="play">
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
                            <!-- Comment HTML-->
                            <single-cmt></single-cmt>
                        </div>
                    </div>

                    <!-- List other single of this artist -->
                    <div class="col-md-3">
                        <h2 class="content-title1">playing</h2>
                        <hr>
                        <div class="small-list" v-for="item in singles" :key="item.artist">
                            <h4>{{item.namesong}}</h4>
                            <router-link :to="{name: 'artist'}" class="art-name1"><p>{{item.artist}}</p></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import SingleCmt from "@/components/singles/SingleCmt.vue"

export default {
    name: 'SingleDetail',
    components: {
        HeaderComp,
        SingleCmt
    },
    data() {
        return {
            singles: null,
            singles: []
        }
    },
    async mounted() {
        axios
            .get('http://localhost:3000/singles?songid=' + this.$route.params.id)
            .then(response => (this.singles = response.data))
            .catch(error => console.log(error))

        axios
            .get('http://localhost:3000/singles/')
            .then(result => (this.singles.item = result.data))
            .catch(err => console.log(err))
    }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.text-title {
    line-height: 0.7em;
    text-align: center;
    font-size: 100px;
    color: rgb(197, 194, 194);
}

.img-single {
    width: 180px;
    height: 180px;
}

img {
    width: 180px;
    height: 180px;
}

.view-nav {
    align-items: center;
    margin-left: 140px;
}

.name-art {
    text-align: center;
    font-size: 35px;
    color: rgb(37, 28, 163);
}

.navigation {
    align-items: center;
    justify-content: center;
}

.action-btn {
    background: white;
    border: 0px;
    font-size: 25px;
    color: rgb(21, 22, 26);
    cursor: pointer;
    padding: 10px;
    margin: 0px 15px;
}

.view-audio {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: -30px;
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
	background-color: rgba(81, 81, 82, 0.322);
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