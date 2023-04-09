// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/App';

let getAllByTestId;

beforeEach(() => {
  //Render the Counter component here
    var { getAllByTestId } = render (<Counter />);
    testNumber = getAllByTestId;
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
     render(<Counter />);
     var elementCounter = screen.getAllByTestId('count');
     expect(elementCounter[0].textContent).toBe('0');
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
     render(<Counter />);
     var elementsCount = screen.getAllByTestId('count');
     expect(elementsCount.length).toBe(2);
     expect(elementsCount[0].textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
     render(<Counter />);
     var elementCount = screen.getAllByTestId('count');
     var incrementButtons = screen.getAllByText('+');
     var incrementButton = incrementButtons[0];
     fireEvent.click(incrementButton);
     expect(elementCount[0].textContent).toBe('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
     render(<Counter />);
     var elementCount = screen.getAllByTestId('count');
     var decrementButtons = screen.getAllByText('-');
     var decrementButton = decrementButtons[0];
     fireEvent.click(decrementButton);
     expect(elementCount[0].textContent).toBe('-1');
});

