function CategoryList() {
  return (
    <div className="container blog-section">
      <div className="row">
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem software ">Software</div>
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem ai-ml">AI/ML</div>
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem devops">DevOps</div>
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem cloud">Cloud</div>
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem blockchain">Blockchain</div>
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <div className="categoryitem cyber">Cyber Security</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
