import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../card';

describe('Card Component', () => {
  it('Should render Card', () => {
    const component = renderer.create(
      <Card />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});