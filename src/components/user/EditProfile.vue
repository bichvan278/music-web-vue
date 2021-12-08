<template>
    <div class="edit-pro">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 140px;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>edit profile</span></h1>
                </div>
                    <form class="profile-form row" style="margin-top: -50px; margin-left: 50px;" @submit.prevent="frmEditProfile">
                        <div class="form-group">
                            <label for="dof" class="text-form">Fullname:</label>
                            <input  type="text" class="form-control" id="fullname" v-model="user.fullname">
                        </div>
                        <div class="form-group">
                            <label for="usr" class="text-form">Username:</label>
                            <input  type="text" class="form-control" id="usr" v-model="user.username">
                        </div>
                        <div class="form-group">
                            <label for="email" class="text-form">Password:</label>
                            <input  type="text" class="form-control" id="pw" v-model="user.password">
                        </div>
                        <div class="form-group">
                            <label for="dof" class="text-form">Email:</label>
                            <input  type="email" class="form-control" id="email" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="text-form">Phone: </label>
                            <input type="text" class="form-control" id="phone" v-model="user.phone">
                        </div>
                        <!-- <div class="form-group">
                            <label for="pwd">New Password:</label>
                            <input  type="password" class="form-control" id="pwd">
                        </div> -->
                       
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnSave" value="SAVE" />
                        </div>
                    </form>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from '../partial/FooterComp.vue'
import {getUserProfile, updateProfile} from "@/services/ApiServices.js"

export default {
    name: 'EditProfile',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            user: {
                fullname: '',
                username: '',
                password: '',
                email: '',
                phone: ''
            }
        }
    },
    async mounted() {
        const result = await getUserProfile();
        console.warn(result);
        this.user = result.data;
    },
    methods: {
        async frmEditProfile(){
            let fullname = this.user.fullname;
            let username = this.user.username;
            let password = this.user.password;
            let email = this.user.email;
            let phone = this.user.phone;

            const response = await updateProfile(fullname, email, phone, username, password);
            const {data} = response;
            alert("Are you sure for your change ?")
            if(response.status === 200){
                console.log(response)
                this.$router.replace({ name: 'userprofile' });
            }else{
                alert("Try again!")
            }
        }
    }
}
</script>

<style scoped>
.text-form{
    margin-left: 55px;
    font-size: 20px;
}

.btnSave
{
    width: 15%;
    border-radius: 1rem;
    padding: 1%;
    color: #fff;
    background-color: rgb(37, 28, 163);
    border: none;
    cursor: pointer;
    margin-left: 420px;
    margin-top: 15px;
}

</style>