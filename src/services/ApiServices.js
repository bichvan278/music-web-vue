import axios from 'axios';
import http from "../http-common";

const instance = axios.create({
    baseURL: http.WS_BASE_URL,
});

instance.interceptors.request.use(async (http) => {
    const token = localStorage.getItem('token');
    http.headers.Authorization = (token ? token : '');
    http.headers.ContentType = 'application/json';
    return http;
});

// USER
export const register = async (fullname, email, phone, username, password, role) => (
    await instance.post('/users/signup', {fullname, email, phone, username, password, role})
);

export const login = async (username, password) => (
    await instance.post('/users/signin', {username, password})
);

export const logout = async (token) => (
    await instance.post('/users/signout', {token})
);

export const getMemberRole = async () => (
    await instance.get('/roleMember')
);

export const getUserProfile = async (token) => (
    await instance.get('/users/me',{token})
);

export const updateProfile = async (fullname, email, phone, username, password) => (
    await instance.patch('/users/me',{fullname, email, phone, username, password})
);

// SINGLE
export const searchSingle = async (name) => (
    await instance.get(`/findSingles?name=${name}`)
);

export const createSingle = async (name, artistID, image, audio) => (
    await instance.post('/singles/newSingle',{name, artistID, image, audio})
);

export const getAllSingles = async () => (
    await instance.get('/singles/allsingles')
);

export const countAllSingles = async () => (
    await instance.get('/singles/countAllsingles')
);

export const getSingleDetail = async (id) => (
    await instance.get(`/singles/${id}`)
);

export const getSingleofOwner = async () => (
    await instance.get(`/myAllSingles`)
);

export const updateSingle = async (id, name, image, audio) => (
    await instance.patch(`/singles/${id}`,{name, image, audio})
);

export const deleteSingle = async (id) => (
    await instance.delete(`/singles/deleteSingle/${id}`)
);

// ARTIST
export const searchArtist = async (name) => (
    await instance.get(`/findArtist?name=${name}`)
);

export const createArtist = async (name, image, dob, description) => (
    await instance.post('/artist/newArtist',{name, image, dob, description})
);

export const getAllArtists = async () => (
    await instance.get('/allArtist')
);

export const countAllArtists = async () => (
    await instance.get('/artists/countAllArtist')
);

export const getArtistDetail = async (id) => (
    await instance.get(`/artist/${id}`)
);

export const getSinglesofArtist = async (id) => (
    await instance.get(`/allSingles/artist/${id}`)
);

export const getAlbumsofArtist = async (id) => (
    await instance.get(`/album/getAlbumsofArtist/${id}`)
);

export const updateArtist = async (id, name, image, dob, description) => (
    await instance.patch(`/artist/${id}`,{name, image, dob, description})
);

export const deleteArtist = async (id) => (
    await instance.delete(`/artist/deleteArtist/${id}`)
);

// PLAYLIS
export const searchPlaylist = async (name) => (
    await instance.get(`/findPlaylist?name=${name}`)
);

export const createPlaylist = async (name, image) => (
    await instance.post('/playlist/newPlaylist',{name, image})
);

export const addSingleinPlaylist = async (singleIn, ofPlaylist) => (
    await instance.post('/playlist/addSingleintoPlaylist',{singleIn, ofPlaylist})
);

export const getAllPlaylists = async () => (
    await instance.get('/allPlaylists')
);

export const countAllPlaylists = async () => (
    await instance.get('/playlists/countAllPlaylists')
);

export const getPlaylistDetail = async (id) => (
    await instance.get(`/playlist/${id}`)
);

export const getPlaylistofOwner = async () => (
    await instance.get(`/myAllPlaylist`)
);

export const getAllSinglesinPlaylist = async (id) => (
    await instance.get(`/playlist/getAllSinglesinPlaylist/${id}`)
);

export const updatePlaylist = async (id, name, image) => (
    await instance.patch(`/playlist/${id}`,{name, image})
);

export const deletePlaylist = async (id) => (
    await instance.delete(`/playlist/deletePlaylist/${id}`)
);

export const delSingleinPlaylist = async (id_play, id_del) => (
    await instance.delete(`/playlist/${id_play}/deleteSingleinPlaylist/${id_del}`)
);

// ALBUM
export const searchAlbum = async (name) => (
    await instance.get(`/findAlbum?name=${name}`)
);

export const createAlbum = async (name, alBofArtist, image) => (
    await instance.post('/album/newAlbum',{name, alBofArtist, image})
);

export const addSingleinAlbum = async (singleInAlb, ofAlbum) => (
    await instance.post('/album/addSingleintoAlbum',{singleInAlb, ofAlbum})
);

export const getAllAlbums = async () => (
    await instance.get('/allAlbums')
);

export const countAllAlbums = async () => (
    await instance.get('/albums/countAllAlbums')
);

export const getAlbumDetail = async (id) => (
    await instance.get(`/album/${id}`)
);

export const getAllSinglesinAlbum = async (id) => (
    await instance.get(`/album/getAllSinglesinAlbum/${id}`)
);

export const updateAlbum = async (id, name, image) => (
    await instance.patch(`/album/${id}`,{name, image})
);

export const deleteAlbum = async (id) => (
    await instance.delete(`/album/deleteAlbum/${id}`)
);

// COMMENT
export const getAllCommentinSingle = async (id) => (
    await instance.get(`/allComments/single/${id}`)
);

export const createComment = async (content, cmtofSingle) => (
    await instance.post('/comment/addCmt',{content, cmtofSingle})
);