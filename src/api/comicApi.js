import { get } from '../config/axiosConfig';

// 漫画首页
export const getComicIndex = () => get('/api/comic/', {});

// 漫画详情
// export const getComicDetail = (comic_id) => get('/api/movie/subject/26004132?apikey=0b2bdeda43b5688921839c8ecb20399b', comic_id);
export const getComicDetail = comic_id => get('/api/theme/index/', comic_id);
