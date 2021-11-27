<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="head-title">
                    <h1 class="text-page1"><span>sign in</span></h1>
                </div>
                 <div class="head-title1">
                    <h1 class="text-page2"><span>sign in</span></h1>
                </div>
                 <div class="head-title2">
                    <h1 class="text-page3"><span>sign in</span></h1>
                </div>
            </div>

            <div class="col-md-6" style=" margin-top: 40px; ">
                <!-- Default form login -->
                <h2>SIGN IN</h2>
                    <form>
                        <div class="form-group">
                            <input  type="text" name="username" v-model="username" autocomplete="off" 
                                    placeholder="Username" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group">
                            <input  type="password" name="password" v-model="password" autocomplete="off" 
                                    placeholder="Password" class="form-control form-control-lg" />
                        </div>

                        <button type="submit" v-on:click="signin()" class="btn btn-dark btn-lg btn-block">Sign In</button>
                    </form>
                    <!-- End form login -->
                        <br/>
                        
                        <p class="text1">Don't have an account?
                            <router-link class="btn1" :to="{name: 'register'}">Register</router-link>
                        </p>
                        <br>
                        <!-- <p class="text1">See more your profile
                            <router-link :to="{name: 'adminpage'}" class="btn1">Admin Page</router-link>
                        </p> -->

                        <div class="social-icons">
                            <ul>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import FooterComp from './partial/FooterComp.vue'
import {login} from "@/services/ApiServices.js"

export default {
    components: {FooterComp},
    name: "SignIn",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async signin() {
            const username = this.username;
            const password = this.password;
            if(username===""){
                console.log("Tên đăng nhập không được rỗng!")
            }else if(password===""){
                console.log("Mật khẩu không được rỗng!")
            }else{
                const response = await login(username, password);
                const data = response.data;
                console.log(data)
                if (data.user) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("role", JSON.stringify(data.role))
                    console.log(data.user)
                    const role = await data.role.name;
        
                    if(role==='Member'){
						this.$router.replace({ name: 'userprofile' });
                    }else if(role==='Admin'){
						this.$router.replace({ name: 'adminpage' });
                    }else {
                        console.log('Having s.th wrong!')
                    }
                }

            }
            // const result = await login();
            // if(result.status == 200) {
            //     localStorage.setItem('user',JSON.stringify(result.data));
            //     alert("Login is successful");
            //     this.$router.push('userprofile');
            // }else{
            //     alert("Failure! Login again!")
            // }
            
        }
    }
}
</script>

<style>
    .row{
        margin-top: 50px;
    }

    .text1 {
        margin-left: 150px;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(63, 61, 61);
    }

    
    h2{
        font-family: Noto Sans JP;
        font-size: 40px;
        text-align: center;
        text-transform: uppercase;
        color: #222657;
    }

    .text-page1 {
        margin-top: 30px;
        line-height: 0.7em;
        text-align: center;
        font-size: 180px;
        color: rgb(197, 194, 194);
    }
     .text-page2 {
        line-height: 0.7em;
        text-align: center;
        font-size: 180px;
        color: rgb(37, 28, 163);
        margin-top: -45px;
    }
    .text-page3 {
        line-height: 0.7em;
        text-align: center;
        font-size: 180px;
        margin-top: -50px;
        color: rgb(121, 157, 235);
    }
</style>