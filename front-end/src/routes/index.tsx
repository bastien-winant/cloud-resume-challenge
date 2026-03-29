import Section from "../components/Section"

export default function Index() {
	return (
		<div className="flex flex-col">
			<Section title="experience">
				this is the experience section
			</Section>
			<Section title="skills">
				this is the skills section
			</Section>
			<Section title="education">
				this is the education section
			</Section>
			<Section title="certifications">
				<div className="flex gap-3 flex-wrap">
					<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b12c39df-bd59-4a65-a256-968c082404ee" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
					<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="25296c31-3e3e-4f3b-abdc-7c178d466ed1" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
					<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b12c39df-bd59-4a65-a256-968c082404ee" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
				</div>
			</Section>
		</div>
	)
}