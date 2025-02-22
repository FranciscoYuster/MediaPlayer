import React from "react";
import SongList from "./SongList";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row w-100 justify-content-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                    <div className="card h-500">
                        <div className="card-header border-0 text-center p-1">
                            <h6 className="mb-0">🎵 Music Player</h6>
                        </div>
                        <div className="card-body p-2">
                            <SongList />
                            <ProgressBar />
                            <Controls />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
