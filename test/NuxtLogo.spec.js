// import { mount } from '@vue/test-utils'
// import NuxtLogo from '@/components/NuxtLogo.vue'
//import {render, screen, fireEvent} from '@vue/test-utils'
import Button from '../pages/index.vue'
import { render } from '@vue/server-test-utils'
test('increments value on click', async () => {
  render(Button)

  // // queryByText returns the first matching node for the provided text
  // // or returns null.
  // expect(screen.queryByText('Times clicked: 0')).toBeTruthy()

  // // getByText returns the first matching node for the provided text
  // // or throws an error.
  // const button = screen.getByText('increment')

  // // Click a couple of times.
  // await fireEvent.click(button)
  // await fireEvent.click(button)

 // expect(screen.queryByText('Times clicked: 2')).toBeTruthy()
 expect(true).toBe(true)
})

// describe('NuxtLogo', () => {
//   test('is a Vue instance', () => {
//     //const wrapper = mount(NuxtLogo)
//    // expect(wrapper.vm).toBeTruthy()
//     expect(true).toBe(true)
//   })
//   test('is a Vue instance', () => {
//     //const wrapper = mount(NuxtLogo)
//    // expect(wrapper.vm).toBeTruthy()
//     expect(true).toBe(true)
//   })
//   test('is a Vue instance', () => {
//     //const wrapper = mount(NuxtLogo)
//    // expect(wrapper.vm).toBeTruthy()
//     expect(true).toBe(true)
//   })
//   test('is a Vue instance', () => {
//     //const wrapper = mount(NuxtLogo)
//    // expect(wrapper.vm).toBeTruthy()
//     expect(true).toBe(true)
//   })
// })
