import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import BasicLink from './BasicLink';
import { Chance } from 'chance';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const chance = new Chance();
describe('Feature: BasicLink component testing', () => {
  let wrapper, linkText, href;

  beforeEach(() => {
    linkText = chance.string();
    href = chance.url();
    wrapper = shallow(<BasicLink href={href}>{linkText}</BasicLink>);
  });

  it('Scenario: renders a link in the correct fashion', () => {
    const expectedStyle = {
      cursor: 'pointer'
    };
    
  });
});