import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {collectionsSelector} from "midleware/shop/selectors";

import {PreviewCollection} from "components";
import "./styles.scss";

const mapStateToProps = createStructuredSelector({collections: collectionsSelector});

export const CollectionsOverviewComponent = ({collections}) => (
  <div className="collections-overview">
    {collections.map(({id, ...otherProps}) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);

export const CollectionsOverview = connect(mapStateToProps)(CollectionsOverviewComponent);
