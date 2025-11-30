import { type JSX } from "react"
import Header from "@/components/header.tsx"
import Aside from "@/components/aside.tsx"
import { Outlet } from "react-router"
import { Box, Stack } from "@chakra-ui/react"

export default function Root():JSX.Element {
	return (
		<Box>
			<Header />
			<Stack>
				<Aside />
				<Box as="main">
					<Outlet />
				</Box>
			</Stack>
		</Box>
	)
}