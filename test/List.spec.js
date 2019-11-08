import { mount, shallowMount } from '@vue/test-utils'
import List from '@/components/List'

describe('List.vue', () => {
  test('List is a Vue instance', () => {
    const wrap = mount(List)
    expect(wrap.isVueInstance()).toBeTruthy()
  })

  it('renders li for each item in props.items', () => {
    const items = [1, 2]
    const wrap = shallowMount(List, {
      propsData: {list: items}
    })
    expect(wrap.findAll('li')).toHaveLength(items.length)
  })
})