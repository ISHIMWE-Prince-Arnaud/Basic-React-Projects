import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';

function Blog() {
  console.log("Blog component loaded"); // Confirm Blog is loaded

  const [blogs, setBlogs] = useState([
    // Initial test blog (you can remove this later)
    { id: 1, title: 'Test Blog', description: 'This is a test blog.', content: 'Test blog content.', image: '' }
  ]);

  // Add a new blog post
  const addBlog = (blogData) => {
    setBlogs([...blogs, { ...blogData, id: Date.now() }]);
  };

  // Update an existing blog post
  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  };

  // Delete a blog post
  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Blog List Route */}
          <Route path="/" element={<BlogList blogs={blogs} deleteBlog={deleteBlog} />} />
          {/* Blog Creation Route */}
          <Route path="/create" element={<BlogForm onSubmit={addBlog} />} />
          {/* Blog Editing Route */}
          <Route path="/edit/:id" element={<BlogForm onSubmit={updateBlog} blogs={blogs} />} />
          {/* Blog Detail Route */}
          <Route path="/view/:id" element={<BlogPost blogs={blogs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Blog;