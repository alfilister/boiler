import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import SamplePage from '.'

jest.mock('next/router', () => require('next-router-mock'))

describe('SamplePage', () => {
	mockRouter.push('/sample')

	it('should render about page', () => {
		render(<SamplePage />)
	})
})
