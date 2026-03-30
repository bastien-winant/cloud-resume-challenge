import Section from "../components/Section"
import Certification from "../components/Certification"
import DEBadge from "../assets/DE - badge with outline.png"
import AWSDEBadge from "../assets/aws-certified-data-engineer-associate.png"
import AWSSABadge from "../assets/aws-certified-solutions-architect-associate.png"

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
				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
					<Certification
						imgUrl={DEBadge}
						title="DataCamp - Data Engineer"
						url="https://www.datacamp.com/certificate/DE0018366168401"
					/>
					<Certification
						imgUrl={AWSDEBadge}
						title="AWS Certified Data Engineer – Associate"
						url="https://www.credly.com/badges/b12c39df-bd59-4a65-a256-968c082404ee/public_url"
					/>
					<Certification
						imgUrl={AWSSABadge}
						title="AWS Certified Solutions Architect – Associate"
						url="https://www.credly.com/badges/25296c31-3e3e-4f3b-abdc-7c178d466ed1/public_url"
					/>
				</div>
			</Section>
		</div>
	)
}