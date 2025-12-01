import { HStack, Stack, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { NavLink } from "react-router"

export default function Header() {
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
				<Text textStyle={{ base: "xl", md: "2xl" }} fontWeight="semibold">About</Text>
				<LinkOverlay asChild>
					<NavLink to="about" />
				</LinkOverlay>
			</LinkBox>
		</HStack>
	)
}