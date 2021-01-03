import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

// This is a hook to use the storage from firebase.
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  // We are only watching for changes on the file (check line 31)
  useEffect(() => {
    // First define the reference (DOM reference) to the attribute name of the file
    const storageRef = projectStorage.ref(file.name);

    // This will take a file and put it in the reference
    // This put method is asyncronous so we can fire functions when certain events happen:
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // Deal with errors
        setError(err);
      },
      async () => {
        // Deal with sucess upload
        const url = await storageRef.getDownloadURL();
        setURL(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
