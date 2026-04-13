import Section from "../components/Section"
import Experience from "../components/Experience"

export default function Index() {
	return (
		<div>
			<Section title="experience">
				<div className="flex flex-col">
					<Experience
						title="senior producer"
						company="Creative Agency XYZ"
						start_date="June 2022"
						location="Remote & New York, NY"
						tasks={[
							'Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.',
							'Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.'
						]}
					/>
					<Experience
						title="senior producer"
						company="Creative Agency XYZ"
						start_date="June 2022"
						location="Remote & New York, NY"
						tasks={[
							'Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.',
							'Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.'
						]}
					/>
					<Experience
						title="content producer"
						company="Creative Hub Studio"
						start_date="December 2021"
						end_date="June 2022"
						location="New York, NY"
						tasks={[
							'Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.',
							'Proactively identified and integrated industry trends, emerging technologies, and cultural insights to enhance creative output and maintain brand relevance.',
							'Clients include: Lunethra, Forgekind and more.'
						]}
					/>
				</div>
			</Section>
			<Section title="skills">
				this is the skills section
			</Section>
			<Section title="education">
				<div className="grid grid-cols-2">
					<p>University of California, Los Angeles (UCLA)</p>
					<div>
						<p>Bachelor of Fine Arts in Graphic Design</p>
						<span>Minor: Studio Photography</span>
					</div>
				</div>
			</Section>
		</div>
	);
}