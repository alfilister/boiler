import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { MouseEvent } from 'react'
import { setName } from '@/redux/slices/demitoSlice'
import MainLayout from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const { name } = useAppSelector((state) => state.demito)
	const dispatch = useAppDispatch()

	function handleSwitch(e: MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()
		name === 'demito'
			? dispatch(setName('Cambiado'))
			: dispatch(setName('demito'))
	}

	return (
		<MainLayout>
			<div className="flex h-[100vh] w-full items-center justify-center gap-4 bg-red-400 hover:bg-white hover:text-black">
				{name}
				<button
					className="rounded-full bg-slate-500 px-4 hover:bg-slate-900 hover:text-white"
					onClick={(e) => handleSwitch(e)}
				>
					Switch name
				</button>

				<Link
					href={'/sample'}
					className="rounded-full bg-slate-500 px-4 hover:bg-slate-900 hover:text-white"
				>
					See Sample Page
				</Link>
			</div>
		</MainLayout>
	)
}
