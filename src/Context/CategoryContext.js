import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

const useCategory = () => useContext(CategoryContext);

const CategoryContextProvider = ({ children }) => {
  const [filterCategory, setFilterCaregory] = useState("All");
  return (
    <CategoryContext.Provider value={{ filterCategory, setFilterCaregory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategory, CategoryContextProvider };
