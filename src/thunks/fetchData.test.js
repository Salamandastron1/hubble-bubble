import { fetchData } from './fetchData'
import { starsReceived } from '../action-creators/astronomicalObjectsActions'
import { toggleLoading } from '../action-creators/toggleLoading'

describe('fetchData', () => {

  let url;
  let mockDispatch;
  let response;

  beforeEach(() => {
    response = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}];

    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }))
    url = 'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images';
  })
  it('should not call dispatch with toggleLoading, if isLoading is false and response is not okay', async () => {

    const mockDispatch = jest.fn()
    const thunk = fetchData(url, true)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalled()
  })
  it('should call fetch with the correct params', async () => {
    const mockDispatch = jest.fn()
    const thunk = fetchData(url)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('should call dispatch with toggleLoading if response is okay', async () => {
    const mockDispatch = jest.fn()
    const thunk = fetchData(url)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleLoading())
  })
  it('should call dispatch with starsReceived with params, if response is ok', async () => {
    const mockDispatch = jest.fn()
    const thunk = fetchData(url)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(starsReceived(response))
  })
  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      message: 'ya suck'
    }))
    const mockDispatch = jest.fn()
    const thunk = fetchData(url)
    await expect(thunk(mockDispatch)).toThrow()
    // expect( function(){ parser.parse(raw); } ).toThrow(new Error("Parsing is not possible"));

  })
})