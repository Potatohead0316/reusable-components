import { Container, FormGroup, Input, InputGroup } from 'reactstrap';
import './style.css';

const Contacts = () => {
    return (
        <div>
            <Container>
                <FormGroup>
                    <div className="rbs-label-required">Your Email</div>
                    <InputGroup>
                        <Input maxLength="250" id="bankAccountName" placeholder='Enter account name here...'
                        // value={dataHelper.getValue(state.data, "bankAccountName", "string")} className="rbs-textbox-counter-left text-uppercase"
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <div className="rbs-label-required">Subject</div>
                    <InputGroup>
                        <Input maxLength="250" id="bankAccountName" placeholder='Enter account name here...'
                        // value={dataHelper.getValue(state.data, "bankAccountName", "string")} className="rbs-textbox-counter-left text-uppercase"
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <div className="rbs-label-required">Message</div>
                    <InputGroup>
                        <Input maxLength="250" id="bankAccountName" placeholder='Enter account name here...'
                        // value={dataHelper.getValue(state.data, "bankAccountName", "string")} className="rbs-textbox-counter-left text-uppercase"
                        />
                    </InputGroup>
                </FormGroup>
            </Container>
        </div>
    );
};

export default Contacts;
