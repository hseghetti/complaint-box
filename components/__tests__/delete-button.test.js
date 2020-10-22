import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from '../delete-button';

describe('Card Component', () => {
  it('Should render Card', () => {
    const component = renderer.create(
      <DeleteButton />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});