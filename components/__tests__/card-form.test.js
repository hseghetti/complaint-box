import React from 'react';
import renderer from 'react-test-renderer';
import CardForm from '../card-form';

describe('Card Form Component', () => {
  it('Should render Card form', () => {
    const component = renderer.create(
      <CardForm />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});