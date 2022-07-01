import { trpc } from "@/utils/trpc";
import { User } from "@prisma/client";
import style from "./UserList.module.css";

const UserList = () => {
	const allUsers = trpc.useQuery(["user.findAll"]);

	if (!allUsers || allUsers.isLoading) {
		return <div>loading...</div>;
	}
	if (allUsers.isError) {
		console.error(allUsers.error);
		return <div>error loading users</div>;
	}

	return (
		<div>
			{allUsers.data?.map((user) => (
				<UserRow key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;

const UserRow = ({ user }: { user: User }) => {
	return (
		<div className={style.row}>
			<span>{user.firstName}</span>
			<span>{user.lastName}</span>
		</div>
	);
};
