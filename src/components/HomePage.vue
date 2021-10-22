<template>
    <div class="home-page">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <!-- Body -->
        <div class="body-content" style="margin-top: 140px;">
            <!-- Popular singles in home page -->
            <div class="head-title">
                <h1 class="text-page"><span>popular</span></h1>
            </div>
            <div class="popular-list" style="margin-top: -80px;">
                <single-list></single-list>
            </div>
        </div>
        <!-- End body -->
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import SingleList from "@/components/singles/SingleList.vue"

export default {
    name: "HomePage",
    components: {
        HeaderComp,
        SingleList
    }
}
</script>

<style scoped>
    
</style>