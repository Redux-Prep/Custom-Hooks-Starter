import {useState} from 'react'

export const useInput = () => {
	const [
		value,
		setValue,
    ] = useState('');

    const handleChanges = e => {
		setValue(e.target.value);
    };
    
    
    return [value, setValue, handleChanges]
};

