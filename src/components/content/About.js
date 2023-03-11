import './../../styles/about.css';

export const About = () => {
    return (
        <section className="about-wrapper" id='about-section'>
            <div className="about">
                <img src="./../images/alejandro-profile.png" alt="" className="about__photo" />
                <div className="description-wrapper">
                    <h2 className="about__name">Alejandro Torres</h2>
                    <p className="about__description">I am a Cambridge-based physiotherapist, registered with the HCPC and CSP. I started my journey in Physiotherapy due to my own experience as a patient when I was an athlete. I studied for my degree in Málaga and specialised in musculoskeletal physiotherapy with a Neuro-Orthopaedic approach in Valencia, where I completed my MSc. As a clinician, I consider it key to identify the root cause of the situation with you as an active part of the process so that together, we can select the optimal treatment for you.</p>
                </div>
            </div>
        </section>
    )
}