import React from "react"


const Image = ({src,alt,style}) => {
    const styles = {width: "45px", height:"45px", borderRadius: "50%"}
  return (
    <img src={src} alt={alt} style={styles} ></img>
  )
}

export default Image