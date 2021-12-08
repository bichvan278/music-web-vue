import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AdminPage from '@/components/AdminPage'
import Statistical from '@/components/Statistical'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import ContactPage from '@/components/ContactPage'
import SearchPage from '@/components/SearchPage'
// Single
import SinglePage from '@/components/singles/SinglePage'
import SingleDetail from '@/components/singles/SingleDetail'
import SingleList from '@/components/singles/SingleList'
import AddSingle from '@/components/singles/AddSingle'
import EditSingle from '@/components/singles/EditSingle'
// User
import UserProfile from '@/components/user/UserProfile'
import EditProfile from '@/components/user/EditProfile'
// Artist
import ArtistPage from '@/components/artists/ArtistPage'
import ArtistList from '@/components/artists/ArtistList'
import ArtistDetail from '@/components/artists/ArtistDetail'
import AddArtist from '@/components/artists/AddArtist'
import EditArtist from '@/components/artists/EditArtist'
// Album
import AlbumPage from '@/components/albums/AlbumPage'
import AlbumDetail from '@/components/albums/AlbumDetail'
import AlbumList from '@/components/albums/AlbumList'
import AddAlbum from '@/components/albums/AddAlbum'
import EditAlbum from '@/components/albums/EditAlbum'
// Playlist
import PlaylistPage from '@/components/playlists/PlaylistPage'
import PlaylistDetail from '@/components/playlists/PlaylistDetail'
import PlaylistList from '@/components/playlists/PlaylistList'
import AddPlaylist from '@/components/playlists/AddPlaylist'
import EditPlaylist from '@/components/playlists/EditPlaylist'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/singlepage',
      name: 'singlepage',
      component: SinglePage
    },
    {
      path: '/single/:id',
      name: 'singledetail',
      component: SingleDetail
    },
    {
      path: '/singlelist',
      name: 'singlelist',
      component: SingleList
    },
    {
      path: '/addsingle',
      name: 'addsingle',
      component: AddSingle
    },
    {
      path: '/editsingle/:id',
      name: 'editsingle',
      component: EditSingle
    },
    {
      path: '/accounts',
      name: 'userprofile',
      component: UserProfile
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile
    },
    {
      path: '/artistpage',
      name: 'artistpage',
      component: ArtistPage
    },
    {
      path: '/artist/:id',
      name: 'artistdetail',
      component: ArtistDetail
    },
    {
      path: '/artistlist',
      name: 'artistlist',
      component: ArtistList
    },
    {
      path: '/addartist',
      name: 'addartist',
      component: AddArtist
    },
    {
      path: '/editartist/:id',
      name: 'editartist',
      component: EditArtist
    },
    {
      path: '/playlistpage',
      name: 'playlistpage',
      component: PlaylistPage
    },
    {
      path: '/playlist/:id',
      name: 'playlistdetail',
      component: PlaylistDetail
    },
    {
      path: '/playlistlist',
      name: 'playlistlist',
      component: PlaylistList
    },
    {
      path: '/addplaylist',
      name: 'addplaylist',
      component: AddPlaylist
    },
    {
      path: '/editplaylist/:id',
      name: 'editplaylist',
      component: EditPlaylist
    },
    {
      path: '/albumpage',
      name: 'albumpage',
      component: AlbumPage
    },
    {
      path: '/album/:id',
      name: 'albumdetail',
      component: AlbumDetail
    },
    {
      path: '/albumlist',
      name: 'albumlist',
      component: AlbumList
    },
    {
      path: '/addalbum',
      name: 'addalbum',
      component: AddAlbum
    },
    {
      path: '/editalbum/:id',
      name: 'editalbum',
      component: EditAlbum
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: AdminPage
    },
    {
      path: '/statistical',
      name: 'statistical',
      component: Statistical
    }
  ]
});
