<template>
    <div class="statis-page">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 130px; display: grid;">
            <div class="head-title">
                <h1 class="text-page"><span>statistical</span></h1>
            </div>
            <!-- Show statistical -->
            <div class="row">
                <div class="col-md-3">
                    <div class="card p-3 mb-2">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="icon"><i class="fas fa-music"></i> </div>
                                <div class="ms-2 c-details">
                                    <h6 class="mb-0">SINGLE</h6> <span>1 days ago</span>
                                </div>
                            </div>
                            <div class="badge"> <span>Web</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">total <h2 style="color: rgb(37, 28, 163);">{{count_singles}}</h2></h3>
                            <div class="mt-5">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!-- <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 mb-2">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="icon"><i class="fas fa-street-view"></i></div>
                                <div class="ms-2 c-details">
                                    <h6 class="mb-0">ARTIST</h6> <span>4 days ago</span>
                                </div>
                            </div>
                            <div class="badge"> <span>Web</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">total <h2 style="color: rgb(37, 28, 163);">{{count_artists}}</h2></h3>
                            <div class="mt-5">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!-- <div class="mt-3"> <span class="text1">42 Applied <span class="text2">of 70 capacity</span></span> </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 mb-2">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="icon"><i class="fas fa-compact-disc"></i></div>
                                <div class="ms-2 c-details">
                                    <h6 class="mb-0">ALBUM</h6> <span>2 days ago</span>
                                </div>
                            </div>
                            <div class="badge"> <span>Web</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">total <h2 style="color: rgb(37, 28, 163);">{{count_albums}}</h2></h3>
                            <div class="mt-5">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!-- <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 mb-2">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="icon"><i class="far fa-play-circle"></i></div>
                                <div class="ms-2 c-details">
                                    <h6 class="mb-0">PLAYLIST</h6> <span>2 days ago</span>
                                </div>
                            </div>
                            <div class="badge"> <span>Web</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">total <h2 style="color: rgb(37, 28, 163);">{{count_playlists}}</h2></h3>
                            <div class="mt-5">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!-- <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from './partial/HeaderComp.vue'
import {countAllSingles, countAllArtists, countAllPlaylists, countAllAlbums} from './../services/ApiServices'

export default {
    name: 'Statistical',
    components: {HeaderComp},
    data(){
        return{
            count_singles:'',
            count_artists: '',
            count_albums: '',
            count_playlists: ''
        }
    },
    async mounted(){
        const resut = await countAllSingles()
        console.warn(resut);
        this.count_singles = resut.data.count_singles;

        const resut1 = await countAllArtists()
        console.warn(resut1);
        this.count_artists = resut1.data.count_artists;

        const resut2 = await countAllPlaylists()
        console.warn(resut2);
        this.count_playlists = resut2.data.count_playlists;

        const resut3 = await countAllAlbums()
        console.warn(resut3);
        this.count_albums = resut3.data.count_albums;
    }
}
</script>

<style>

.card {
    border: none;
    border-radius: 10px
}

.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}

.badge span {
    background-color: #fffbec;
    width: 60px;
    height: 25px;
    padding-bottom: 3px;
    border-radius: 5px;
    display: flex;
    color: #fed85d;
    justify-content: center;
    align-items: center
}

.progress {
    height: 10px;
    border-radius: 10px
}

.progress div {
    background-color: red
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}
</style>