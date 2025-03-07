import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!blog) return <p>Blog not found!</p>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div className="blog-content">
        <p>{blog.description}</p>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
        {blog.image && (
          <img
            src={blog.image}
            alt="Blog"
            className="blog-image"
            onClick={openModal}
          />
        )}
      </div>

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={blog.image} alt="Blog Full Image" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default BlogPost;