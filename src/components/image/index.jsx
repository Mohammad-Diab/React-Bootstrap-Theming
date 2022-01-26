import React from 'react'

const Image = React.memo(props =>
    (<img src={props.src} alt={props.atl} className={props.className} style={props.style} />));

export default Image;