import React, {useState} from "react";
import {MenuItem} from "../MenuItem/MenuItem";
import "./styles.scss";
import {sections as sectionsData} from "../../pages/mock/directory.data";

export const Directory = () => {
  const [sections] = useState(sectionsData);
  return (
    <div className="directory-menu">
      {sections.map(({title, imageUrl, id}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl}></MenuItem>
      ))}
    </div>
  );
};
