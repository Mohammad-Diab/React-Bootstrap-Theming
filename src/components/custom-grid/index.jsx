import CustomGridItem from '../custom-grid-item';

function CustomGrid(props) {

    return (
        <>
            <div className="lead mb-2">The following contnet is a custom content.</div>
            <div className="custom-grid">
                {props.gridData.map((item, idx) =>
                    <CustomGridItem key={idx} icon={item.icon} text={item.text} />
                )}
            </div>
            <div className="text-muted small">End of custom contnet.</div>
        </>
    );
}

export default CustomGrid
