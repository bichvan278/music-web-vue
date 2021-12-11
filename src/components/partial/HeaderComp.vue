<template>
    <div>
        <!-- Header for Admin -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg" v-if=" role === 'Admin' ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./../../assets/img/logo2.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <router-link :to="{name: 'adminpage'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Home</p>
                            </li>
                        </router-link>
                        <router-link :to="{name: 'singlelist'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Single</p>
                            </li>
                        </router-link>
                        <router-link :to="{name: 'artistlist'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Artist</p>
                            </li>
                        </router-link>
                        <router-link :to="{name: 'albumlist'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Album</p>
                            </li>
                        </router-link>
                        <router-link :to="{name: 'playlistlist'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Playlist</p>
                            </li>
                        </router-link>
                        <router-link :to="{name: 'statistical'}" class="nav-link">
                            <li class="nav-item active">
                                <p class="nav-link">Statistical</p>
                            </li>
                        </router-link>
                    </ul>
                    <!-- Btn Sign in -->
                    <div class="btn-login" v-if="!user">
                        <router-link :to="{name: 'signin'}" style="text-decoration: none">
                            <b-button pill variant="outline-secondary" class="btn-login">SIGN IN</b-button>
                        </router-link>
                    </div>
                    <!-- Btn Log out -->
                    <div class="btn-logout" v-if="user" style="display: grid">
                        <router-link :to="{name: 'userprofile'}" style="text-decoration: none">
                            <h4 class="btn-name"><i class="far fa-smile" style="margin-right: 2px"></i>{{user.fullname}}</h4>
                        </router-link>
                        <b-button pill variant="outline-secondary" class="btn-logout" type="submit" v-on:click="submitLogout">LOG OUT</b-button>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Header for Member -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg" v-else>
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="./../../assets/img/logo2.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <router-link :to="{name: 'HomePage'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Home</p>
                        </li>
                    </router-link>
                    <router-link :to="{name: 'singlepage'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Single</p>
                        </li>
                    </router-link>
                    <router-link :to="{name: 'artistpage'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Artist</p>
                        </li>
                    </router-link>
                    <router-link :to="{name: 'albumpage'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Album</p>
                        </li>
                    </router-link>
                    <router-link :to="{name: 'playlistpage'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Playlist</p>
                        </li>
                    </router-link>
                    <router-link :to="{name: 'contact'}" class="nav-link">
                        <li class="nav-item active">
                            <p class="nav-link">Contact</p>
                        </li>
                    </router-link>
                </ul>
                <!-- Btn Sign in -->
                <div class="btn-login" v-if="!user">
                    <router-link :to="{name: 'signin'}" style="text-decoration: none">
                        <b-button pill variant="outline-secondary" class="btn-login">SIGN IN</b-button>
                    </router-link>
                </div>
                <!-- Btn Log out -->
                <div class="btn-logout" v-if="user" style="display: grid">
                    <router-link :to="{name: 'userprofile'}" style="text-decoration: none">
                        <h4 class="btn-name"><i class="far fa-smile" style="margin-right: 1px"></i>{{user.fullname}}</h4>
                    </router-link>
                    <b-button pill variant="outline-secondary" class="btn-logout" type="submit" v-on:click="submitLogout">LOG OUT</b-button>
                </div>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
import {getUserProfile, logout} from "@/services/ApiServices.js"

export default {
    name: 'HeaderComp',
    data() {
        return{
            user: null,
            role: null
        }
    },
    async mounted() {
        const result = await getUserProfile();
        console.warn(result);
        this.user = result.data;
        this.role = result.data.role.name;
    },
    methods: {
        async submitLogout() {
            await logout();
            localStorage.removeItem('user');
            localStorage.removeItem('role');
            this.$router.replace({ name: 'signin' });
        }
    }
}
</script>

<style>
    .nav-bg{
        background-color: white;
    }

    .nav-link{
        margin-left: 0px;
        text-align: center;
        font-family: HindSiliguri-Bold;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav-link:hover {
        margin-left: 0px;
        text-align: center;
        font-family: HindSiliguri-Bold;
        font-size: 15px;
        text-decoration: none;
        color: rgb(37, 28, 163);
        text-transform: uppercase;
    }

    .btn-name {
        color: rgb(37, 28, 163);
        width: 115px;
        margin-left: 20px;
        margin-right: -50px;
        font-size: 22px;
        font-family: HindSiliguri-Bold;
        display: block;
        margin-top: 2px;
        text-decoration: none;
    }
    .btn-login, .btn-logout {
        width: 100px;
        margin-left: 20px;
        margin-right: -50px;
        font-size: 15px;
        font-family: HindSiliguri-Bold;
        display: block;
        margin-top: 2px;
        text-decoration: none;
    }
    .btn{
        color: rgb(37, 28, 163);
        border-color: rgb(37, 28, 163);
        background-color: white;
        text-decoration: none;
    }
    .btn:hover{
        border-color: rgb(37, 28, 163);
        background-color: rgb(37, 28, 163);
        color: white;
        text-decoration: none;
    }
    .navbar-brand img {
        width: 200px;
        height: 100px;
    }
</style>