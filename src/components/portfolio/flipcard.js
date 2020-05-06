import React from 'react';
import DemoModal from "./demo";
import Button from '@material-ui/core/Button';
import employeeImg from '../../images/portfolio/fullsize/1.jpg';
import fillPlateImg from '../../images/portfolio/fullsize/2.jpg';
import budgetImg from '../../images/portfolio/fullsize/3.jpg';

import "./flipcard.scss"

const FlipCard = (project) => { 

    const technologies = project.project.tech.map((tech) => {
        return <p>{tech}</p>;
        
    });

    const getProjectImg = (index) => {
        switch(index) {
            case 1:
                return employeeImg;
            case 2:
                return fillPlateImg;
            case 3: 
                return budgetImg;
            default:
                return null;
        }
    }                       
    return (
        <div className="project-container">
            <div className="project-card">
                <div className="card-front">
                    <div className="front-title">
                        <h3>{project.project.name}</h3> 
                    </div>
                    <div className="row front-content">
                        <img className="img-project" src={getProjectImg(project.project.index)} alt="loading..."    ></img>
                        <div className="project-desc">{technologies}</div>
                    </div>
                    <a disabled className="btn btn-light btn-dummy">
                        Watch Demo
                        <i class="fas fa-long-arrow-alt-right arrow-pointer" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="card-back">
                    <div className="back-content">
                        <p>{project.project.desc}</p>
                        <DemoModal project={project.project}></DemoModal>
                        <div className="btn-project">
                            <Button className="btn" variant="contained" href={project.project.source} target = "_blank" rel="noopener noreferrer">Source Code</Button>
                        </div>
                        <div>
                            <Button className="btn" variant="contained" href={project.project.site} target = "_blank" rel="noopener noreferrer">Website</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard