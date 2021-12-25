<template>
    <div class="my-single" style="display: grid;">
        <header-comp></header-comp>
        <!-- Content -->
        <div class="container" style="margin-top: 120px">
            <div class="head-title">
                <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>my all singles</span></h2>
            </div>
            <div class="row">
                <!-- Search single -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find your single..." 
                                class="b-search"
                                v-model="search"
                                @keyup="submittoSearch">
                        <!-- <button type="submit" class="btn-search" >search</button> -->
                    </div>
                </div>
                <!-- Result Search -->
                <div v-if=" search !== '' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">IMAGE</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">PLAY</th>
                                <th scope="col">EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(single, index) in singleofSearch" :key="single._id">
                                <td scope="row">{{index + 1}}</td>
                                <td>{{single.name}}</td>
                                <td v-if="single.image !== null">
                                    <img :src="`data:image/png;base64,${single.image}`" style="width: 25px; height: 25px;">
                                </td>
                                <td v-if="single.image === null">
                                    <img src="./../../assets/img/music.jpg" style="width: 25px; height: 25px;">
                                </td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <router-link :to="{name: 'singledetail', params: {id: single._id} }">
                                        <button class="action-btn" id="play">
                                            <i class="far fa-play-circle" style="font-size: 25px;"></i>
                                        </button>
                                    </router-link>
                                </td>
                                <td style="display: table-cell; justify-content: left;">
                                    <router-link :to="{name: 'editsingle', params: {id: single._id} }">
                                        <b-button class="btnEdit">EDIT</b-button>
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

                <!-- Show all single when not search -->
                <div v-if=" search === '' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">IMAGE</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">PLAY</th>
                                <th scope="col">EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(single, index) in singles" :key="single._id">
                                <td scope="row">{{index + 1}}</td>
                                <td>{{single.name}}</td>
                                <td v-if="single.image !== null">
                                    <img :src="`data:image/png;base64,${single.image}`" style="width: 25px; height: 25px;">
                                </td>
                                <td v-if="single.image === null">
                                    <img src="./../../assets/img/music.jpg" style="width: 25px; height: 25px;">
                                </td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <router-link :to="{name: 'singledetail', params: {id: single._id} }">
                                        <button class="action-btn" id="play">
                                            <i class="far fa-play-circle" style="font-size: 25px;"></i>
                                        </button>
                                    </router-link>
                                </td>
                                <td style="display: table-cell; justify-content: left;">
                                    <router-link :to="{name: 'editsingle', params: {id: single._id} }">
                                        <b-button class="btnEdit">EDIT</b-button>
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
        </div>
    </div>
</template>

<script>
import { getSingleofOwner, deleteSingle} from "@/services/ApiServices.js"
import HeaderComp from '../partial/HeaderComp.vue'

export default {
    components: { HeaderComp },
    data() {
        return {
            singles: [],
            singleofSearch: [],
            search: '',
            id_del: ''
        }
    },
    async mounted() {
        const result1 = await getSingleofOwner();
        console.warn(result1);
        this.singles = result1.data;
    },
    methods: {
        async submittoSearch() {
            console.log("search:",this.search)
            if(this.search){
                this.singleofSearch = this.singles.filter((single)=>{
                    return single.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }else{
                return false;
            }
        },
        async removeSingle($event) {
            this.id_del = $event.currentTarget.value
            console.log("result:",this.id_del)
            const id = this.id_del
            alert("Are you sure to remove it?")
        
            const result2 = await deleteSingle(id)
            if(result2.status === 200) {
                window.location.reload();
            }
        }
    }
}
</script>

<style>
.see-more {
    text-align: center;
    font-size: 22px;
    color: rgb(37, 28, 163);
}
.action-btn {
    background: white;
    border: 0px;
    font-size: 25px;
    color: rgb(21, 22, 26);
    cursor: pointer;
    padding: 10px;
    margin: 0px 15px;
    margin-left: -5px;
}

.btnEdit {
    margin: 5px;
    border: none;
}
.search-bar, .select-play {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 100%;
}

select {
    padding: 5px 10px;
    text-align: center;
    border: 2px solid grey;
}

.s-text {
    line-height: 0.7em;
    text-align: center;
    font-size: 35px;
    color: rgb(197, 194, 194);
}

.s-bar {
    position: relative;
    margin: 0px 0px 9px 0;
    left: 18px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start;
}

.b-search {
    height: 42px;
    width: 40rem;
    border-radius: 4rem;
    border: 2px solid grey;
}

.btn-search {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    background-color: white;
}

.btn-search:hover {
    padding: 5px 8px;
    text-align: center;
    font-size: 15px;
    background-color: rgb(37, 28, 163);
    border-color: rgb(37, 28, 163);
    color: white;
}
</style>