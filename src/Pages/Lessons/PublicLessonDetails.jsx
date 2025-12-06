import React, { useState } from "react";
import { Link } from "react-router";

const LessonDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [comment, setComment] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  // Check if user is premium and logged in (replace with your auth logic)
  const isPremiumUser = false;
  const isLoggedIn = true;

  // Dummy lesson data - replace with API call
  const lesson = {
    id: 1,
    title: "Embracing Failure as Growth",
    description: `When I was 28, I launched my first startup with everything I had saved. Within 18 months, it had completely failed. I lost my savings, my confidence, and felt like I had wasted years of my life.

But looking back now, that failure taught me more than any success ever could. It taught me resilience, the importance of market research, and most importantly, that failure isn't the end—it's just a redirection.

The key lessons I learned:
1. Failure is feedback, not a final verdict
2. Every setback contains seeds of a comeback
3. Your worth isn't tied to your achievements
4. The courage to try again is more valuable than initial success

Today, I run a successful company, but I credit that failure for teaching me everything I needed to know. Don't fear failure—embrace it as your greatest teacher.`,
    category: "Personal Growth",
    emotionalTone: "Motivational",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    createdDate: "2025-01-15",
    updatedDate: "2025-01-16",
    visibility: "Public",
    accessLevel: "Free",
    creatorName: "Sarah Johnson",
    creatorPhoto: "https://i.pravatar.cc/150?img=1",
    creatorTotalLessons: 24,
    likesCount: 1234,
    favoritesCount: 342,
    viewsCount: 8934,
  };

  const comments = [
    {
      id: 1,
      userName: "John Doe",
      userPhoto: "https://i.pravatar.cc/150?img=12",
      comment:
        "This really resonated with me. Thank you for sharing your experience!",
      date: "2025-01-17",
    },
    {
      id: 2,
      userName: "Emily Smith",
      userPhoto: "https://i.pravatar.cc/150?img=13",
      comment:
        "I needed to read this today. Going through a similar situation.",
      date: "2025-01-16",
    },
  ];

  const similarLessons = [
    {
      id: 2,
      title: "The Power of Saying No",
      category: "Mindset",
      emotionalTone: "Realization",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300",
      creatorName: "Michael Chen",
    },
    {
      id: 3,
      title: "Career Pivot at 35",
      category: "Career",
      emotionalTone: "Motivational",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300",
      creatorName: "Emily Rodriguez",
    },
    {
      id: 4,
      title: "Healing Through Gratitude",
      category: "Personal Growth",
      emotionalTone: "Gratitude",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
      creatorName: "James Williams",
    },
  ];

  const reportReasons = [
    "Inappropriate Content",
    "Hate Speech or Harassment",
    "Misleading or False Information",
    "Spam or Promotional Content",
    "Sensitive or Disturbing Content",
    "Other",
  ];

  // If premium lesson and user is not premium, show upgrade banner
  if (lesson.accessLevel === "Premium" && !isPremiumUser) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-lg border-4 border-black p-8 text-center"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-black mb-4">Premium Content</h1>
            <p className="text-xl text-gray-600 mb-8">
              This lesson is only available to Premium members
            </p>
            <div className="blur-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
              <p className="text-gray-600">
                {lesson.description.substring(0, 200)}...
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-block px-8 py-4 text-lg font-bold bg-yellow-400 text-black rounded-lg border-3 border-black transition-all hover:translate-x-1 hover:translate-y-1"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    if (!isLoggedIn) {
      alert("Please log in to like");
      return;
    }
    setIsLiked(!isLiked);
  };

  const handleFavorite = () => {
    if (!isLoggedIn) {
      alert("Please log in to save");
      return;
    }
    setIsFavorited(!isFavorited);
  };

  const handleReport = () => {
    if (!reportReason) {
      alert("Please select a reason");
      return;
    }
    console.log("Report submitted:", reportReason);
    setShowReportModal(false);
    setReportReason("");
    alert("Report submitted successfully");
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please log in to comment");
      return;
    }
    console.log("Comment:", comment);
    setComment("");
  };

  const readingTime = Math.ceil(lesson.description.split(" ").length / 200);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/public-lessons"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 font-semibold"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Public Lessons
        </Link>

        {/* Main Content Card */}
        <div
          className="bg-white rounded-lg border-4 border-black overflow-hidden mb-6"
          style={{ boxShadow: "8px 8px 0px 0px #000" }}
        >
          {/* Featured Image */}
          {lesson.image && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-black mb-4">{lesson.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold rounded-full border-2 border-purple-300">
                {lesson.category}
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 text-sm font-bold rounded-full border-2 border-pink-300">
                {lesson.emotionalTone}
              </span>
              <span
                className={`px-4 py-2 text-sm font-bold rounded-full border-2 ${
                  lesson.accessLevel === "Premium"
                    ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                    : "bg-green-100 text-green-700 border-green-300"
                }`}
              >
                {lesson.accessLevel}
              </span>
            </div>

            {/* Metadata */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 border-2 border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 font-semibold">Created</p>
                  <p className="font-bold">
                    {new Date(lesson.createdDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-semibold">Updated</p>
                  <p className="font-bold">
                    {new Date(lesson.updatedDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-semibold">Visibility</p>
                  <p className="font-bold">{lesson.visibility}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-semibold">Reading Time</p>
                  <p className="font-bold">{readingTime} min read</p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed whitespace-pre-line text-gray-800">
                {lesson.description}
              </p>
            </div>

            {/* Author Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={lesson.creatorPhoto}
                  alt={lesson.creatorName}
                  className="w-16 h-16 rounded-full border-3 border-purple-400"
                />
                <div>
                  <h3 className="text-xl font-bold">{lesson.creatorName}</h3>
                  <p className="text-gray-600">
                    {lesson.creatorTotalLessons} lessons created
                  </p>
                </div>
              </div>
              <Link
                to={`/profile/${lesson.creatorName}`}
                className="inline-block px-5 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
              >
                View all lessons by this author
              </Link>
            </div>

            {/* Stats & Engagement */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-6 text-lg">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">❤️</span>
                    <span className="font-bold">{lesson.likesCount}</span>
                    <span className="text-gray-600">Likes</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">🔖</span>
                    <span className="font-bold">{lesson.favoritesCount}</span>
                    <span className="text-gray-600">Favorites</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">👀</span>
                    <span className="font-bold">{lesson.viewsCount}</span>
                    <span className="text-gray-600">Views</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleFavorite}
                  className={`px-5 py-3 font-bold rounded-lg border-2 border-black transition-all ${
                    isFavorited
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  {isFavorited ? "🔖 Saved" : "🔖 Save to Favorites"}
                </button>

                <button
                  onClick={handleLike}
                  className={`px-5 py-3 font-bold rounded-lg border-2 border-black transition-all ${
                    isLiked
                      ? "bg-pink-400 text-white"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  {isLiked ? "❤️ Liked" : "❤️ Like"}
                </button>

                <button
                  onClick={() => setShowReportModal(true)}
                  className="px-5 py-3 bg-white text-black font-bold rounded-lg border-2 border-black hover:bg-gray-50 transition-all"
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  🚩 Report
                </button>

                <button
                  className="px-5 py-3 bg-blue-500 text-white font-bold rounded-lg border-2 border-black hover:bg-blue-600 transition-all"
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  📤 Share
                </button>
              </div>
            </div>

            {/* Comment Section */}
            <div className="border-t-4 border-black pt-6">
              <h3 className="text-2xl font-black mb-4">
                Comments ({comments.length})
              </h3>

              {/* Add Comment */}
              <form onSubmit={handleComment} className="mb-6">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                  rows="3"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={c.userPhoto}
                        alt={c.userName}
                        className="w-10 h-10 rounded-full border-2 border-gray-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-gray-900">
                            {c.userName}
                          </p>
                          <span className="text-xs text-gray-500">
                            {new Date(c.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-700">{c.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Lessons */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-6">Similar Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarLessons.map((similar) => (
              <Link
                key={similar.id}
                to={`/lesson/${similar.id}`}
                className="bg-white rounded-lg border-3 border-black overflow-hidden transition-all hover:-translate-y-1"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <img
                  src={similar.image}
                  alt={similar.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{similar.title}</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">
                      {similar.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg border-4 border-black p-6 max-w-md w-full"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            <h3 className="text-2xl font-black mb-4">Report Lesson</h3>
            <p className="text-gray-600 mb-4">
              Please select a reason for reporting this lesson:
            </p>
            <select
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a reason</option>
              {reportReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <div className="flex gap-3">
              <button
                onClick={handleReport}
                className="flex-1 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
              >
                Submit Report
              </button>
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 py-3 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDetails;
