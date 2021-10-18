// reducers
import { combineReducers } from "redux";

const songsReducer = () => {
    return[
        { title: 'Oxygen', duration: '4:50'},
        { title: 'Smells like teen Spirit', duration: '5:10'},
        { title: 'Ordinary', duration: '3:20'},
        { title: 'redux', duration: '12:50'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})