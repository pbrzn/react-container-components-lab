import React from "react";

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review) => (
      <div className="review">
        <img src={review.multimedia.src} alt={review.display_title} />
        <h1>{review.display_title}</h1>
        <p>{review.summary_short}</p>
      </div>
    ))}
  </div>
)

export default MovieReviews
