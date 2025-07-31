import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../notion/blogService';
import style from './AllBlogs.module.css';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
    };
    fetchBlogs();
  }, []);

  return (
    <div className={style.allBlogs}>
      <div className={style.blogGrid}>
        {blogs.map(blog => (
          <Link key={blog.id} to={`/blogs/${blog.id}`} className={style.blogCard}>
            <div 
              className={style.blogImage} 
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className={style.blogContent}>
              <h3 className={style.blogTitle}>{blog.title}</h3>
              <p className={style.blogExcerpt}>{blog.content.substring(0, 100)}...</p>
              <span className={style.readMore}>Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
