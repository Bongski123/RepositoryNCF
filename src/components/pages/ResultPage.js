import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ResultDetailPage() {
  const { researchId } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:9000/result/${researchId}`);
        setResult(response.data); // Assuming the response contains a single object
        setError(null);
      } catch (error) {
        console.error("Error fetching result:", error);
        setError("Error fetching result. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [researchId]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!result) {
    return <p>No result found.</p>;
  }

  return (
    <div>
      <h2>{result.title}</h2>
      <p>Author: {result.author}</p>
      <p>Department: {result.department_name}</p>
      <p>Course: {result.course_name}</p>
      <p>Abstract: {result.abstract}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ResultDetailPage;
