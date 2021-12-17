<template>
    <div class="slide1">
        <ul class="slideshow1">
            <li><span></span></li>
            <li><span>2</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SlideArtist'
}
</script>

<style>
.slide1 {
    margin-top: 200px;
    /* position: relative;
    display: flex;
    align-content: center;
    justify-content: center; */
}

.slideshow1 {
    list-style-type: none;
    margin-top: 200px;
}

/** SLIDESHOW **/
.slideshow1,
.slideshow1:after { 
    top: 355px;
    position: absolute;
    width: 660px;
    height: 660px;
    left: 648px;
    z-index: 0;
}

.slideshow1 li span { 
	position: absolute;
    width: 100%;
    height: 70%;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 30s linear infinite 0s; 
}


.slideshow1 li:nth-child(1) span { 
    background-image: url("https://billboardvn.vn/wp-content/uploads/2020/12/d2.jpg"); 
}
.slideshow1 li:nth-child(2) span { 
    background-image: url("https://thongcongnghetgiare.net/uploads/tieusucasidongnhi/ca-si-dong-nhi.jpg");
    animation-delay: 6s; 
}
.slideshow1 li:nth-child(3) span { 
    background-image: url("https://tuoitrechinhphuc.com/wp-content/uploads/2020/12/phuong-ly-1.jpg");
    animation-delay: 12s; 
}
.slideshow1 li:nth-child(4) span { 
    background-image: url("https://vtv1.mediacdn.vn/thumb_w/650/2019/7/18/12654602101538696692846753128890951271157684n-1563420062461130424819-crop-15634200735851613593101.jpg");   
    animation-delay: 18s; 
}
.slideshow1 li:nth-child(5) span { 
    background-image: url("https://icdn.dantri.com.vn/thumb_w/640/2020/06/16/tcbc-ameex-realme-ytykyt-ydocx-1592268110259.jpeg");
    animation-delay: 24s; 
}



@keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}


@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}


.no-cssanimations .cb-slideshow1 li span {
	opacity: 1;
}
</style>