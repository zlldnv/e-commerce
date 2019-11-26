import React, {useState} from "react";
import {SHOP_DATA} from "../../mock/directory.data";
import {PreviewCollection} from "../../components/PreviewCollection/PreviewCollection";

export const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({id, ...otherProps}) => (
        <PreviewCollection key={id} {...otherProps } />
      ))}
    </div>
  );
};
