import { useEffect, useState } from "react";
import axios from "axios";

export default function GetJsonDeleteKey() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        const deleteBodyKey = response.data.slice(0, 10);
        deleteBodyKey.forEach((el) => {
          delete el.body;
        });
        setData(deleteBodyKey);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((post) => post.id !== id));
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post, index) => (
          <tr key={index}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
