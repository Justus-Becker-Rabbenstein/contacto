import {useRef} from "react";
import {useEffect} from "react";

// return for new img
let cloudImgUrl;

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dkbaclwko",
        uploadPreset: "azsog7ys",
      },
      function (error, result) {
        if (result.event == "success") {
          cloudImgUrl = result;
        }
      }
    );
  }, []);
  // JSX / HTML Elements
  return (
    <button type="button" onClick={() => widgetRef.current.open()}>
      Choose image
    </button>
  );
};

export default UploadWidget;
export {cloudImgUrl};
