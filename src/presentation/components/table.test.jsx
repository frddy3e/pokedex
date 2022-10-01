import {render, screen} from '@testing-library/react';
import Table from './table';

describe('Table', () => {
    test('should render table component', () => {
        render(<Table />);
        const quoteListElement = screen.getByTestId('table');
        expect(quoteListElement).toBeInTheDocument();
    });
});