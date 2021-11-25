<template>
    <div class="user-pro">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 150px;">
            <div class="row">
                <div class="info-user">
                    <div class="img-user">
                        <img src="./../../assets/img/user.png" class="img-user">
                    </div>
                    <div class="detail-info">
                        <h3 class="u-title">PROFILE</h3>
                        <div class="head-title">
                            <h4 class="text-user" v-if="user"><span>{{user.username}}</span></h4>
                        </div>
                        <router-link :to="{name: 'editprofile'}" style="color: gray;">
                            <p class="edit-pro" style="color: gray;">EDIT PROFILE <i class="far fa-edit"></i></p>
                        </router-link>
                    </div>
                </div>
                <hr>
                <h2 class="content-title" style="color: slategrey;">MY PLAYLIST</h2>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue'

export default {
    name: 'UserProfile',
    components: {
        HeaderComp,
        FooterComp
    }
    // data() {
    //     return {
    //         user: null
    //     }
    // },
    // async created() {
    //     const response = await axios.get("http://localhost:3000/accounts",{
    //         headers: {
    //             Authorization: 'Bearer' + localStorage.getItem('user')
    //         }
    //     });
    //     this.user = response.data.user[0];
    //     console.log(response);
    //     // alert("Connected!")
    // }
}
</script>

<style scoped>
.info-user{
    display: flex;
}

.detail-info{
    margin-top: 25px;
    margin-left: 20px;
}

.img-user{
    width: 200px;
    height: 200px;
}

.text-user {
    line-height: 0.7em;
    text-align: center;
    font-size: 60px;
    margin-bottom: 25px;
    /* color: rgb(197, 194, 194); */
    color: rgb(37, 28, 163);
}
</style>