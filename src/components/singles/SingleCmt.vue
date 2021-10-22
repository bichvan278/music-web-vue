<template>
    <div class="sing-cmt" style="margin-top:50px;">
        <h2 class="content-title1">comment</h2>
        <hr>
        <div class="container">
            <div class="row">
                <!-- Comment for Single -->
                <div class="col-md-8">
                    <!-- Form comment to post -->
                    <form action="#" class="cmt-form">
                        <div class="media g-mb-30 media-comment">
                            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description">
                            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30" 
                                style="height: 200px; margin-top: -15px; margin-left: 10px; background-color: #fafafa;">
                            <div class="g-mb-15">
                                <h5 class="h5 g-color-gray-dark-v1 mb-0" style="color: rgb(37, 28, 163);">user name</h5>
                            </div>
                            <b-textarea style="font-size: 13px; margin-left: -5px;" placeholder="Comment here . . ."></b-textarea>
                            <button type="submit" value="POST" class="btnCmt">POST</button>
                            </div>
                        </div>
                    </form>
                    <!-- Posted comment -->
                    <div class="media g-mb-30 media-comment">
                        <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description">
                        <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30" 
                            style="height: 155px; margin-top: -15px; margin-left: 10px; background-color: #fafafa;">
                        <div class="g-mb-15">
                            <h5 class="h5 g-color-gray-dark-v1 mb-0" style="color: rgb(37, 28, 163);">user name</h5>
                            <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                        </div>
                    
                        <p style="font-size: 13px;">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                            felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                    
                        <!-- <ul class="list-inline d-sm-flex my-0">
                            <li class="list-inline-item g-mr-20">
                            <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                                <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                178
                            </a>
                            </li>
                            <li class="list-inline-item g-mr-20">
                            <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                                <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                34
                            </a>
                            </li>
                            <li class="list-inline-item ml-auto">
                            <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                                <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                                Reply
                            </a>
                            </li>
                        </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCmt'
}
</script>

<style>
.btnCmt {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgb(37, 28, 163);
}

.content-title1 {
    line-height: 0.7em;
    text-align: left;
    font-size: 45px;
    color: slategrey;
    visibility: inherit;
}

@media (min-width: 0) {
    .g-mr-15 {
        margin-right: 1.07143rem !important;
    }
}
@media (min-width: 0){
    .g-mt-3 {
        margin-top: 0.21429rem !important;
    }
}

.g-mb-15 {
    margin-top: -25px;
    display: inline-block;
}

.g-height-50 {
    height: 50px;
}

.g-width-50 {
    width: 50px !important;
}

@media (min-width: 0){
    .g-pa-30 {
        padding: 2.14286rem !important;
    }
}

/* .g-bg-secondary {
    background-color: #fafafa !important;
} */

.u-shadow-v18 {
    box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}

.g-color-gray-dark-v4 {
    color: #777 !important;
}

.g-font-size-12 {
    font-size: 0.85714rem !important;
}

.media-comment {
    margin-top:20px
}
</style>