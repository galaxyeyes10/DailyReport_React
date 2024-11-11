function scaleAndOpacity(event) {
    const area = event.target;
    area.style.transform = `scale(${0.3})`;
    area.style.opacity = "1"
}

export default scaleAndOpacity;