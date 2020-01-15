import {useState} from 'react'

export const useForm = (initialValue, cb) => {
	const [
		values,
		setValues,
    ] = useState({initialValue});

    const handleChanges = e => {
		setValues({...values, [e.target.name]: e.target.value});
    };

    const clearForm = e => {
      e.preventDefault();
          setValues({
            ...initialValue
          });
    };

    const handleSubmit = e => {
      e.preventDefault();
      // make some api call
      cb()
      };
    
    
    return [values, handleChanges, clearForm, handleSubmit]
};

