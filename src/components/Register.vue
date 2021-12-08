<template>
    <div class="content">
        <header-comp></header-comp>
        <div class="container" style=" margin-top: 110px; ">
            <div class="head-title">
                <h1 class="text-page"><span>register</span></h1>
            </div>
            <div class="row" style="margin-top: -40px">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <!-- Default form sign up -->
                    <h3 class="res-title">TAKE IT RIGHT NOW</h3>
                        <form @submit.prevent="submitSignup">
                            <div class="form-group">
                                <input required="true" type="text" name="fullname" v-model="user.fullname" placeholder="Fullname" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input required="true" type="text" name="email" v-model="user.email" placeholder="Email" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input required="true" type="text" name="phone" v-model="user.phone" placeholder="Phone" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input required="true" type="text" name="username" v-model="user.username" placeholder="Username" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input required="true" type="password" name="password" v-model="user.password" placeholder="Password" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input required="true" type="hidden" name="role" v-model="role" placeholder="Member" class="form-control form-control-lg" />
                            </div>

                            <button type="submit" class="btn-reg">Register</button>
                        </form>
                            <br/>
                            
                            <p class="text-reg">Back to home page!
                                <router-link class="btn2" :to="{name: 'HomePage'}">Home Page</router-link>
                            </p>

                            <div class="social-icons">
                                <ul>
                                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                    <!-- Default form login -->
                </div>

                <div class="col-md-4"></div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from './partial/FooterComp.vue'
import HeaderComp from './partial/HeaderComp.vue'
import {register, getMemberRole} from "@/services/ApiServices.js"

export default {
    name: 'Register',
    components: {FooterComp, HeaderComp},
    data() {
        return {
            user: {
                fullname: '',
                email: '',
                phone: '',
                username: '',
                password: ''
            },
            role: null
        }
    },
    async created() {
        const result = await getMemberRole();
        console.warn(result);
        this.role = result.data._id;
    },
    methods:{
        async submitSignup(){
            const fullname = this.user.fullname;
            const email = this.user.email;
            const phone = this.user.phone;
            const username = this.user.username;
            const password = this.user.password;
            const role = this.role;

            const response = await register(fullname, email, phone, username, password, role);
            console.warn(response);
            if(response.status === 201){
                alert("Register is completely!")
                this.$router.replace({ name: 'signin' });
            }else{
                alert("Try again!")
            }
        }
    }
}
</script>

<style>
   
    .res-title {
        margin-left: 40px;
        margin-bottom: 20px;
        font-size: 30px;
        font-family: Noto Sans JP;
        font-size: 40px;
        text-align: center;
        text-transform: uppercase;
        color: #222657;
    }

    .btn-reg {
        border-radius: 30px;
        border-color: #191c1f;
        padding: 10px 20px;
        margin-left: 145px;
        font-size: 18px;
        background-color: white;
        color: #222657;
        text-align: center;
    }

    .btn-reg:hover {
        color: #fff;
        background-color: #1a1e21;
        border-color: #191c1f;
    }

    .text-reg {
        text-align: center;
        margin-left: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .btn-reg, .text-reg {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .social-icons {
        margin-left: 25px;
    }
</style>