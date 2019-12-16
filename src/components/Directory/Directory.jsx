import React from "react";
import {connect} from "react-redux";
import {directorySectionsSelector} from "midleware/directory/selectors";
import {createStructuredSelector} from "reselect";
import {MenuItem} from "../MenuItem/MenuItem";
import "./styles.scss";

const mapStateToProps = createStructuredSelector({sections: directorySectionsSelector});

export const DirectoryComponent = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({id, ...sectionProps}) => (
      <MenuItem key={id} {...sectionProps}></MenuItem>
    ))}
  </div>
);

export const Directory = connect(mapStateToProps)(DirectoryComponent);
