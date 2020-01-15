import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue, cb) => {
	const [
		values,
		setValues,
	] = useLocalStorage(key, initialValue);

	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const clearForm = e => {
		e.preventDefault();
		setValues(...initialValue);
	};

	const handleSubmit = e => {
		e.preventDefault();
		cb();
	};

	return [
		values,
		handleChanges,
		clearForm,
		handleSubmit,
	];
};
