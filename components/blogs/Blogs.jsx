import React from "react";
import styles from "./../../styles/home/Blogs.module.css";
import Blog from "./Blog";

const infoBlogs = [
    {
        image: "/pictures/home/blog-image-1.png",
        title: "Maripocean: The experience",
        category: "SERVICES",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum mollis eleifend. Duis lobortis lorem.",
    },
    {
        image: "/pictures/home/blog-image-2.png",
        title: "Maripocean: The experience",
        category: "SERVICES",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum mollis eleifend. Duis lobortis lorem.",
    },
    {
        image: "/pictures/home/blog-image-3.png",
        title: "Maripocean: The experience",
        category: "SERVICES",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum mollis eleifend. Duis lobortis lorem.",
    },
];

const Blogs = () => {
    return (
        <div className={styles.blogsContainer}>
            <h2 className={styles.titleBlogs}>Blogs</h2>
            <div className={styles.divBlogs}>
                <div className={styles.trendingBlogContainer}>
                    <div className={styles.trendingIcon}>POPULAR</div>
                    <div className={styles.trendingBlogContent}>
                        <h3 className={styles.trendingBlogTitle}>
                            THE BEST OF THE BEST EXPERIENCES TO DO IN PUERTO
                            COLOMBIA
                        </h3>
                        <p className={styles.trendingBlogCategory}>SERVICES</p>
                    </div>
                </div>
                <div className={styles.blogList}>
                    {infoBlogs.map((blog) => (
                        <Blog key={blog.title} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
