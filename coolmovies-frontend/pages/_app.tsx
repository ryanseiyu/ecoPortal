import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { EnhancedStore } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, useMemo, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "../redux";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const [store, setStore] = useState<EnhancedStore | null>(null);

	const client = useMemo(() => {
		return new ApolloClient({
			cache: new InMemoryCache(),
			uri: "/graphql",
		});
	}, []);

	React.useEffect(() => {
		const store = createStore({ epicDependencies: { client } });
		setStore(store);
	}, [client]);

	if (!store) return <>{"Loading..."}</>;

	return (
		<>
			<Head>
				<title>{"Coolmovies Frontend"}</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ReduxProvider store={store}>
				<ApolloProvider client={client}>
					<Component {...pageProps}></Component>
				</ApolloProvider>
			</ReduxProvider>
		</>
	);
};

export default App;
