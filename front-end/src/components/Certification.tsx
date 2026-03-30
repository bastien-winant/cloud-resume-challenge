type CertificationProps = {
	imgUrl?: string
	title: string
	url: string
}

export default function Certification({ imgUrl, title, url }: CertificationProps) {
	return (
		<article className="h-32 rounded-md flex gap-4 p-4 border border-stone-400/30 bg-stone-400/10">
			<img src={imgUrl} alt={`${title} badge`} className="self-center w-20" />
			<div className="flex flex-col gap-2">
				<h2 className="font-medium">{title}</h2>
				<a href={url} className="self-start text-sm text-blue-300 hover:text-blue-400">Link</a>
			</div>
		</article>
	)
}