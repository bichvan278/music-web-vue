<template>
    <div class="card">
      <img :src="`data:image/png;base64,${playlist.image}`" v-if="playlist.image !== null " />
      <img src="./../../assets/img/music.jpg" v-else />
      <p class="card-desc">{{playlist.createdBy.username}}</p>
      <router-link :to="{name: 'playlistdetail', params: {id: playlist._id} }" style="text-decoration: none;">
        <p class="card-title">{{playlist.name}}</p>
      </router-link>
    </div>
</template>

<script>
export default {
    name: "PlaylistCard",
    props: ["playlist"],
    data() {
        return {
        } 
    }    
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
}

.card {
  margin: 40px;
  position: relative;
  max-width: 250px;
  max-height: 350px;
  /* box-shadow: 0 40px 60px -6px rgb(107, 107, 107); */
}

.card-title {
  display: block;
  text-align: center;
  color: whitesmoke;
  font-size: 1.2rem;
  background-color: #5b5d5f;
  padding: 2%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.card-title:hover {
  display: block;
  text-align: center;
  color: rgb(37, 28, 163);
  font-size: 1.2rem;
  background-color:white;
  padding: 2%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.card img {
  width: 230px;
  height: 230px;
  object-fit: cover;
  /* object-position: 50% 50%; */
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 1.2rem;
  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: white;
  transition: 0.8s ease;
  text-align: center;
}

.card:hover .card-desc {
  opacity: 1;
  width: 230px;
  height: 230px;
}

h1 {
  font-size: 2.8rem;
  color: #fff;
  margin: 40px 0 20px 0;
  text-align: center;
}

</style>