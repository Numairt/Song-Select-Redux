import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( props  ) => {
    if(!props.song){
        return <h3>Select a Song</h3>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {props.song.title}</p>
            <p>Duration: {props.song.duration}</p>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);