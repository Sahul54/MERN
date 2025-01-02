import React, { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';

const Blog = () => {
  // consume
  const { post, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        post.map((post, index) => (
          <div key={index}>
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags &&
                post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{`#${tag}`}</span>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
