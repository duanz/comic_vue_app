import { get } from '../config/axiosConfig';

// 小说首页
export const getBookIndex = () => get('/api/book/index/', {});

// 小说列表
export const getBookList = (searchForms) => get('/api/book/', searchForms);

// 小说详情
export const getBookDetail = (book_id) => get('/api/book/' + book_id);
export const getBookChapterDetail = (chapter_id) => get('/api/book/chapter/' + chapter_id);
