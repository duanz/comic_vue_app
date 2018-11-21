export const clickToContent = (self, type, content_id) => {
    if (type === "comic") {
        self.$router.push({
            name: "comicDetail",
            params: { comic_id: content_id }
        });
    } else if (type === "book") {
        self.$router.push({
            name: "bookDetail",
            params: { book_id: content_id }
        });
    }
}