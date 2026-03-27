import { Container, Stack, Box } from "@chakra-ui/react"
import Header from "@/components/Header"
import Aside from "@/components/Aside"
import { Outlet } from "react-router"

export default function Layout() {
	return (
		<Container bg="bg" minH="100vh">
			<Header />
			<Stack
				direction={{ base: "column", md: "row"}}
				gap={{ md: 12 }}
				position="sticky"
				top="0"
				left="0"
			>
				<Aside />
				<Box
					as="main"
					flexGrow="1"
					borderTopWidth="thin"
					pt="8"
				>
					<Outlet />
				</Box>
			</Stack>
		</Container>
	)
}