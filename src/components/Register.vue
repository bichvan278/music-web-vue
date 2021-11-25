<template>
    <div class="content">
        <div class="head-title">
            <h1 class="text-page"><span>register</span></h1>
        </div>
        <div class="container" style=" margin-top: -50px; ">
            <div class="row">
                <div class="col-md-4"></div>

                <div class="col-md-4">
                    <!-- Default form login -->
                    <h2 class="res-title">TAKE IT RIGHT NOW</h2>
                        <form>
                            <div class="form-group">
                                <input type="text" name="email" v-model="email" placeholder="Email" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input type="text" name="phone" v-model="phone" placeholder="Phone" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input type="text" name="username" v-model="username" placeholder="Username" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" v-model="password" placeholder="Password" class="form-control form-control-lg" />
                            </div>

                            <button type="submit" class="btn-reg" v-on:click="register()">Register</button>
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

export default {
    name: 'Register',
    components: {FooterComp},
    data() {
        return {
            email: '',
            phone: '',
            username: '',
            password: ''
        }
    },
    // computed: {
    //     loggedIn() {
    //         return this.$store.state.auth.status.loggedIn;
    //     }
    // },
    // mounted() {
    //     if (this.loggedIn) {
    //         this.$router.push('/userprofile');
    //     }
    // },
    // methods: {
    //     register() {
    //         this.$validator.validate().then(isValid => {
    //             if (isValid) {
    //             this.$store.dispatch('auth/signup', this.user).then(
    //                 res => {
    //                     console.log(res);
    //                     alter("Sign up is successful!")
    //                     this.$router.push('signin')
    //                 });
    //             }else{
    //                 alert("Something maybe is wrong! Check your information again!")
    //             }
    //         });
    //     }
    // }
    methods: {
        async register() {
            await axios.post("http://localhost:3000/accounts",{
                email: this.email,
                phone: this.phone,
                username: this.username,
                password: this.password
            })
            .then(response => {
                console.log(response);
                if(response.status == 201){
                    console.log(response);
                    alert("Successful! Login right now to see more.");
                    this.$router.push('signin');
                }else{
                    alert("Oops! You have a mistake!");
                }
            }).catch( err => {
                console.log(err);
            })
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