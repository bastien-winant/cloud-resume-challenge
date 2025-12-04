import { Stack, Heading, Text } from "@chakra-ui/react"

export default function About() {
	return (
		<Stack>
			<Heading size="sm">About me</Heading>
			<Stack>
				<Text textStyle="lg">
					Here's the deal. I'm Alexandra, and honestly? I think being a producer is kinda like being a really organized
					friend who also happens to be a ninja at making cool stuff happen. My philosophy?
					Keep it smooth, keep it fun, and keep everyone feeling heard. I love making space for creativity to
					flow—when you actually look forward to Monday mornings.
				</Text>
				<Text textStyle="lg">
					I'm a big believer in talking things out, even if it's just to vent about that one font that's driving us all crazy.
					I'm also the one who'll order the emergency pizza when we're pulling a late one, and probably bring my dog,
					Biscuit, to the office for morale.
					More than anything, I love seeing a team click, ideas bouncing, and projects coming to life.
					It's not just about the finished product, it's about the laughs and the connections we make along the way.
				</Text>
				<Text textStyle="lg">
					I want to make awesome stuff with awesome people, and maybe sneak in a few dog cuddles while we're at it.
				</Text>
			</Stack>
		</Stack>
	)
}