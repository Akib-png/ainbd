import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import saulImage from './img/saul.jpg';
import jjImage from './img/jj2.jpg';
import Navigation from './Navigation/Navigation';

const Llist = () => {
    const [copied, setCopied] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [yourID, setYourID] = useState("YourUsername");

    const showCopiedMessage = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sections = [
        {
            id: 1,
            title: "Before you go to jail, Call Jimmy McGill",
            image: saulImage,
            description: "Welcome to my legal practice! I’m Saul Goodman, a dedicated attorney specializing in family law. With 9 years of experience in the field, I am committed to providing my clients with personalized, effective legal solutions tailored to their unique situations.",
        },
        {
            id: 2,
            title: "Before you go to jail, Call Syed Sayedul Haque Suman",
            image: jjImage,
            description: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard chambray.",
        },
        {
            id: 3,
            title: "Before you go to jail, call Saul Goodman",
            image: saulImage,
            description: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard chambray.",
        },
    ];

    const filteredSections = sections.filter((section) =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
            </div>
            {filteredSections.map((section) => (
                <section key={section.id} className="text-gray-600 body-font custom-section">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center custom-container">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 custom-image-wrapper">
                            <img className="img-jpg" src={section.image} alt={section.title} />
                        </div>
                        <div className="frontpp">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 custom-heading">
                                {section.title}
                            </h1>
                            <p className="mb-8 leading-relaxed custom-paragraph">
                                {section.description}
                            </p>
                        </div>
                    </div>
                </section>







            ))}
        </main>
    );
};

export default Llist;
