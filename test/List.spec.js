import { mount } from '@vue/test-utils'
import List from '@/components/List'

describe('List.vue', () => {
  test('List is a Vue instance', () => {
    const wrap = mount(List)
    expect(wrap.isVueInstance()).toBeTruthy()
  })
})