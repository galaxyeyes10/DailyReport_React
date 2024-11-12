// import { useEffect } from "react"

function Area({id, url}) {
    // useEffect(()=> {
    //     const imgElement = document.querySelectorAll(`${id} img`);
    //         imgElement.style.opacity = "0.5";
    //         imgElement.style.transition = "0.3s";
    //     }, [id]);
    
    function scaleAndOpacityOn(event) {
        event.target.style.scale = "1.2"
        event.target.style.opacity = "1"
    }
    function scaleAndOpacityOut(event) {
        event.target.style.scale = "1"
        event.target.style.opacity = "0.5"
    }
    
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
