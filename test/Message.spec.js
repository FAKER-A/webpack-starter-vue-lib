import { shallowMount } from '@vue/test-utils'
import message from '@/message.vue'

describe('message', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(message, {
      propsData: { msg }
    })
    expect(wrapper.text()).toBe(msg)
    expect(wrapper.html()).toMatchSnapshot()
  })
})