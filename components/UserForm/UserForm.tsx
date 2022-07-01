import { useState, useEffect, FormEventHandler } from "react";
import { trpc } from "@/utils/trpc";

const UserForm = () => {
	const mutation = trpc.useMutation("user.create");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	// Reset form on successful submission
	useEffect(() => {
		if (mutation.data && mutation.isSuccess) {
			setFirstName("");
			setLastName("");
			mutation.reset();
		}
	}, [mutation]);

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (mutation.isLoading) return;
		mutation.mutate({ firstName, lastName });
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="first name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="last name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button type="submit">save</button>
			</form>
			{mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
		</>
	);
};
export default UserForm;
