<template>
    <div class="artist">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 130px;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>artist</span></h1>
                </div>
                <div class="art-detail" 
                     style=" margin-top: -25px;">
                    
                    <img src="./../../assets/img/jj.jpg" class="art-img">
                    <h2 class="art-name">name artist</h2>
                    <p style="text-align: center; font-size: 15px;">the special information about this artist . . .</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"

export default {
    name: 'Artist',
    components: {
        HeaderComp
    }
    // data() {
    //     return{
    //         singles: []
    //     }
    // },
    // async mounted() {
    //     axios
    //         .get('http://localhost:3000/singles/')
    //         .then(res => (this.singles.currentArtist = res.data))
    //         .catch(err => console.log(err))
    // }

}
</script>

<style>
.art-img {
    width: 980px;
    height: 350px;
    object-fit: cover;
    object-position: 50% 50%;
    margin-left: 65px;
}

.art-name {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    margin-top: 20px;
    color: rgb(37, 28, 163);
}
</style>