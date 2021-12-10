<template>
    <div class="add-alb-single" style="display: grid;">
        <div class="head-title">
            <h2 style="text-align: center; color: rgb(178, 197, 240); font-size: 120px;"><span>single in album</span></h2>
        </div>
        <!-- Content -->
        <div class="container" style="margin-top: -40px;">
            <div class="row">
                <!-- Choose album -->
                <div class="select-alb" style="margin: 35px;">
                    <div class="search-text">
                        <h3 class="s-text">choose album</h3>
                    </div>
                    <select class="s-bar" @change="selectedObj">
                        <option aria-placeholder="Select Album" 
                                v-bind:value="album._id" 
                                v-for="album in albums" :key="album._id">{{album.name}}
                        </option>
                    </select>
                </div>
                <!-- Search single to add -->
                <div class="search-bar" style="margin-top: 0px;">
                    <div class="search-text">
                        <h3 class="s-text">search here</h3>
                    </div>
                    <div class="s-bar">
                        <input  type="text" 
                                value placeholder="  find single..." 
                                class="b-search"
                                v-model="search">
                        <button type="submit" class="btn-search" @click="submittoSearch">search</button>
                    </div>
                </div>
                <!-- Result Search -->
                <div v-if=" search !== '' ">
                    <table class="table" style=" margin-top: 30px;"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">POSTE BY</th>
                                <th scope="col">NAME SONG</th>
                                <th scope="col">IMG</th>
                                <th scope="col">SINGER</th>
                                <th scope="col">ADD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="single in singles" :key="single._id">
                                <td scope="row">{{single.postBy.username}}</td>               
                                <td>{{single.name}}</td>
                                <td>{{single.image}}</td>
                                <td>{{single.artistID.name}}</td>
                                <td style="display: flex; justify-content: left;">
                                    <!-- <router-link :to="{name: 'editsingle', params: {id: single._id} }">
                                        <b-button class="btn btnEdit">EDIT</b-button>
                                    </router-link> -->
                                    <b-button   class="btn btnEdit" 
                                                style="margin-left: 0px;"
                                                v-bind:value="single._id"
                                                v-on:click="addSingle">ADD</b-button>
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
import { getAllSingles, getAllAlbums, addSingleinAlbum } from "@/services/ApiServices.js"

export default {
    data() {
        return {
            search: '',
            singles: [],
            albums: [],
            singleInAlb: '',
            ofAlbum: ''
        }
    },
    async mounted() {
        const result = await getAllSingles();
        console.log("singles:",result);
        this.singles = result.data;

        const result1 = await getAllAlbums();
        console.log("albums:",result1);
        this.albums = result1.data;
    },
    methods: {
        async submittoSearch() {
            if(this.search){
                return this.singles.filter((single)=>{
                    return this.search.toLowerCase().split(' ').every(v => single.name.toLowerCase().includes(v))
                })
            }else{
                return this.singles;
            }
        },
        selectedObj(e) {
            this.ofAlbum = e.target.options[e.target.options.selectedIndex].value;
            console.log("choose album:", this.ofAlbum);
        },
        async addSingle($event) {
            this.singleInAlb = $event.currentTarget.value;
            console.log("result:",this.singleInAlb);

            const singleInAlb = this.singleInAlb;
            const ofAlbum = this.ofAlbum;
            const response = await addSingleinAlbum(singleInAlb, ofAlbum);
            console.log("send:",response)
            if(response.status === 201){
                alert("Successful ^^ !!!")
                this.$router.replace({ name: 'albumdetail', params: {id: this.ofAlbum} });
            }else{
                alert("Try again!")
            }
        }
    }
}
</script>

<style>
.search-bar, .select-alb {
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