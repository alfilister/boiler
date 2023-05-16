import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Home from '.'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

jest.mock('next/router', () => require('next-router-mock'))

describe('Home', () => {
	mockRouter.push('/')

	it('should render about page', () => {
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		)
	})
})
