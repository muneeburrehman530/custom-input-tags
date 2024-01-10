import React, { useState } from "react";

const InputTags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(tags, "where is the tags");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue, "input value");
  //   Enter tags
  const onKeyPressValue = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };
  // Remove tags
  const handleRemoveTags = (tag) => {
    const updatedTags = tags.filter((item) => item !== tag);
    setTags(updatedTags);
  };

  return (
    <>
      <section className="input-tags-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="input-wrap">
                {tags.map((tag, index) => (
                  <span className="tags" key={index}>
                    <span className="tag-wrap m-1">
                      <span className="text-white">{tag}</span>
                      <span
                        className="x"
                        onClick={() => handleRemoveTags(tag)}
                        class="close"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </span>{" "}
                    </span>
                  </span>
                ))}
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyUp={onKeyPressValue}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputTags;
