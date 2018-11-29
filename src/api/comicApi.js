import { get } from '../config/axiosConfig';

// 漫画首页
export const getComicIndex = () => get('/api/comic/index/', {});

// 漫画详情
export const getComicDetail = (comic_id) => get('/api/comic/' + comic_id);
export const getComicChapterDetail = (chapter_id) => get('/api/comic/chapter/' + chapter_id);
