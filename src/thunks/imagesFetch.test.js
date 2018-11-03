import { imagesFetch } from './imagesFetch'
import { toggleLoading } from '../action-creators/toggleLoading'
import { errorReceived } from '../action-creators/errorReceived'

describe('imagesFetch', () => {
  let mockReturnData;
  let mockData;
  let url;
  let mockDispatch;
  beforeEach(() => {
    mockData = [
      {
        "id": 4236,
        "name": "Serpens Nebula HBC 672",
        "news_name": "a",
        "collection": "news"
      },
      {
        "id": 4237,
        "name": "Compass Image of HBC 672",
        "news_name": "b",
        "collection": "news"
      },
    ]
    mockDispatch = jest.fn()
    url = (id) => (`https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/image/${id}`)
    mockReturnData = {
      "name": "Serpens Nebula HBC 672",
      "news_name": "i",
      "mission": "hubble",
      "collection": "news",
      "image_files": [
        {
            "file_url": "https://media.stsci.edu/uploads/image_file/image_attachment/1242/mini_thumb.jpg",
            "file_size": 470,
            "width": 40,
            "height": 40
        },
        {
            "file_url": "https://media.stsci.edu/uploads/image_file/image_attachment/1244/thumb.jpg",
            "file_size": 698,
            "width": 80,
            "height": 80
        }
      ]
    }
    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }))
  })
  afterEach(() => {
  mockDispatch.mockClear();
})
  it('should call dispatch with toggleLoading', async () => {
    const thunk = imagesFetch(mockData)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleLoading())
  })
  it('should call fetch with the correct params', async () => {
    const thunk = imagesFetch(mockData)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(url(4236))
    expect(window.fetch).toHaveBeenCalledWith(url(4237))
  })
  it.skip('should call dispatch with errorReceived if response is not ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      message: 'ya suck'
    }))
    const thunk = imagesFetch(mockData)

    await thunk(mockDispatch)

    expect(mockDispatch.mock.calls.length).toEqual(1)
    expect(mockDispatch.mock.calls.length).toEqual(2)
  })
})