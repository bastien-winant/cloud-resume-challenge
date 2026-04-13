type SkillSetProps = {
	category: string
	skills: string[]
}

export default function SkillSet({ category, skills }: SkillSetProps) {
	return (
		<div className="flex flex-col capitalize">
			<h3 className="text-stone-400">{category}</h3>
			<ul>
				{skills.map((skill, i) => <li key={i}>{skill}</li>)}
			</ul>
		</div>
	)
}