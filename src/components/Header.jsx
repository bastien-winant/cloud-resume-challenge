import { HStack, Stack, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { NavLink } from "react-router"

export default function Header() {
	return (
		<HStack
			py="4"
			alignItems="flex-start"
			justifyContent="space-between"
			h={{ base: 56, lg: 64 }}
		>
			<Stack gap="0">
				<Heading size={{ base: "xl", lg: "2xl" }}>Bastien Winant,</Heading>
				<Text textStyle={{ base: "xl", lg: "2xl" }} color="fg.muted">Data Engineer</Text>
			</Stack>
			<LinkBox>
				<Text textStyle={{ base: "xl", lg: "2xl" }} fontWeight="semibold">About</Text>
				<LinkOverlay asChild>
					<NavLink to="/about" />
				</LinkOverlay>
			</LinkBox>
		</HStack>
	)
}