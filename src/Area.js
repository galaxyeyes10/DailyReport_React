import { useEffect, useRef } from 'react';

function Area({ url }) {
    const areaRef = useRef(null);

    function backgroundImg(url) {
        if (areaRef.current) {
            areaRef.current.style.backgroundImage = `url(${url})`;
        }
    }

    useEffect(() => {
        if (url) {
            backgroundImg(url); 
        }
    }, [url]);

    return (
        <div
            ref={areaRef}
            className="area"
            onMouseOver={(event) => { scale(event); }}
            onMouseOut={(event) => { scaleOut(event); }}
        >
        </div>
    );
}

function scale(event) {
    event.target.style.transform = `scale(1.3)`;
}

function scaleOut(event) {
    event.target.style.transform = `scale(1)`;
}

export default Area;
