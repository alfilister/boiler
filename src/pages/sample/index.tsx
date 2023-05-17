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
			<div className="flex flex-col">
				<label htmlFor="appt">Choose a time for your meeting:</label>

				<input
					className="w-fit rounded-full px-4 text-black"
					type="time"
					id="appt"
					name="appt"
					min="09:00"
					max="18:00"
					required
				/>
				<small>Office hours are 9am to 6pm</small>
			</div>
		</>
	)
}

SamplePage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout title="Sample page">{page}</MainLayout>
}
