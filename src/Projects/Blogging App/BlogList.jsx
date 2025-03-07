import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs, deleteBlog }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          {blog.image && <img src={blog.image} alt="Blog Thumbnail" className="blog-thumbnail" />}
          <div className="blog-actions">
            <Link to={`/view/${blog.id}`}>Read More</Link>
            <Link to={`/edit/${blog.id}`}>Edit</Link>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;