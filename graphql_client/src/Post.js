import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    allPosts {
      id
      title
      content
    }
  }
`;



function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.allPosts.map(({ id, title, content }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
