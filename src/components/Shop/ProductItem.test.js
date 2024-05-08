
import { render, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

describe('ProductItem component', () => {
  test('should dispatch addItemToCart action when "Add to Cart" button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const sampleProps = {
      id: '1',
      title: 'Sample Product',
      price: 10.99
    };

    const { getByText } = render(<ProductItem {...sampleProps} />);

    fireEvent.click(getByText('Add to Cart'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/addItemToCart',
      payload: {
        id: sampleProps.id,
        title: sampleProps.title,
        price: sampleProps.price
      }
    });
  });

  test('should render correct title, price, and description', () => {
    const sampleProps = {
      title: 'Sample Product',
      price: 10.99,
      description: 'Sample description'
    };

    const { getByText } = render(<ProductItem {...sampleProps} />);

    expect(getByText(sampleProps.title)).toBeInTheDocument();
    expect(getByText(`₹${sampleProps.price}`)).toBeInTheDocument();
    expect(getByText(sampleProps.description)).toBeInTheDocument();
  });
});
