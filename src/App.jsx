import { useState } from "react";

function App() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);

  const validateFields = () => {
    const newErrors = [];
    if (post.title === "" || post.content === "") {
      newErrors.push({ message: "Title and content are required" });
      setErrors(newErrors);
    }

    return newErrors;
  };

  const handlePostChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setPost({
      ...post,
      [name]: value,
    });
  };

  const storePosts = (e) => {
    e.preventDefault();
    setErrors([]);

    if (validateFields().length > 0) {
      return;
    }

    setPosts([...posts, post]);

    setPost({
      title: "",
      content: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="w-1/2 mx-auto bg-white border border-gray-300 p-6 rounded-2xl">
        {errors.length > 0 && (
          <div className="w-full mb-4 p-4 bg-red-400 text-white">
            {errors.map((error, index) => (
              <p key={index} className="">
                {error.message}
              </p>
            ))}
          </div>
        )}

        <div className="w-full mb-4">
          <input
            onChange={(e) => handlePostChange(e)}
            value={post.title}
            name="title"
            placeholder="Title"
            type="text"
            className="border border-gray-300 p-4 w-full rounded-2xl"
          />
        </div>

        <div className="w-full mb-4">
          <textarea
            onChange={(e) => handlePostChange(e)}
            value={post.content}
            name="content"
            placeholder="Content"
            className="border border-gray-300 p-4 w-full rounded-2xl"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            onClick={(e) => storePosts(e)}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Store
          </button>
        </div>
      </div>

      <div className="mt-5 w-1/2 mx-auto">
        <h2 className="ms-3 text-lg font-bold">Posts:</h2>
        {posts.map((p, index) => (
          <div
            key={index}
            className="mt-5 bg-white border border-gray-300 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-gray-600 text-xs">{p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
