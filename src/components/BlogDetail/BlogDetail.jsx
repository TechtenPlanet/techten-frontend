import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaRegCalendar, FaRegUser, FaTags, FaArrowLeft } from 'react-icons/fa';
import style from './BlogDetail.module.css';
import { getBlogs } from '../../notion/blogService';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogs = await getBlogs();
      const blog = blogs.find(blog => blog.id === id);
      setBlog(blog);

      if (blog) {
        const related = blogs
          .filter(relatedBlog => 
            relatedBlog.id !== blog.id && 
            relatedBlog.tags.some(tag => blog.tags.includes(tag))
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className={style.notFound}>
        <h2>Blog post not found</h2>
        <Link to="/blogs" className={style.backLink}>
          <FaArrowLeft /> Back to Blogs
        </Link>
      </div>
    );
  }

  // Function to convert newlines in content to paragraphs
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className={style.paragraph}>{paragraph}</p>
    ));
  };

  return (
    <div className={style.blogDetail}>
      <div className={style.blogDetailWrapper}>
        <Link to="/blogs" className={style.backLink}>
          <FaArrowLeft /> Back to Blogs
        </Link>
        
        <div className={style.blogHeader}>
          <h1 className={style.blogTitle}>{blog.title}</h1>
          
          <div className={style.blogMeta}>
            <div className={style.metaItem}>
              <FaRegUser className={style.metaIcon} />
              <span>{blog.author}</span>
            </div>
            <div className={style.metaItem}>
              <FaRegCalendar className={style.metaIcon} />
              <span>{blog.date}</span>
            </div>
          </div>
          
          <div className={style.blogTags}>
            <FaTags className={style.tagIcon} />
            {blog.tags.map((tag, index) => (
              <span key={index} className={style.tag}>
                {tag}{index < blog.tags.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
        
        <div 
          className={style.blogImage} 
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
        
        <div className={style.blogContent}>
          {formatContent(blog.content)}
        </div>
        
        <div className={style.blogFooter}>
          <h3>Share this article</h3>
          <div className={style.shareButtons}>
            {/* Placeholder for social sharing buttons */}
            <button className={`${style.shareButton} ${style.facebook}`}>Facebook</button>
            <button className={`${style.shareButton} ${style.twitter}`}>Twitter</button>
            <button className={`${style.shareButton} ${style.linkedin}`}>LinkedIn</button>
          </div>
        </div>
        
        <div className={style.relatedPosts}>
          <h3>Related Articles</h3>
          <div className={style.relatedPostsGrid}>
            {relatedBlogs.map(relatedBlog => (
              <Link 
                key={relatedBlog.id} 
                to={`/blogs/${relatedBlog.id}`} 
                className={style.relatedPost}
              >
                <div 
                  className={style.relatedPostImage} 
                  style={{ backgroundImage: `url(${relatedBlog.image})` }}
                ></div>
                <h4 className={style.relatedPostTitle}>{relatedBlog.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
