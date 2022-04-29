import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { axiosInstace } from "../../network/axiosConfig";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  let params = useParams();
  // console.log("params", params.id);

  try {
    useEffect(() => {
      axiosInstace
        .get("products", { params: { type: params.id } })
        .then((response) => {
          setProducts(response.data.data.data);
        });
    }, [params.id]);
    console.log("state", products);
  } catch (error) {
    console.log(error);
  }

  return (
    // <div>123</div>
    <div className="collection-page">
      <h2 className="title">{products.name}</h2>
      <div className="items">
        {products.map((product) => (
          <CollectionItem key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionPage);
