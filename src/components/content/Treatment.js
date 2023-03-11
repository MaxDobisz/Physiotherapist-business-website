import './../../styles/treatment.css';

export const Treatment = () => {
    return (
        <section className="treatment-wrapper" id='treatment-section'>
            <div className="treatment">
                <ul className="treatment__list">
                    <li className="treatment__item">
                        <img src="./../images/spine.png" alt="" className="treatment__item-img" />
                        <h3 className="treatment-item__title">NEURO-MUSCULO-SKELETAL PHYSIOTHERAPY</h3>
                        <p className="treatment-item__description">Neuro (nerves), musculo (muscles and tendons) and skeletal (bones, joints, cartilage and
                            ligaments).</p>
                    </li>
                    <li className="treatment__item">
                        <img src="./../images/gait.png" alt="" className="treatment__item-img" />
                        <h3 className="treatment-item__title">SPORTS PHYSIOTHERAPY</h3>
                        <p className="treatment-item__description">General MOT, return-to-play and minimalise risk of injury.</p>
                    </li>
                    <li className="treatment__item">
                        <img src="./../images/massage.png" alt="" className="treatment__item-img" />
                        <h3 className="treatment-item__title">CHRONIC PAIN</h3>
                        <p className="treatment-item__description">Treatment of persistent symptoms, with or without a current pathology.</p>
                    </li>
                    <li className="treatment__item">
                        <img src="./../images/injury.png" alt="" className="treatment__item-img" />
                        <h3 className="treatment-item__title">PRE AND POSTSURGERY TREATMENT</h3>
                        <p className="treatment-item__description">Recovering an optimal functionality as soon as possible</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}