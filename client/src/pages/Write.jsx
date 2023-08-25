import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file" className="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            {" "}
            <input
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technologie"
              id="technologie"
            />
            <label htmlFor="technologie">Technologie</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="photography"
              id="photography"
            />
            <label htmlFor="photography">Photography</label>
          </div>

          <div className="cat">
            {" "}
            <input
              type="radio"
              name="cat"
              value="science"
              id="science"
            />
            <label htmlFor="science">Science</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
