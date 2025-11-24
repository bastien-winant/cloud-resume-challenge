import { Container, Stack, Box } from "@chakra-ui/react"
import Header from "@/components/Header.jsx"
import Aside from "@/components/Aside.jsx"
import { Outlet } from "react-router"

export default function Layout() {
	return (
		<Container h="200vh">
			<Header />
			<Stack
				position="sticky"
				top="0"
				direction={{ base: "column", md: "row" }}
				gap={{ md: 12 }}
			>
				<Aside />
				<Box flexGrow="1" borderTopWidth="thin" py="6">
					<Outlet />
				</Box>
			</Stack>
		</Container>
	)
}