import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DailyExpense from './DailyExpenses';

describe('testing the daily expense', () => {
    window.fetch = jest.fn();
    window.fetch.mockedResovedValueOnce({
        json: async ()=>[{category:"food"}]
    });
    test('renders post if suceed', async () => {
        render(<DailyExpense />)
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);
    });

    test('renders post if not suceed', async () => {
        render(<DailyExpense />)
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).toHaveLength(0);
    });

    test("fetches data from an API and renders the results", async () => {
        const data = { results: [ { id: 1, name: "John Doe" } ] };
        axios.get.mockResolvedValueOnce(data);
    
        const { getByText } = render(<App />);
    
        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    
        expect(getByText("John Doe")).toBeInTheDocument();
      });
});