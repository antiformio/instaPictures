import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const typesAllowed = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    // We just want the first file, in case the user selects more than one...
    let selected = e.target.files[0];
    if (selected && typesAllowed.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file PNG or JPEG");
    }
  };

  return (
    <form className="form-upload-image">
      <label className="icon-upload" htmlFor="upload-photo">
        <FontAwesomeIcon icon="camera-retro" size="3x" />
      </label>

      <input
        id="upload-photo"
        className="hidden"
        type="file"
        onChange={changeHandler}
      />
      <div className="output">
        {/* The right side of the expression is only showd if the first side is true */}

        {/* If theres any error , show the div classname error,
        If theres a file , show its name 
        If theres a file, show the file upload progress*/}

        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
