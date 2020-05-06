import React, { useState } from 'react';
import Modal from 'react-modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import budgetDemo from '../../images/portfolio/demos/budget.gif';
import plateDemo from '../../images/portfolio/demos/plate.gif';
import employeeDemo from '../../images/portfolio/demos/employee.gif';

import "./demo.scss"

const DemoModal = (project) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const open = () => {
        setModalIsOpen(true);
    }

    const close = () => {
        setModalIsOpen(false);
    }

    const getProjectDemo = (index) => {
        switch(index) {
            case 1:
                return employeeDemo;
            case 2:
                return plateDemo;
            case 3: 
                return budgetDemo;
            default:
                return null;
        }
    }
    return (
        <div>
            <Button className="btn" onClick={open} variant="contained">Demo</Button>
            <Modal ariaHideApp={false} isOpen={modalIsOpen}>
                <div className="project-modal">
                    <IconButton className="text-primary btn-close float-right" onClick={close} aria-label="delete">
                        <CloseIcon fontSize="medium" />
                    </IconButton>
                    <h2 className="modal-title">{project.project.name}</h2>
                    <img className="demo-gif" src={getProjectDemo(project.project.index)} alt="loading..."></img>
                </div>
            </Modal>
        </div>
    )
}

export default DemoModal