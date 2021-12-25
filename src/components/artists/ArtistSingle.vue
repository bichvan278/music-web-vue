<template>
    <div class="art-single" style="display: grid;">
        <header-comp></header-comp>

        <!-- Content -->
        <div class="container" style="margin-top: 120px">
            <div class="head-title">
                <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>my all singles</span></h2>
            </div>

            <div class="row">
                <!-- Search single -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find single of this artist..." 
                                class="b-search"
                                v-model="search"
                                @keyup="submittoSearch">
                        <!-- <button type="submit" class="btn-search" >search</button> -->
                    </div>
                </div>

                <!-- Result of this search func -->
                <div v-if="search !=='' ">
                    <section>
                        <div class="cards">
                            <single-card v-for="single in searchsingleArt" :key="single._id" :single="single"></single-card>
                        </div>
                    </section>
                </div>

                <!-- Display all when no doing search function -->
                <div v-if="search ==='' ">
                    <section>
                        <div class="cards">
                            <single-card v-for="single in singleArt" :key="single._id" :single="single"></single-card>
                        </div>
                    </section>
                </div>
                <!-- End search -->

            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from '../partial/FooterComp.vue'
import HeaderComp from '../partial/HeaderComp.vue'
import SingleCard from '../singles/SingleCard.vue'

export default {
    name: 'ArtistSingle',
    components: {HeaderComp, FooterComp, SingleCard},
    data() {
        return {
            singleArt: [],
            searchsingleArt: [],
            search: ''
        }
    },
    async mounted() {
        const id = this.$router.params.id;
        const result1 = await getSinglesofArtist(id);
        console.warn(result1);
        this.singleArt = result1.data.allSingle;
        console.log("single-art:",this.singleArt);
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.searchsingleArt = this.singleArt.filter((single)=>{
                    return single.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                alert("Cannot found single! ");
                window.location.load();
            }
        }
    }

}
</script>

<style>

</style>