import { createContext, useState, useEffect, useContext } from "react";

import { Loading } from "../components/Loading";

const BlogListContext = createContext();

export function BlogListProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1`, { signal })
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("cancelled!");
        } else {
          console.log(err);
        }
      })
      .finally(() => setLoading(false));
    return () => {
      controller.abort();
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <BlogListContext.Provider value={{ data, detail, setDetail }}>
      {children}
    </BlogListContext.Provider>
  );
}

export function useData() {
  const context = useContext(BlogListContext);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export { BlogListContext, useContext };
