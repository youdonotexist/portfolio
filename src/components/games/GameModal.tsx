import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import GameComponent from "./GameComponent";

interface GameModalProps {
    isModal?: boolean;
}

const GameModal: React.FC<GameModalProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { game_id } = useParams<{ game_id: string }>();

    const back = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigate(-1); // Go back to the previous route
    };

    return (
        <div className="modal-bg">
            <div className="modal">
                <div className="modal-close-top-container">
                    <div className="modal-close-top" onClick={back}>
                        <span
                            style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                            }}
                        >
                        <div>X</div>
                        </span>
                    </div>
                </div>
                <GameComponent isModal={true}/>
                <div className="modal-close-bottom-container">
                    <div className="modal-close-bottom" onClick={back}>
                        Close
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameModal;