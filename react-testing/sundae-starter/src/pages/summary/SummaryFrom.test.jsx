
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe, expect } from 'vitest';
import SummaryForm from './SummaryForm'

describe('SummaryForm', () => {
    function renderSummaryForm() {
        render(<SummaryForm />);
    }

    describe('초기 조건인 경우', () => {
        test('체크박스와 버튼은 비활성화 상태이여야 한다.', () => {
            renderSummaryForm()

            const checkbox = screen.getByRole('checkbox', {
                name: /terms and conditions/i
            })
            expect(checkbox).not.toBeChecked();

            const button = screen.getByRole('button', /Confirm order/i)
            expect(button).toBeDisabled();
        });
    });

    describe('체크박스에 체크 된 경우', () => {
        test('버튼은 활성화 되어야 한다.', async () => {
            const user = userEvent.setup();

            renderSummaryForm();

            const checkedBox = screen.getByRole('checkbox', {
                name: /terms and conditions/i
            })
            const button = screen.getByRole('button', /Confirm order/i)

            await user.click(checkedBox)
            expect(button).toBeEnabled()

            await user.click(checkedBox)
            expect(button).toBeDisabled()
        })
    })

    /** 마우스 Hover 시 Popover 여부 테스트 */
    describe('Hover 발생하는 경우', () => {
        test('Popover가 된다.', async () => {
            const user = userEvent.setup();
            renderSummaryForm()

            // 초기 화면에 popover가 나타나지 않는다.
            const nullPopover = screen.queryByText(/no ice cream will actually be deliveyed/i)
            expect(nullPopover).not.toBeInTheDocument();

            // checkbox label 마우스 오버 시 popover가 나타난다.
            const termsAndConditions = screen.getByText(/terms and conditions/i);
            await user.hover(termsAndConditions);
            const popover = screen.getByText(/no ice cream will actually be delivered/i);
            expect(popover).toBeInTheDocument();

            // 마우스 오버 하지 않을 시 popover가 나타나지 않는다.
            await user.unhover(termsAndConditions);
            expect(popover).not.toBeInTheDocument();
        })
    })
});
