import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BlogForm({ onSubmit, blogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (id) {
      const blog = blogs.find(blog => blog.id === Number(id));
      if (blog) {
        setTitle(blog.title);
        setDescription(blog.description);
        setContent(blog.content);
        setImage(blog.image);
      }
    }
  }, [id, blogs]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, description, content, image };
    onSubmit({ ...blogData, id: id || Date.now() });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Blog Preview" className="blog-thumbnail" />}
      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
}

export default BlogForm;