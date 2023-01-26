import { useEffect, useState } from "react";
import axios from "axios";

export default function GetJson() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        const post = response.data.slice(0, 10);
        setData(post);
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
    <>
      <div className="h-screen card w-full bg-base-100 shadow-xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post, index) => (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
