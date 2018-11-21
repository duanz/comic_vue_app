import { get } from '../config/axiosConfig';

// 小说首页
export const getBookIndex = () => get('/api/book/', {});

// 小说详情
export const getBookDetail = book_id => get('/api/theme/index/', book_id);
