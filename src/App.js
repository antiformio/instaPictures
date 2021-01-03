import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}

export default App;
