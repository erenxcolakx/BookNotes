import React from 'react';
import BookDetails from '../components/BookDetails';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReviewPage: React.FC = () => {
    const navigate = useNavigate();

  const handleSubmit = async (review: string, rating: number) => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/api/submit`, { title: 'Book Title', author: 'Author Name', coverId: '12345', review, rating });
      navigate('/books');
    } catch (error) {
      console.error('Failed to submit review');
    }
  };

  return (
    <div>
      <BookDetails
        title="Book Title"
        author="Author Name"
        coverId="12345"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ReviewPage;
