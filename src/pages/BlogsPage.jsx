import React from 'react'
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero'
import Footer from '../components/Footer/Footer'
import Banner1 from './../components/Banner1/Banner1'
import MainBlogs from '../components/MainBlogs/MainBlogs'

const BlogsPage = () => {
  return (
    <>
    <OtherPagesHero heading="Blogs" />
    <Banner1 />
    <MainBlogs />
    <Footer />
    </>
  )
}

export default BlogsPage