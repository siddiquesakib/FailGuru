import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Feature = () => {
  //fetch all lessons
  const { data: lessons = [] } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const params = new URLSearchParams();

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/lessons?${params.toString()}`
      );
      return result.data;
    },
  });

  const featuredLessons = lessons.filter(
    (lesson) => lesson.isFeatured === true
  );
  console.log(featuredLessons);

  return (
    <div>
      <h1>Feature {featuredLessons.length} </h1>
    </div>
  );
};

export default Feature;
