import React from 'react';
import { render } from '@testing-library/react';
import Fallback from '..';

describe('React element that is rendered while waiting for the component to load', () => {
  it('should render fallback correctly', () => {
    const { asFragment } = render(<>{Fallback}</>);
    expect(asFragment()).toMatchSnapshot();
  });
});
