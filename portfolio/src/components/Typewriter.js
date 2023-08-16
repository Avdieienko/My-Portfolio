import { useEffect, useState } from "react"


export const Typewriter = (props) =>{
    const [currentText, setCurrentText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex < props.text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + props.text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, props.delay);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex,props.delay, props.text]);



    return(
        <p className={props.className}>{currentText}</p>
    )
}