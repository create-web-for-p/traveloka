//import { shallowMount } from '@vue/test-utils'
import Register from '../../pages/index'
import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';

describe('Register', () => {

  it('render title with default props', () => {
    const { getByTestId } = render(Register);
    expect(getByTestId('title')).toHaveTextContent('Register');
  });

  it('render and input username', async () => {
    const { getByTestId } = render(Register);
    const userNameInput = getByTestId('username');
    const username = 'testuser';
    await fireEvent.update(userNameInput, username);
    expect(userNameInput).toHaveValue(username);
  });
})
