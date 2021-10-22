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
                            <h3 class="text-user"><span>user name</span></h3>
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
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"

export default {
    name: 'UserProfile',
    components: {
        HeaderComp
    }
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