import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm } from '../hooks/useForm';

import Button from '../theme/Button';

export const useStyles = makeStyles(theme => ({
	//By exporting this you can use useStyles in other components
	container : {
		display  : 'flex',
		flexWrap : 'wrap',
	},
	textField : {
		marginLeft  : theme.spacing(1),
		marginRight : theme.spacing(1),
	},
	dense     : {
		marginTop : theme.spacing(2),
	},
	menu      : {
		width : 200,
	},
}));

export default function SignupForm () {
	const classes = useStyles();
	// Stateful Logic:
	// state variables username and setUsername
	// handleChanges function

	//Abstract all those stateful logic pieces
	// remove them from the component
	// add them to the custom hook
	// return the necessary pieces from the hook
	//call the custom hook in your component go get those pieces back
	const [
		values,
		handleChanges,
		clearForm,
	] = useForm({ username: '', email: '' });

	// const username = useForm()[0]
	// const setUsername = useForm()[1]
	// const handleChanges = useForm()[2]
	// ^^These do not need to be named the same things as in the hooks
	// The first one could be const banana

	const handleSubmit = e => {
		e.preventDefault();
		// make some api call
	};

	return (
		<div p={2} className='form'>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Add New Client</legend>
					<TextField
						id='outlined-name'
						label='Username'
						className={classes.textField}
						value={values.username}
						name='username'
						onChange={handleChanges}
						margin='normal'
						variant='outlined'
					/>
					<TextField
						id='outlined-name'
						label='Email'
						className={classes.textField}
						value={values.email}
						name='email'
						onChange={handleChanges}
						margin='normal'
						variant='outlined'
					/>
					<Button color='blue' type='submit'>
						Submit
					</Button>
					<Button color='red' onClick={clearForm}>
						Clear
					</Button>
				</fieldset>
			</form>
		</div>
	);
}
