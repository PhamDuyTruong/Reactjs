import React, { useState } from 'react'

// Custom hook giúp làm việc với form
// 
export default function useForm(initialValue) {

    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({})

    const handleChange =(evt) => {
        const {value, name} = evt.target;

        setValues((values) =>({
            ...values,
            [name] : value
        }))
    }
    const handleBlur = (evt) =>{
         const {value, name} = evt.target;
         if(!value){
             setErrors(error =>({
                [name] : "This field is required "
             }))
         }
    }

    return {values,errors,handleBlur, handleChange};
}
