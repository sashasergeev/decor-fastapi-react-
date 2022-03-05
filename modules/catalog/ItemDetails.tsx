import DecorItemInterface from "../../api/DecorItemInterface";
import { Item, Icon } from "../../styles/catalog";


const ItemDetails = ({ elem } : {elem: DecorItemInterface}) => {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <Item.Title>{elem.name}</Item.Title>
      <Item.DetailsBox>
        <div>
          <Item.Detail>
            <Icon.Height /> {elem.height}
          </Item.Detail>
          <Item.Detail>
            <Icon.Width /> {elem.width}
          </Item.Detail>
        </div>
        <Item.Detail>
          <Icon.Price /> {elem.price}
        </Item.Detail>
      </Item.DetailsBox>
    </div>
  );
};

export default ItemDetails;
