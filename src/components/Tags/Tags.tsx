import * as React from "react";
import { DismissRegular as ActionButtonIcon } from "@fluentui/react-icons";
import "./Tags.css";

interface ITags {
  Title: string;
  Value: string | number;
}

export type ITagsProps = {
  Tags: ITags | ITags[];
  onClick: (value: string | number) => void;
};

const Tags: React.FC<ITagsProps> = ({ Tags, onClick }) => {
  if (!Array.isArray(Tags)) {
    Tags = [Tags];
  }
  return (
    <div data-testid="tags" className="tagsContainer">
      {Tags.map((tag, index) => (
        <div key={index} className="tag">
          <div className="tagLabel">{tag.Title}</div>
          <ActionButtonIcon onClick={() => onClick(tag.Value)} />
        </div>
      ))}
    </div>
  );
};

export default Tags;
