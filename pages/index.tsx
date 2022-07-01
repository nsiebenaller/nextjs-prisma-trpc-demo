import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import UserList from "@/components/UserList";
import UserForm from "@/components/UserForm";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>My Blog</h1>
				<UserForm />
				<UserList />
			</main>
		</div>
	);
};

export default Home;
