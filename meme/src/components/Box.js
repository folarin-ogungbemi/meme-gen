import React from 'react'


const Box = (props) => {

    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }

  return (
    <div>
        <div 
            style={styles}
            className="box"
            // onClick={()=>props.toggle(props.id)
            onClick={props.toggle}
        ></div>
    </div>
  )
}

export default Box