import React from 'react';
import renderer from 'react-test-renderer';
import ColorMode from '../color-mode';

describe('Color Mode Component', () => {
  it('Should render Color Mode', () => {
    const component = renderer.create(
      <ColorMode />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});