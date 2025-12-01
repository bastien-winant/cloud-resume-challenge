import { Stack, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"

export default function Aside() {
	return (
		<Stack
			as="aside"
			borderTopWidth="thin"
			pt="8"
			pb="3"
			gap={{ base: 20 }}
			w={{ base: "full", md: "xs", lg: "sm"}}
		>
			<Text
				w="10/12"
				maxW="md"
				fontSize={{ base: "md" }}
			>
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</Text>
			<Stack gap="0">
				<LinkBox
					py="3"
					borderTopWidth="thin"
					px={2}
					_hover={{ backgroundColor: "bg.inverted", color: "fg.inverted" }}
				>
					<Text fontSize="xs" fontWeight="medium">bastien.winant@gmail.com</Text>
					<LinkOverlay href="mailto:bastien.winant@gmail.com" />
				</LinkBox>
				<LinkBox
					py="3"
					borderTopWidth="thin"
					px={2}
					_hover={{ backgroundColor: "bg.inverted", color: "fg.inverted" }}
				>
					<Text fontSize="xs" fontWeight="medium">Xing</Text>
					<LinkOverlay href="https://xing.com/profiles/Bastien_Winant" target="_blank" />
				</LinkBox>
				<LinkBox
					py="3"
					borderTopWidth="thin"
					px="2"
					_hover={{ backgroundColor: "bg.inverted", color: "fg.inverted" }}
				>
					<Text fontSize="xs" fontWeight="medium">GitHub</Text>
					<LinkOverlay href="https://github.com/bastien-winant" target="_blank" />
				</LinkBox>
			</Stack>
		</Stack>
	)
}