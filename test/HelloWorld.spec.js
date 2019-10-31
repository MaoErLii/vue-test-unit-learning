import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('rendres props.msg when passed', () => {
    const msg = 'meaqua!!!'
    const desc = 'hello'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {msg: msg, desc: desc}
    })
    expect(wrapper.text()).toBe(msg + ' ' + desc)
  })

  
  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'Hello World'
    const defaultDesc = 'meaqua!!!'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).toBe(defaultMessage + ' ' + defaultDesc)
  })
})