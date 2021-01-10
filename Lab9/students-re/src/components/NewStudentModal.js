import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from "./NewStudentForm";

class NewStudentModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Edycja Danych Studenta";
        var button = <Button onClick={this.toggle}>Edytuj</Button>;
        if (create) {
            title = "Tworzenie Nowego Studenta";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Dodaj Nowego Studenta
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewStudentForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            student={this.props.student}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewStudentModal;