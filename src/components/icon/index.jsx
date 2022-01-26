
function Icon(props) {

  const style = {
    ...props.style,
    fill: props.fill || '',
    color: props.toneTow || '',
    stroke: props.stroke || '',
    width: props.width || 'auto',
    height: props.height || 'auto'
  }
  return (
    <svg style={style} className={`svg-icon icon-${props.iconName}`}>
      <use href={`#${props.iconName}-icon`} />
    </svg>
  );
}

export default Icon;
