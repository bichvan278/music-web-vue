<template>
    <div class="art-page">
        <header-comp></header-comp>
        <search-bar></search-bar>
        <div class="container">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>contact us</span></h1>
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

</style>