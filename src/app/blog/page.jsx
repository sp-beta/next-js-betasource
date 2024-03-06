import BlogMenu from "@/components/blog-menu";
import BlogPostCardList from "@/components/blogpost-card-list";
import CategoryList from "@/components/categoryList";
import PageHeading from "@/components/pageheading";
function Blog() {
  return (
    <div>
      <PageHeading text="Blogs" category="Home" categorypath="/" />
      <div className="container">
        <div
          className="section-head mb-3 mt-5 wow slideInLeft"
          data-wow-delay="0.1s"
        >
          <h3 className="text-center">
            Innovate & Elevate <span> BetaSource's Blog Universe </span>
          </h3>
        </div>
        <div className="lines pt-2 pb-4 wow slideInLeft" data-wow-delay="0.1s">
          <div className="line"></div>
        </div>
        <div
          className="betasource-smart-title wow slideInLeft"
          data-wow-delay="0.2s"
        >
          <p className="text-center">
            Discover the latest insights, expert tips, and industry trends in
            AI/ML, software development, DevOps integration, cloud solutions,
            and more with BetaSource's comprehensive blog. Stay ahead in the
            fast-paced world of technology and empower your business to thrive
            with our innovative services.
          </p>
        </div>
      </div>
      <CategoryList/>
      <div className="blogcontent">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogPostCardList />
            </div>
            <div className="col-lg-4 blog-menu-container">
              <BlogMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-section">
      Pagination component
      </div>
    </div>
  );
}

export default Blog;
