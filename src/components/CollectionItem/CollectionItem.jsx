import React from "react";
import {CustomButton} from "components";
import {connect} from "react-redux";
import {addItem} from "midleware/cart/actions";
import "./styles.scss";

const mapDispatchToProps = dispatch => ({addItem: item => dispatch(addItem(item))});

export const CollectionItemComponent = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton className="custom-button" inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export const CollectionItem = connect(null, mapDispatchToProps)(CollectionItemComponent);
