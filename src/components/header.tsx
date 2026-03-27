import { HStack, Stack, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router"

export default function Header() {
	const location = useLocation()

	const dynamicTarget =
		location.pathname.startsWith("/about") ? "/" : "/about"

	return (
		<HStack
			align="flex-start"
			justify="space-between"
			py="4"
			h="56"
		>
			<Stack gap="0">
				<Heading size={{ base: "xl", md: "2xl" }} fontWeight="semibold">Bastien Winant,</Heading>
				<Text textStyle={{ base: "xl", md: "2xl" }} color="fg.muted">Data Engineer</Text>
			</Stack>
			<LinkBox>
				<Text textStyle={{ base: "xl", md: "2xl" }} fontWeight="semibold">
					{dynamicTarget === "/about" ? "About" : "Back"}
				</Text>
				<LinkOverlay asChild>
					<NavLink to={dynamicTarget} />
				</LinkOverlay>
			</LinkBox>
		</HStack>
	)
}