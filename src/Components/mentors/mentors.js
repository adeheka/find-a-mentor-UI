import React from "react";
import Button from "../Button/button";
import './mentors.css'
const Mentors = () =>
    <div className="mentors-section">
        <div className="mentors-images">
        <img 
            src="../../images/Ellipse-6.png"
            alt="" 
            className="img-fluid"
            style={style}
        />
        <img 
            src="../../images/Ellipse-5.png" 
            alt="" 
            className="img-fluid"
        />
        <img 
            src="../../images/Ellipse-7.png" 
            alt="" 
            className="img-fluid"
            style={style}
        />
        </div>
        <div className="words pt-4">
            <p>We have mentors who have worked with top tech companies and are very experienced in their field.
            Our mentors are friendly and people who can instantly connect with
            </p>
            <Button text="View All"/>
        </div>
    </div>

export default Mentors;

const style = {
    position: "relative",
    top: "5px",
    left: "90px",
}