
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SummaryForm = () => {
    const checkboxLabel = (
        <span>
            I agreen to <span style={{ color: 'blue' }}> Terms and conditions</span>
        </span>
    )
    const [checked, setChecked] = useState(false)

    return (
        <Form>
            <Form.Group controlId="terms and conditions">
                <Form.Check
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    label={checkboxLabel}
                >
                </Form.Check>
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                disabled={!checked}
            >Confirm order</Button>
        </Form>
    );
};

export default SummaryForm;
