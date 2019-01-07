import { get } from '../config/axiosConfig';

// 漫画首页
export const getComicIndex = () => get('/api/comic/index/', {});
// 获取浏览历史
export const getHistory = () => get('/api/history/', {});
// 漫画列表
export const getComicList = (searchForms) => get('/api/comic/', searchForms);

// 漫画详情
export const getComicDetail = (comic_id) => get('/api/comic/' + comic_id);
export const getComicChapterDetail = (chapter_id) => get('/api/comic/chapter/' + chapter_id);
