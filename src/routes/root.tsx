import { type JSX } from "react"
import { Outlet } from "react-router"
import { Box } from "@chakra-ui/react"

export default function Root():JSX.Element {
	return (
		<Box>
			<Outlet />
		</Box>
	)
}