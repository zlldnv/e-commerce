import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionFetchingSelector } from "midleware/shop/selectors";
import { WithSpinner, CollectionsOverview } from "components";

const mapStateToProps = createStructuredSelector({
  isLoading: collectionFetchingSelector
});

export const CollectionOverviewContainer = connect(mapStateToProps)(props =>
  WithSpinner(CollectionsOverview)(props)
);
