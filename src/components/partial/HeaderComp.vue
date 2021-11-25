<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg">
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
                        <!-- Btn Sign in -->
                        <div class="btn-login">
                            <router-link :to="{name: 'signin'}" style="text-decoration: none">
                                <b-button pill variant="outline-secondary" class="btn-login">SIGN IN</b-button>
                            </router-link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style>
    .nav-bg{
        background-color: white;
    }

    .nav-link{
        margin-left: 10px;
        text-align: center;
        font-family: HindSiliguri-Bold;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav-link:hover {
        margin-left: 20px;
        text-align: center;
        font-family: HindSiliguri-Bold;
        font-size: 18px;
        text-decoration: none;
        color: rgb(37, 28, 163);
        text-transform: uppercase;
    }

    .btn-login{
        width: 100px;
        margin-left: 20px;
        margin-right: -50px;
        font-size: 15px;
        font-family: HindSiliguri-Bold;
        display: block;
        margin-top: 11px;
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