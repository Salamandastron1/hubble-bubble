import { onload } from './onload'
import * as stars from '../action-creators/astronomicalObjectsActions'

describe('onload', () => {

  let url;
  let mockDispatch;
  let response;

  beforeEach(() => {
    response = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
    window.fetch() = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }))
    url = 'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images';
  })
  it('should call dispatchwith stars.starsReceived with params', async () => {
    const mockDispatch = jest.fn()
    const thunk = onload(url)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(stars.starsReceived(response))
  })
  it('should call fetch with the correct params', async () => {

    await onload(url)

    expect(window.fetch).toHaveBeenCalledWith(url)
  })
})