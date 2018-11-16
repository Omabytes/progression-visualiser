import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import HomePage from '../HomePage'
import SelectorContainer from '../../containers/SelectorContainer';
import FileUploader from '../../FileUploader';
import FileDownloader from '../../FileDownloader';

const mockStore = configureMockStore()
const store = mockStore({}) 

const wrapper = shallow(
    <Provider store={store}>
        <HomePage />
    </Provider>
)

it('renders without crashing', () => {
    wrapper.text()
})

it('contains a single import data link', () => {
    expect(wrapper.find(FileUploader).length).toEqual(1)
})

it('contains a single export data link', () => {
    expect(wrapper.find(FileDownloader).length).toEqual(1)
})

it('contains a single selector', () => {
    expect(wrapper.find(SelectorContainer).length).toEqual(1)
})
