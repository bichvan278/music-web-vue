<template>
    <div class="edit-pro">
        <div class="header-vue">
            <header-comp></header-comp>
        </div>
        <div class="container" style="margin-top: 175px;">
            <div class="row">
                <div class="head-title">
                    <h1 class="text-page"><span>edit profile</span></h1>
                </div>
                    <form class="profile-form row" style="margin-top: -50px; margin-left: 50px;">
                        <div class="form-group">
                            <label for="usr" class="text-form">Username:</label>
                            <input required="true" type="text" class="form-control" id="usr">
                        </div>
                        <div class="form-group">
                            <label for="email" class="text-form">Email:</label>
                            <input required="true" type="email" class="form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="text-form">Phone: </label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                        <div class="form-group">
                            <label for="dof" class="text-form">Date of Birth:</label>
                            <input required="true" type="date" class="form-control" id="dob">
                        </div>
                        <!-- <div class="form-group">
                            <label for="pwd">New Password:</label>
                            <input required="true" type="password" class="form-control" id="pwd">
                        </div> -->
                       
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnSave" value="SAVE" />
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"

export default {
    name: 'EditProfile',
    components: {
        HeaderComp
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