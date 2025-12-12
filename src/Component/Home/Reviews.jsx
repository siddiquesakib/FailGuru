import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      stars: 5,
      text: "Life-changing lessons! Completely transformed my mindset.",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Mike Chen",
      stars: 4,
      text: "Practical advice that actually works in real life.",
      photo: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emma Davis",
      stars: 5,
      text: "The best place to learn from others' experiences!",
      photo: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Raj Patel",
      stars: 5,
      text: "Premium content is worth every penny. Highly recommend!",
      photo: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">What People Are Saying</h2>
          <p className="text-xl text-gray-600">Join 10K+ happy learners</p>
        </div>

        {/* Reviews Grid - 2 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-8 rounded-xl hover:-translate-y-2 transition-all duration-300"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              {/* Left Photo + Name + Stars */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-3 border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xl text-gray-900 mb-2 truncate">
                    {review.name}
                  </h4>
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < review.stars ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text - 2 lines */}
              <p className="text-gray-700 leading-relaxed text-lg line-clamp-2">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
