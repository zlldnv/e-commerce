import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionFetchingSelector } from "midleware/shop/selectors";
import { Collection } from "pages";
import { WithSpinner } from "components";

const mapStateToProps = createStructuredSelector({
  isLoading: collectionFetchingSelector
});

export const CollectionContainer = connect(mapStateToProps)(props =>
  WithSpinner(Collection)(props)
);
