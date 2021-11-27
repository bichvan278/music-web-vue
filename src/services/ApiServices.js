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

export const login = async (username, password) => (
    await instance.post('/users/signin', {username, password})
);

// SINGLE
export const getAllSingles = async () => (
    await instance.get('/singles/allsingles')
);

export const getSingleDetail = async (id) => (
    await instance.get(`/singles/${id}`)
);

// ARTIST
export const getAllArtists = async () => (
    await instance.get('/allArtist')
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

// PLAYLIST
export const getAllPlaylists = async () => (
    await instance.get('/allPlaylists')
);

export const getPlaylistDetail = async (id) => (
    await instance.get(`/playlist/${id}`)
);

export const getAllSinglesinPlaylist = async (id) => (
    await instance.get(`/playlist/getAllSinglesinPlaylist/${id}`)
);

// ALBUM
export const getAllAlbums = async () => (
    await instance.get('/allAlbums')
);

export const getAlbumDetail = async (id) => (
    await instance.get(`/album/${id}`)
);

export const getAllSinglesinAlbum = async (id) => (
    await instance.get(`/album/getAllSinglesinAlbum/${id}`)
);
