import { getPosts } from "./api/apiService";
import HomeScreen from "./screens/HomeScreen";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setData(res.data)

    })
  }, [])
  return (
    <HomeScreen posts={data} />
  );
}

export default App;
