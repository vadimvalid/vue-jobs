import nextElementList from '@/utils/nextElementList'

describe('nextElementList', () => {
  it('locates elements in list and returns the next element in list', () => {
    expect(nextElementList()).toBeInstanceOf(Array)
  })
})
