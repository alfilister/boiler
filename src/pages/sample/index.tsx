import MainLayout from '@/ui/layouts/Layout'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function SamplePage() {
	return (
		<>
			<div>
				<h6 className="bg-blue-200 text-slate-500">Sample page ome</h6>
				<Link href={'/'} className="btn-main">
					Return to home
				</Link>
			</div>
		</>
	)
}

SamplePage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout title="Sample page">{page}</MainLayout>
}
