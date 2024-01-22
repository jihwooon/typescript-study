
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe } from 'vitest';
import SummaryForm from './SummaryForm'

describe('SummaryForm', () => {
    describe('초기 조건인 경우', () => {
        test('체크박스와 버튼은 비활성화 상태이여야 한다.', () => {
            render(<SummaryForm />);

            const checkbox = screen.getByRole('checkbox', {
                name: /terms and conditions/i
            })
            expect(checkbox).not.toBeChecked();

            const button = screen.getByRole('button', {
                name: /Confirm order/i
            })
            expect(button).toBeDisabled();
        });
    });

    describe('체크박스에 체크 된 경우', () => {
        test('버튼은 활성화 되어야 한다.', async () => {
            const user = userEvent.setup();

            render(<SummaryForm />);

            const checkedBox = screen.getByRole('checkbox', {
                name: /terms and conditions/i
            })
            const button = screen.getByRole('button', {
                name: /Confirm order/i
            })

            await user.click(checkedBox)
            expect(button).toBeEnabled()

            await user.click(checkedBox)
            expect(button).toBeDisabled()
        })
    })
});
