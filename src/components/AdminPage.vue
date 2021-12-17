<template>
    <div class="ad-page">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 140px; display: grid;">
            <div class="name-acc">
                <router-link :to="{name: 'userprofile'}" style="text-decoration: none;">
                    <h3 class="name-user">Hello, {{user.fullname}}</h3>
                </router-link>
            </div>
            <div class="head-title">
                <h1 class="text-page"><span>admin page</span></h1>
            </div>
            <div class="row">
                <b-container class="bv-example-row" style="margin-top: 15px;">
                    <b-row>
                        <b-col>
                            <router-link :to="{name: 'singlelist'}" class="col-title">
                                <p class="col-title">SINGLES MANAGEMENT</p>
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{name: 'artistlist'}" class="col-title">
                                <p class="col-title">ARTIST MANAGEMENT</p>
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{name: 'albumlist'}" class="col-title">
                                <p class="col-title">ALBUM MANAGEMENT</p>
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{name: 'playlistlist'}" class="col-title">
                                <p class="col-title">PLAYLIST MANAGEMENT</p>
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{name:'statistical'}" class="col-title">
                                <p class="col-title">STATISTICAL</p>
                            </router-link>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from './partial/FooterComp.vue'
import {getUserProfile} from "@/services/ApiServices.js"

export default {
    name: 'AdminPage',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return{
            user: {
                fullname: ''
            }
        }
    },
    async mounted() {
        const result = await getUserProfile();
        console.warn(result);
        this.user = result.data;
    }

}
</script>

<style>
.name-user {
    text-align: center;
    color: black;
}

.col-title {
    text-decoration: none;
    text-align: center;
    font-size: x-large;
    color: black;
}
.col-title:hover {
    text-align: center;
    font-size: x-large;
    color: rgb(42, 42, 100);
}
</style>