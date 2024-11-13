import { useEffect } from "react"

function Area({id, url}) {
    function imgSetting () {
        const imgElements = document.querySelectorAll(`${id} img`);
        for (let index = 0; index < imgElements.length; index++) {
            const img = imgElements[index];
            img.style.opacity = "0.5";
            img.style.transition = "0.3s";
        };
    }
    function scaleAndOpacityOn(event) {
        event.target.style.transform = "scale(1.2)"
        event.target.style.opacity = "1"
    }
    function scaleAndOpacityOut(event) {
        event.target.style.transform = "scale(1)"
        event.target.style.opacity = "0.5"
    }
    
    useEffect(()=> {imgSetting()}, []);

    return (
        <>
            <div 
            id={id}
            onMouseOver={scaleAndOpacityOn}
            onMouseOut={scaleAndOpacityOut}
            >
                <img src={url} alt=""/>
            </div>
        </>
    )
}
export default Area;
