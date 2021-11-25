<template>
<div class="footer-page">
    <div class="pb-0 mb-0 justify-content-center text-light footer-page">
        <footer>
            <div class="row my-5 justify-content-center py-5">
                <div class="col-11">
                    <div class="row ">
                        <div class="col-xl-6 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <img src="./../../assets/img/lg_footer.png" alt="" style="margin-left: 200px">
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                            <h6 class="mb-3 mb-lg-4 bold-text "><b>DISCOVER</b></h6>
                            <ul class="list-unstyled">
                                <li>Home</li>
                                <li>Artist</li>
                                <li>Album</li>
                                <li>Playlist</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                            <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                            <p class="mb-1">605, RATAN ICON BUILDING</p>
                            <p>SEAWOODS SECTOR</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="text-footer">
                            <h3 class="text-footer1">connect with your feeling</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

 /* body {
     background: linear-gradient(0deg, #fff, 50%, #DEEEFE);
     font-family: 'Rubik', sans-serif;
     background: #455A64;
     height: 100 !important
 } */

    .text-footer1 {
        line-height: 0.7em;
        text-align: center;
        font-size: 120px;
        color: rgb(37, 28, 163);
        margin-top: 30px;
        width: 1349px;
    }

    .footer-page {
        overflow: hidden;
        margin-top: 250px;
        background: black;
        color: #627482 !important;
        margin-bottom: 0;
        padding-bottom: 0;
        font-family: 'Rubik', sans-serif;
    }

    small {
        font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important
    }

    .bold-text {
        color: #989c9e !important
    }

    .mt-55 {
        margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important
    }

    h3 {
        font-size: calc(34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))) !important
    }

    .social {
        font-size: 21px !important
    }

    .rights {
        font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important
    }
</style>