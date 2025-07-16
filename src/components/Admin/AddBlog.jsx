import React, { useState } from 'react';
import { addBlog } from '../../firebase/blogService';

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    content: '',
    author: '',
    date: new Date().toLocaleDateString(),
    tags: []
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleTagsChange = (e) => {
    setBlog({ ...blog, tags: e.target.value.split(',') });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlog(blog);
    setBlog({
      title: '',
      image: '',
      content: '',
      author: '',
      date: new Date().toLocaleDateString(),
      tags: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog Post</h2>
      <input name="title" value={blog.title} onChange={handleChange} placeholder="Title" required />
      <input name="image" value={blog.image} onChange={handleChange} placeholder="Image URL" />
      <textarea name="content" value={blog.content} onChange={handleChange} placeholder="Content" />
      <input name="author" value={blog.author} onChange={handleChange} placeholder="Author" />
      <input name="tags" value={blog.tags.join(',')} onChange={handleTagsChange} placeholder="Tags (comma separated)" />
      <button type="submit">Add Blog Post</button>
    </form>
  );
};

export default AddBlog;
