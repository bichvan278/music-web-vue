<template>
    <div class="sing-list">
        <header-comp></header-comp>
        <div class="container" style="margin-top: 140px;">
            <div class="head-title">
                <h1 class="text-page"><span>single list</span></h1>
            </div>
            <div class="row">
                <div class="nav">
                    <div class="form-group">
                        <router-link :to="{name: 'addsingle'}">
                            <b-button class="btnAddsingle">+ ADD NEW SINGLE</b-button>
                        </router-link>
                    </div>
                    <div class="form-group" style="width: 350px; margin-left:300px;">
                        <input type="text" placeholder=" Search here ..."  class="search-bar">
                    </div>
                </div>

                <!-- List of all singles -->
                <table class="table" style=" margin-top: 30px;"> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">POSTE BY</th>
                            <th scope="col">NAME SONG</th>
                            <th scope="col">IMG</th>
                            <th scope="col">SINGER</th>
                            <th scope="col">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="single in singles" :key="single._id">
                            <td scope="row">{{single.postBy.username}}</td>               
                            <td>{{single.name}}</td>
                            <td>{{single.image}}</td>
                            <td>{{single.artistID.name}}</td>
                            <td style="display: flex; justify-content: center;">
                                <router-link :to="{name: 'editsingle', params: {id: single._id} }">
                                    <b-button class="btn btnEdit">EDIT</b-button>
                                </router-link>
                                <b-button   class="btn btnEdit" 
                                            variant="danger"
                                            v-bind:value="single._id"
                                            v-on:click="removeSingle">DELETE</b-button>
                            </td>
                        </tr>     
                    </tbody>
                </table>
            </div>
        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from "@/components/partial/HeaderComp.vue"
import FooterComp from "@/components/partial/FooterComp.vue"
import { getAllSingles, deleteSingle } from "@/services/ApiServices.js"

export default {
    name:'SingleList',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            singles: [],
            id_del: ''
        }
    },
    async mounted() {
        const result = await getAllSingles();
        console.warn(result);
        this.singles = result.data;

    },
    methods: {
        async removeSingle($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result1 = await deleteSingle(id)
            if(result1.status === 200) {
                window.location.reload();
                // this.$router.replace({ name: 'playlistlist' });
            }
        }
    }
}
</script>

<style scoped>
th, td {
    text-align: center;
}
.btnEdit {
    margin: 5px;
    border: none;
}
.nav{
    display: flex;
    justify-content: center;
}
.btnAddsingle {
    margin-left: 0px;
    background-color: white;
    color: black;
}
.btnAddsingle:hover {
    margin-left: 0px;
    color: whitesmoke;
    background-color: rgb(42, 42, 100);
}
.search-bar {
    width: 100%;
    height: 60%;
    margin-top: 10px;
    border: 1px solid rgb(42, 42, 100);
}
.search-bar:focus {
    width: 100%;
    height: 70%;
    margin-top: 10px;
    border: 1px solid rgb(42, 42, 100);
}



</style>