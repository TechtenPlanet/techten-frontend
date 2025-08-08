import React, { useState, useEffect } from 'react';
import style from './MainBlogs.module.css';
import { FaRegCalendar, FaRegUser, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../notion/blogService';

const MainBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [activeTag, setActiveTag] = useState('All');
  const [error, setError] = useState(null); // Add error state

  // Fetch blogs from Notion
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true); // Ensure loading is set to true before fetch
        const blogs = await getBlogs();
        setBlogsData(blogs);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className={style.blogsSection}>
        <div className={style.loading}>
          <h2 className={style.sectionTitle}>Latest Articles & Insights</h2>
          <p>Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.blogsSection}>
        <div className={style.error}>
          <h2 className={style.sectionTitle}>Latest Articles & Insights</h2>
          <p className={style.errorMessage}>{error}</p>
        </div>
      </div>
    );
  }

  // Function to trim text to the specified maxLength
  const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
    } else {
      return text; // Return the original text if it's already maxLength or less
    }
  };

  // Get all unique tags from blogs
  const allTags = ['All', ...new Set(blogsData.flatMap(blog => blog.tags))];

  // Filter blogs by tag
  const filteredBlogs = activeTag === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.tags.includes(activeTag));

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  return (
    <div className={style.blogsSection}>
      <div className={style.blogsSectionWrapper}>
        <div className={style.blogFilters}>
          <h2 className={style.sectionTitle}>Latest Articles & Insights</h2>
          <div className={style.tagFilters}>
            {allTags.map(tag => (
              <button 
                key={tag} 
                className={`${style.tagButton} ${activeTag === tag ? style.activeTag : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={style.blogCards}>
          {filteredBlogs.slice(0, visibleBlogs).map(blog => (
            <div key={blog.id} className={style.blogCard}>
              <div 
                className={style.blogImg} 
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className={style.blogTxt}>
                <div className={style.aboutBlog}>
                  <p className={style.blogLocation}>
                    <FaRegUser className={style.blogIcon} />
                    {blog.author}
                  </p>
                  <p className={style.blogTime}>
                    <FaRegCalendar className={style.blogIcon} />
                    {blog.date}
                  </p>
                </div>
                <h4 className={style.blogHeading}>
                  {blog.title}
                </h4>
                <p className={style.blogBrief}>
                  {trimText(blog.excerpt, 120)}
                </p>
                <div className={style.blogTags}>
                  <FaTags className={style.tagIcon} />
                  {blog.tags.map((tag, index) => (
                    <span key={index} className={style.tag}>
                      {tag}{index < blog.tags.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <Link className={style.blogLink} to={`/blogs/${blog.id}`}> Read More </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleBlogs < filteredBlogs.length && (
          <div className={style.loadMoreContainer}>
            <button className={style.loadMoreButton} onClick={loadMoreBlogs}>
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBlogs;
