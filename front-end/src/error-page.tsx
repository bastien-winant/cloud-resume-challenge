import { useRouteError, isRouteErrorResponse } from "react-router"

export default function ErrorPage() {
	const error = useRouteError();

	let message = "Something went wrong";

	if (isRouteErrorResponse(error)) {
		message = error.statusText;
	} else if (error instanceof Error) {
		message = error.message;
	}

	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{message}</i>
			</p>
		</div>
	);
}