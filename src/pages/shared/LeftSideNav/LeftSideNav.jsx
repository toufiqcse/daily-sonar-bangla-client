import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  return (
    <div>
      <p className="text-xl mb-2">All News Category</p>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-blue-600">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
