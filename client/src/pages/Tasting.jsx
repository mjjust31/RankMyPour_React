import WineDetails from "../components/WineDetails";
import RatingStars from "../components/RatingStars";
import ReviewForm from "../components/ReviewForm";
import React, { useState } from "react";

const mockWine = {
  name: "Cabernet Sauvignon",
  year: 2019,
  type: "Red",
  notes: "Dark cherry, plum, hints of oak.",
  image: "/wine-placeholder.png", // you can use any placeholder or skip for now
};

export default function Tasting() {
  const [ratings, setRatings] = useState({
    taste: 0,
    finish: 0,
    complexity: 0,
  });

  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    console.log({ ratings, review }); // in the future this goes to backend
  };

  return (
    <div>
      <h1>Single Wine Tasting</h1>
      <WineDetails wine={mockWine} />

      <RatingStars
        label="Taste"
        value={ratings.taste}
        onChange={(val) => setRatings({ ...ratings, taste: val })}
      />
      <RatingStars
        label="Finish"
        value={ratings.finish}
        onChange={(val) => setRatings({ ...ratings, finish: val })}
      />
      <RatingStars
        label="Complexity"
        value={ratings.complexity}
        onChange={(val) => setRatings({ ...ratings, complexity: val })}
      />

      <ReviewForm value={review} onChange={setReview} onSubmit={handleSubmit} />

      {submitted && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Thank you for your feedback!</h3>
          <p>Your Ratings: {JSON.stringify(ratings)}</p>
          <p>Your Review: {review}</p>
        </div>
      )}
    </div>
  );
}
