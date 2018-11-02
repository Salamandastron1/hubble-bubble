import { errorReceived } from './errorReceived'

describe('errorReceived', () => {
  it('should return an object with an error and type ERROR_RECEIVED', () => {
    const desired = {
      type: 'ERROR_RECEIVED',
      error: 'ya gots an error'
    }
    const result = errorReceived('ya gots an error')

    expect(desired).toEqual(result)
  })
})