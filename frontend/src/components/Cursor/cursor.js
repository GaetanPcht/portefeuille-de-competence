import * as React from "react"
import "./cursor.css"

const Cursor = () => {
    const mainCursor = React.useRef(null);

    const positionRef = React.useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    React.useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;

            const mouseX = clientX;
            const mouseY = clientY;
            positionRef.current.mouseX = mouseX / 2;
            positionRef.current.mouseY = mouseY / 2;
            mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2 }px, 0`;
        })

        return () => {};
    }, []);

    React.useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
                key
            } = positionRef.current;

            if(!destinationY | !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
            }

            if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.destinationX += distanceX;
                positionRef.current.destinationY += distanceY;
            }
        }
    })

    return (
        <>
            <div className="cursor" ref={mainCursor}></div>
        </>
    )
}

export default Cursor