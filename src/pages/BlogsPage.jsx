import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import MainBlogs from '../components/MainBlogs/MainBlogs';

const BlogsPage = () => {
  return (
    <>
      <OtherPagesHero heading="Blogs" />
      <MainBlogs />
    </>
  );
};

export default BlogsPage;
