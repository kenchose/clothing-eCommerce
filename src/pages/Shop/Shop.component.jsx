import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/actions/shop.actions";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";
import CollectionContainer from "../Collection/Collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:category`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchCollectionsStartAsync })(ShopPage);
