import axios from "axios";
import { useState } from "react";

function TextInsert() {
  const [inputText, setInputTxt] = useState("");

  const onText = (e) => {
    setInputTxt(e.target.value);
  };

  const onSubmit = () => {
    const formdata = new FormData();
    formdata.append("text", inputText);
    axios.post("http://localhost:8080/v1", formdata, {
      headers: { "Content-Type": "application/json" },
    });
  };

  //   const onSubmit = () => {
  //     const formdata = new FormData();
  //     formdata.append("inputText", inputText);
  //     axios
  //       .post("http://localhost:8080/v1", formdata)
  //       .then((Response) => {
  //         console.log(Response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div>
      <label htmlFor="textInputTest">Write:</label>
      <input
        id="textInputTest"
        type="text"
        placeholder="it's Text insert Test. Please write."
        className="ml-2 border 3px"
        value={inputText}
        onChange={onText}
      />
      <button className="ml-3 border 3px" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
}
export default TextInsert;
