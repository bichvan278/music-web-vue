<template>
    <div class="search-page">

        <header-comp></header-comp>
        <search-bar></search-bar>

        <div class="container">
            <div class="row">
                <!-- Playlist -->
                <div class="popular-list" style="margin-top: 50px;" v-if="playlists.length > 0 ">
                    <h2 class="search-title" style="color: rgb(178, 197, 240);">PLAYLIST</h2>
                    <hr>
                    <section>
                        <div class="cards">
                            <playlist-card  v-for="playlist in playlists" :key="playlist._id" :playlist="playlist"></playlist-card>
                        </div>
                    </section>
                </div>
     
                <!-- Single -->
                <div class="popular-list2" style="margin-top: 50px;" v-if="singles.length > 0 ">
                    <h2 class="search-title" style="color: rgb(178, 197, 240);">SINGLE</h2>
                    <hr>
                    <section>
                        <div class="cards">
                            <single-card v-for="single in singles" :key="single._id" :single="single"></single-card>
                        </div>
                    </section>
                </div>
                
                <!-- Artist -->
                <div class="popular-list3" style="margin-top: 50px;" v-if="artists.length > 0 ">
                    <h2 class="search-title" style="color: rgb(178, 197, 240);">ARTIST</h2>
                    <hr>
                    <section>
                        <div class="cards">
                            <artist-card  v-for="artist in artists" :key="artist._id" :artist="artist"></artist-card>
                        </div>
                    </section>
                </div>

                <!-- Album -->
                <div class="popular-list4" style="margin-top: 50px;" v-if="albums.length > 0 ">
                    <h2 class="search-title" style="color: rgb(178, 197, 240);" v-if="albums !=='' ">ALBUM</h2>
                    <hr>
                    <section>
                        <div class="cards">
                            <album-card  v-for="album in albums" :key="album._id" :album="album"></album-card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from './partial/HeaderComp.vue'
import SearchBar from './partial/SearchBar.vue'
import PlaylistCard from './playlists/PlaylistCard.vue'
import SingleCard from "./singles/SingleCard.vue"
import ArtistCard from "./artists/ArtistCard.vue"
import AlbumCard from "./albums/AlbumCard.vue"
import { searchPlaylist, searchSingle, searchArtist, searchAlbum } from "@/services/ApiServices.js"

export default {
    components: { HeaderComp, SearchBar, PlaylistCard, SingleCard, ArtistCard, AlbumCard },
    data() {
        return {
            playlists: [],
            singles: [],
            artists: [],
            albums: []
        }
    },
    async mounted() {

        const name = this.$route.query.name;

        // SEARCH FUNC of Playlist
        console.log("result:",name)
        const result = await searchPlaylist(name);
        this.playlists = result.data;
        console.log(result); 
        
        // SEARCH FUNC of Single
        console.log("result:",name)
        const result2 = await searchSingle(name);
        this.singles = result2.data;
        console.log(result2);

        // SEARCH FUNC of Artist
        console.log("result:",name)
        const result3 = await searchArtist(name);
        this.artists = result3.data;
        console.log(result3);

        // SEARCH FUNC of Album
        console.log("result:",name)
        const result4 = await searchAlbum(name);
        this.albums = result4.data;
        console.log(result4);

    }

}
</script>

<style>
.no-song{
    width: 150px;
    height: 150px;
    margin: 30px;
}
</style>