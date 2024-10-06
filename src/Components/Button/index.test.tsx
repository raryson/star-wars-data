import { render, screen } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom';

describe('Button', () => {
  it(`should render disabled button`, () => {
    render(<Button disabled={true}>Disabled Button</Button>);
    expect(screen.getByRole('button')).toHaveStyle(`cursor: not-allowed;`);
  });

  it(`should render enabled button`, () => {
    render(<Button disabled={false}>Disabled Button</Button>);
    expect(screen.getByRole('button')).not.toHaveStyle(`cursor: not-allowed;`);
  });
});
