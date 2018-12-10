import ajax from '../api';

export async function getSongList(params, opt) {
    return ajax.get('http://127.0.0.1:3333/search', params, opt)
}

export async function getSongCommentList(params, opt) {
    return ajax.get('http://127.0.0.1:3333/comment/music', params, opt)
}