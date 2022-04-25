import React, { useState } from 'react'
import { useForm } from 'react-hook-form'



function Form(props) {
    const {label, id, handleChange, ...inputProps    } = props;
 
    return(
       <div>
           <label> {label}</label>
           <input {...inputProps} onChange={handleChange}/>
       </div>
    )
}

export default Form