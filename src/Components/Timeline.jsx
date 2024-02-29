import React, { useEffect } from "react";
import '../css/Timeline.css';
import { Button } from "@mui/material";
import AOS from 'aos';
import HoverText from "./HoverText";

const Timeline = ({ elements = [{ '1234': [{ 'FEB': { 'title': 'This is a title test', 'body': 'This is a default body test for describe the project', 'href': '#', 'image': '' }, 'MAY': { 'title': 'This is a title test', 'body': 'This is a default body test for describe the project', 'href': '#', 'image': '' } }], '2345': [{ 'FEB': { 'title': 'This is a title test', 'body': 'This is a default body test for describe the project', 'href': '#', 'image': '' }, 'MAY': { 'title': 'This is a title test', 'body': 'This is a default body test for describe the project', 'href': '#', 'image': '' } }] }] }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    return (
        <div data-aos="fade-left" id="timeline" className="page" data-uia-timeline-skin="4" data-uia-timeline-adapter-skin-4="ui-card-skin-#1">
            <div className="uia-timeline">
                <div className="uia-timeline__container">
                    <div className="uia-timeline__line"></div>
                    {elements.map((yearData, yearDataIndex) => {
                        return Object.keys(yearData).map((yearKey, yearIndex) => {
                            const year = yearData[yearKey];
                            return (
                                <div key={yearIndex} className="uia-timeline__annual-sections">
                                    <span className="uia-timeline__year" aria-hidden="true">{yearKey}</span>
                                    <div className="uia-timeline__groups">
                                        {Object.values(year).map((monthData, monthIndex) => (
                                            Object.entries(monthData).map(([monthKey, monthValue]) => {
                                                return (
                                                    <section key={`${yearIndex}-${monthKey}`} className="uia-timeline__group" aria-labelledby={`timeline-demo-4-heading-${yearIndex + 1}`}>
                                                        <div className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                                            <div className="uia-card__container">
                                                                <div className="uia-card__intro">
                                                                    <span className="uia-card__time">
                                                                        <time>
                                                                            <span>{monthKey}</span>
                                                                        </time>
                                                                    </span>
                                                                </div>
                                                                <div className="timeline-title">
                                                                    <HoverText style={{ fontSize: '1.5rem', fontWeight: 'bolder' }} string={monthValue.title} />
                                                                </div>
                                                                <div className="uia-card__body">
                                                                    <div>
                                                                        {monthValue.image !== '' ? (<img src={monthValue.image} alt={`${monthValue.title}`} />) : ('')}
                                                                    </div>
                                                                    <div className="uia-card__description">
                                                                        <p>{monthValue.body}</p>
                                                                        <Button target="_blank" color="secondary" variant="outlined" aria-description={'Check ' + monthValue.title} href={monthValue.href} children={'See more'} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )
                                            })
                                        ))}
                                    </div>
                                </div>
                            );
                        });
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
