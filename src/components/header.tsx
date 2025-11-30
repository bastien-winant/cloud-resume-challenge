import { type JSX } from "react"
import { Stack, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { NavLink } from "react-router"

export default function Header():JSX.Element {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
		>
			<Stack gap="0">
				<Heading as="h1">Bastien Winant,</Heading>
				<Text>Data Engineer</Text>
			</Stack>
			<LinkBox>
				<Text>About</Text>
				<LinkOverlay asChild>
					<NavLink to="about" />
				</LinkOverlay>
			</LinkBox>
		</Stack>
	)
}