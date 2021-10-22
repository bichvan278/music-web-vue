<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./../../assets/img/logo2.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive" style="margin-right: -200px;">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="btn-login">
                    <router-link :to="{name: 'signin'}" class="sign-in">
                        <b-button pill variant="outline-secondary">SIGN IN</b-button>
                    </router-link>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .nav-bg{
        background-color: white;
    }

    .nav-link{
        margin-left: 20px;
        text-align: center;
        font-family: HindSiliguri-Bold;
        font-size: 22px;
    }

    .btn-login{
        margin-left: 20px;
        margin-right: -50px;
        font-size: 20px;
        font-family: HindSiliguri-Bold;
    }
    .btn{
        color: #343538;
        border-color: #222657;
    }
    .btn:hover{
        border-color: #222657;
        background-color: #222657;
        color: white;
    }
    .navbar-brand img {
        width: 200px;
        height: 100px;
    }
</style>