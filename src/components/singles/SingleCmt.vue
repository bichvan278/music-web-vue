<template>
    <div class="media g-mb-30 media-comment">
        <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description">
        <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30" 
            style="height: 200px; margin-top: -15px; margin-left: 10px; background-color: #fafafa;">
            <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0" style="color: rgb(37, 28, 163);">{{cmt.cmtBy.username}}</h5>
            </div>
            <b-textarea style="font-size: 13px; margin-left: -5px;" placeholder="">{{cmt.content}}</b-textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCmt',
    props: ["cmt"],
    data() {
        return{
            
        }
    }
}
</script>

<style>
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