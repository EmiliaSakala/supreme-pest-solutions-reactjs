import react from 'react';
import './stats.css';

const Stats = () => {
    return (
         <div className="facts container-fluid my-5 py-5" data-parallax="scroll">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span className="text-primary">Happy Clients</span>
                </div>
                <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h1 className="display-4 text-white" data-toggle="counter-up">700</h1>
                    <span className="text-primary">Projects Succeed</span>
                </div>
                <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-4 text-white" data-toggle="counter-up">8</h1>
                    <span className="text-primary">Awards Achieved</span>
                </div>
                <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h1 className="display-4 text-white" data-toggle="counter-up">20</h1>
                    <span className="text-primary">Team Members</span>
                </div>
            </div>
        </div>
    </div> 
        );
}

export default Stats;