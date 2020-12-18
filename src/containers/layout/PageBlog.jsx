import { useEffect } from "react";
import NavbarBlogsComponent from "../../components/blogs/NavbarBlogsComponent";

function PageBlog({ children, match }) {
  useEffect(() => {
    handleTitle();
  });

  const handleTitle = () => {
    let prefix = match.params.prefix.replace(/-/g, " ");
    prefix = prefix.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    document.title = prefix;
  };
  return (
    <>
      <NavbarBlogsComponent />
      {children}
    </>
  );
}
export default PageBlog;
