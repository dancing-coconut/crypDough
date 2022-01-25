interface Props{
    titleName:string;
    date:string;
}
function BlogTitle(props:Props) {
    return (
      <div className="blogsTitle__div">
        <span className="blogsTitle__titleName">{props.titleName}</span>
        <span className="blogsTitle__date">{props.date}</span>
      </div>
    );
  }
  
  export default BlogTitle;

  