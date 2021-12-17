<template>
    <div class="art-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container" style="margin-top: 50px;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>contact us</span></h1>
                </div>
                <div class="main-content">
                    <h4 class="s-text">email</h4>
                    <h3 class="s-text1">finalroundrecords@gmail.com</h3>
                    <h4 class="s-text">phone</h4>
                    <h3 class="s-text1">02335544668</h3>
                </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from './partial/FooterComp.vue'
import HeaderComp from './partial/HeaderComp.vue'
import SearchBar from './partial/SearchBar.vue'

export default {
    name: 'ContactPage',
    components: { HeaderComp, SearchBar, FooterComp }

}
</script>

<style>
.main-content {
    background-color: white;
    width: 931px;
    margin-top: -10px;
    margin-left: 105px;
}
.s-text {
    line-height: 0.7em;
    text-align: center;
    font-size: 35px;
    color: rgb(197, 194, 194);
    margin: 10px;
}
.s-text1 {
    line-height: 0.7em;
    text-align: center;
    font-size: 35px;
    color: rgb(37, 28, 163);
    margin: 15px;
}
</style>