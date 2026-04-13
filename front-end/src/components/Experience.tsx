type ExperienceProps = {
	title: string
	company: string
	start_date: string
	end_date?: string
	location: string
	tasks: string[]
}

export default function Experience({ title, company, start_date, end_date, location, tasks}: ExperienceProps) {
	return (
		<section className="py-5 border-t border-stone-400/20">
			<div>
				<h3 className="capitalize font-medium mb-3">{title}</h3>
				<ul className="text-stone-400">
					<li>{company}</li>
					<li>{start_date} - {end_date || "present"}</li>
					<li>{location}</li>
				</ul>
			</div>
			<ul className="list-disc">
				{tasks.map(task => <li>{task}</li>)}
			</ul>
		</section>
	)
}