import { Map } from "./Map"
import './../../styles/location.css';

export const Location = () => {
    return (
        <section className="location-wrapper" id='location-section'>
            <div className="location">
                <div className="location__details">
                    <h2 className="location__title">FIND US</h2>
                    <div className="location__address">
                        <div>11 Regency Square </div>
                        <div>CB1 3WL</div>
                        <div>Cambridge</div>
                    </div>
                </div>
                <div className="location__opening-hours">
                    <h2 className="opening-hours__title">OPENING HOURS</h2>
                    <div className="opening-hours__description">Monday - Friday, 8:00-19:00</div>
                </div>
                <Map />
            </div>
        </section>
    );
}