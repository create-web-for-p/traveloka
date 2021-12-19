import {render, screen, fireEvent} from '@testing-library/vue' // เรียกใช้ libary
import Button from '../pages/index.vue' // เรียกหน้าเว็บ

test('increments value on click', async () => { //ตั้งชื่อเทสเคส
  render(Button) //รันหน้าเว็บ
  expect(screen.queryByText('Times clicked: 0')).toBeTruthy()  
  const button = screen.getByText('increment')
  await fireEvent.click(button) // กดปุ่ม
  await fireEvent.click(button)
 expect(screen.queryByText('Times clicked: 2')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
})


test('increments value on click', async () => { //ตั้งชื่อเทสเคส
  render(Button) //รันหน้าเว็บ  
  const button = screen.getByText('submit')
  await fireEvent.click(button) // กดปุ่ม
 expect(screen.findByText('localhost:3000 says')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
})