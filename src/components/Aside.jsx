import { Stack, StackSeparator, Text, LinkOverlay, LinkBox } from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu"

export default function Aside() {
	return (
		<Stack
			as="aside"
			borderTopWidth="thin"
			py="6"
			w={{ base: "full", md: "xs", lg: "sm" }}
			gap="20"
		>
			<Text w="85%" maxW="md" textStyle={{ base: "sm", md: "md" }}>
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</Text>
			<Stack separator={<StackSeparator />} borderTopWidth="thin" pt="2">
				<Text textStyle={{ base: "xs", md: "sm" }}>bastien.winant@gmail.com</Text>
				<Text textStyle={{ base: "xs", md: "sm" }}>+352 691 223 827</Text>
				<LinkBox display="flex" alignItems="center" gap="2">
					<Text textStyle={{ base: "xs", md: "sm" }}>Github</Text> <LuExternalLink />
					<LinkOverlay href="https://github.com/bastien-winant" target="_blank" />
				</LinkBox>
			</Stack>
		</Stack>
	)
}