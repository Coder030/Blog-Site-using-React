import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const [button, setButton] = useState(false)

  const handleSubmit = (e) => {
    setButton(true)
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      setTimeout(() => {
        history.push('/');
        setButton(false)
      }, 200);
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          placeholder="Drag to increase size"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        {!button && <button>Add Blog</button>}
        {button && <button>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;