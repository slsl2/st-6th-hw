import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch.jsx";

// TODO: useFetch 라는 커스텀훅을 사용해서 리팩터링 해보세요

const App = () => {
  const { title, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{title}</p>
    </div>
  );
};

export default App;
