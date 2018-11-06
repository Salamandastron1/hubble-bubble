import { imagesFetch } from './imagesFetch'
import { toggleLoading } from '../action-creators/toggleLoading'
import { errorReceived } from '../action-creators/errorReceived'
import { filterImages } from './imagesFetch'

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
  it.skip('should call dispatch with toggleLoading', async () => {
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
  it('should call dispatch with errorReceived if response is not ok', async () => {
    window.fetch = jest.fn(() => Promise.reject({
      ok: false,
      message: 'ya suck'
    }))
    const thunk = imagesFetch(mockData)

    await thunk(mockDispatch)


    expect(mockDispatch.mock.calls.length).toEqual(2)
  })
})

describe('filter images', () => {
  let mockImages1;
  let mockImages2;
  beforeEach(() => {
    mockImages1 = [
      {
        file_url: 'imagefile.png',
        width: 3000,
      },
      {
        file_url: 'imagefile.jpg',
        width: 2000,
      },
      {
        file_url: 'superImage.png',
        width: 100,
      }
    ]
    mockImages2 = [
      {
        file_url: 'imagefile.tint',
        width: 3000,
      },
      {
        file_url: 'superImage.png',
        width: 100,
      },
      {
        file_url: 'imagefile.jpg',
        width: 2000,
      }
    ]
  })
  it('should return an image if includes png', () => {
    const desired = {
        file_url: 'imagefile.png',
        width: 3000,
      }
    const result = filterImages(mockImages1)

    expect(result).toEqual(desired)
  })
  it('should return an image if it includes jpg', () => {
    const desired = {
        file_url: 'imagefile.jpg',
        width: 2000,
    }
    const result = filterImages(mockImages2)

    expect(result).toEqual(desired)
  })
  it('should return an image if its width is greater than 2000 and is a png or jpg', () => {
    const desired =  {
      file_url: 'imagefile.jpg',
      width: 2000,
    }
    const result = filterImages(mockImages2)

    expect(result).toEqual(desired)
  })
})