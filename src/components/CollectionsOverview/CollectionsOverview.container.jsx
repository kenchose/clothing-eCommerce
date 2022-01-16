import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/selectors/shop.selectors";

import WithSpinner from "../WithSpinner/WithSpinner.component";
import CollectionsOverview from "./CollectionsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
