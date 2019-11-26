import React, {useState} from "react";

import {MenuItem} from "../MenuItem/MenuItem";
import "./styles.scss";
import {sections as sectionsData} from "../../mock/directory.data";
import {from} from "rxjs";

export const Directory = () => {
  const [sections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({id, ...sectionProps}) => (
        <MenuItem key={id} {...sectionProps}></MenuItem>
      ))}
    </div>
  );
};
