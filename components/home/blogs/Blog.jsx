import React from "react";
import PropTypes from "prop-types";
import styles from "./../../../styles/home/Blogs.module.css";

const Blog = (blog) => {
  return (
    <div className={styles.blogContainer}>
      <img
        className={styles.blogImage}
        src={blog.blog.image}
        alt={blog.blog.title}
      />
      <div className={styles.blogContent}>
        <h4 className={styles.blogTitle}>{blog.blog.title}</h4>
        <p className={styles.blogCategory}>{blog.blog.category}</p>
        <p className={styles.blogDescription}>{blog.blog.description}</p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Blog;
