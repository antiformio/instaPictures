import React, { useState } from "react";

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
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
