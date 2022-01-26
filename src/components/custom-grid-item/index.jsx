
import Icon from "../icon";

function CustomGridItem(props) {

  return (
    <div className="custom-grid-item">
      <Icon className="custom-grid-item-icon" width="128" height="128" style={{ maxWidth: '100%' }} iconName={props.icon}></Icon>
      <p className="custom-grid-item-text">{props.text}</p>
    </div>
  );
}

export default CustomGridItem;
