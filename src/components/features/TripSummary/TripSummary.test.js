import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='cost' days={1} tags={['test', 'test']} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  {/* Czy generowany jest poprawny link? */}
  it('should generate correct link', () => {
    const expectedLink = 'exampleLink';

    const component = shallow(<TripSummary id={expectedLink} image='image' name='name' cost='name' days={1} tags={['test', 'test']} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedLink}`);
  });

  {/* Czy <img> ma poprawne src i alt? */}
  it('should render correct "src" and "alt"', () => { 
    const expectedSrc = 'src';
    const expectedAlt = 'alt';

    const component = shallow(<TripSummary id='test' image={expectedSrc} name={expectedAlt} cost='{expectedCost}' days={1} tags={['test', 'test']} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    console.log('Src i alt OK: ', component.debug());
  });

  {/* Czy renderowane są propsy name, cost i days */}
  it('should render correct props', () => { 
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expactedDays = 1;

    const component = shallow(<TripSummary id='test' image='image' name={expectedName} cost={expectedCost} days={expactedDays} tags={['test', 'test']} />);

    const renderedName = component.find('.title').text();
    const renderedCost = component.find('.details').childAt(1).text(); 
    const renderedDays = component.find('.details').childAt(0).text(); 

    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toEqual(`from ${expectedCost}`);   
    expect(renderedDays).toEqual(`${expactedDays} days`);   

    console.log('Propsy OK: ', component.debug());
  });

  {/* Czy są renderowane tagi w spanach? */}
  it('should render correct tags', () => {         
    const expectedTags = ['a', 'b', 'c'];

    const component = shallow(<TripSummary id='test' image='image' name='name' cost='{expectedCost}' days={1} tags={expectedTags} />);

    for(let tag in expectedTags){
      const renderedTag = component.find('.tag').at(tag).text();
      expect(renderedTag).toEqual(expectedTags[tag]);
    }
    console.log('Są tagi - OK: ', component.debug());
  });
  
  {/* Czy nie ma tagów?  // jeśli są to trzeba je usunąć w TripSummary i dopiero wtedy odkomentować poniższy test */}
  {/*
  it('should throw error when no tags', () => {
    const component = shallow(<TripSummary id='test' image='image' name='name' cost='{expectedCost}' days={1} tags={[]} />);
    const checkedDiv = component.find('.tags').exists();
    expect(checkedDiv).toEqual(false);
    console.log('Brak tagów - ERROR: ', component.debug());
  }); */}
});