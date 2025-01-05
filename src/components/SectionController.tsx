import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { GamesSection } from "./sections/GamesSection";
import { AboutSection } from "./sections/AboutSection";
import { WorkSection } from "./sections/WorkSection";
import { NavigationComponent } from "./NavigationComponent";
import GameComponent from "./games/GameComponent";
import GameModal from "./games/GameModal";

const SectionController: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // State to track the current and previous locations
    const [previousLocation, setPreviousLocation] = useState(location);
    const isModal = location.state?.modal || false;

    // Update the previous location if not in a modal
    useEffect(() => {
        if (!isModal) {
            setPreviousLocation(location);
        }
    }, [isModal]);

    return (
        <div className="Main">
            <NavigationComponent />
            <Routes location={isModal ? previousLocation : location}>
                <Route path="/" element={<AboutSection />} />
                <Route path="/games" element={<GamesSection />} />
                <Route
                    path="/game/:game_id"
                    element={
                        isModal ? <GamesSection /> : <GameComponent isModal={isModal} />
                    }
                />
                <Route path="/work" element={<WorkSection />} />
                <Route path="/about" element={<AboutSection />} />
            </Routes>
            {isModal && <GameModal />}
        </div>
    );
};

export default SectionController;