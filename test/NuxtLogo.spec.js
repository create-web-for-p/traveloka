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
  expect(screen.getByText('Any fool can use a computer')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
})

test('increments value on click', async () => { //ตั้งชื่อเทสเคส
  const { getByTestId } = render(Button);
  const userNameInput = getByTestId('username');
  const username = 'testuser';
  await fireEvent.update(userNameInput, username);

  const passwordInput = getByTestId('password');
  const password = '123456';
  await fireEvent.update(passwordInput, password);

  const button = screen.getByText('submit')
  await fireEvent.click(button) // กดปุ่ม
  expect(screen.getByText('The Internet?')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
})







// import {render,screen, fireEvent} from '@testing-library/vue'
// import resgister_user  from '../pages/Decision_Support_page/register_user.vue'

// test('ไม่กรอกข้อมูลหน้าลงทะเบียนผู้ใช้ระบบ', async () => { //ตั้งชื่อเทสเคส
//     render(resgister_user) //รันหน้าเว็บ  
//     const button = screen.getByText('ลงทะเบียน')
//     await fireEvent.click(button) // กดปุ่ม
//     expect(screen.getByText('กรุณากรอกข้อมูลให้ครบถ้วน')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
// })

// test('increments value on click', async () => { //ตั้งชื่อเทสเคส
//     const { getByTestId } = render(resgister_user);
//     const userNameInput = getByTestId('username');
//     const username = 'carcar';
//     await fireEvent.update(userNameInput, username);
  
//     const button = screen.getByText('ลงทะเบียน')
//     await fireEvent.click(button) // กดปุ่ม
//     expect(screen.getByText('รหัสเจ้าหน้าที่จะต้องเป็นตัวเลขเท่านั้น')).toBeTruthy() // ดูว่าข้อมูลเปลี่ยนไหม
//   })