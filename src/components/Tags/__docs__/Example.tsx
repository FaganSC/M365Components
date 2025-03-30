import React, { FC } from "react";
import Tags, { ITagsProps } from "../Tags";

const Example: FC<ITagsProps> = ({
  Tags: tagsArray = [
    { Title: "Tag 1", Value: 1 },
    { Title: "Tag 2", Value: 2 },
    { Title: "Tag 3", Value: 3 },
    { Title: "Tag 4", Value: 4 },
    { Title: "Tag 5", Value: 5 },
    { Title: "Tag 6", Value: 6 },
  ],
  onClick = () => {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Tags
        Tags={tagsArray} // Pass the tags array
        onClick={onClick} // Function to handle click on a tag
      />
    </div>
  );
};

export default Example;
