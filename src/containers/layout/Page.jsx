import { useEffect } from "react";

export default function Page({ children, title }) {
  useEffect(() => {
    document.title = title ? title + " - Refactory" : "Refactory";
  }, [title]);
  return children;
}
