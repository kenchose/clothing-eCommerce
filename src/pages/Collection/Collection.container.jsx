import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoading } from "../../redux/selectors/shop.selectors";

import WithSpinner from "../../components/WithSpinner/WithSpinner.component";
import Collection from "./Collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoading(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
