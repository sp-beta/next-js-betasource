import SigleBlogCard from "./sigle-blog-card";
function BlogPostCardList() {
  return (
    <div>
      <h5 className="blogcontent-title">Recent Posts</h5>
      <div className="cardlist">
        <SigleBlogCard />
        <SigleBlogCard />
        <SigleBlogCard />
      </div>
    </div>
  );
}

export default BlogPostCardList;
