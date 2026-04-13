import Section from "../components/Section"
import Experience from "../components/Experience"

export default function Index() {
	return (
		<div>
			<Section title="experience">
				<div className="flex flex-col gap-8">
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
						company="Pixel Studios"
						start_date="December 2021"
						end_date="June 2022"
						location="New York, NY"
						tasks={[
							'Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing campaigns, ensuring seamless execution and brand alignment.',
							'Directed all phases of production operations (pre-production, production, post-production), meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.',
							'Strategically developed and managed production schedules, creative strategies, and talent relations, optimizing resources to deliver high-quality content within budget parameters.',
							'Clients include: Nestive, Zentrox, Pollenate, Vireo and more.'
						]}
					/>
					<Experience
						title="content producer"
						company="Creative Hub Studio"
						start_date="October 2016"
						end_date="March 2018"
						location="Los Angeles, CA"
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
				<div className="grid grid-cols-2 gap-10">
					<p>University of California, Los Angeles (UCLA)</p>
					<div>
						<p>Bachelor of Fine Arts in Graphic Design</p>
						<span className="text-stone-400">Minor: Studio Photography</span>
					</div>
				</div>
			</Section>
		</div>
	);
}