import React from 'react';

import { Grid } from '@material-ui/core'; // curley braces used because we need something specific from the material-ui, and not the whole

import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";


class App extends React.Component {

    state = {
        video: [],
        selectedVideos: null,
    }

    componentDidMount() {
        this.handleSubmit('Chocolates');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet', // fetches videos
                maxResults: 5, // fetches only 5 videos
                key: '[API KEY]', // copy the API key and paste it here
                q: searchTerm,
            }
        });

        this.setState({ videos: response.data.items, selectedVideos: response.data.items[0] });
    }

    render() {
        const { selectedVideo } = this.state;
        return ( <
            Grid justify = 'center'
            container spacing = { 10 } >
            <
            Grid item xs = { 11 } >
            <
            Grid container spacing = { 10 } >
            <
            Grid item xs = { 12 } > < SearchBar onFormSubmit = { this.handleSubmit }
            / > < /
            Grid > <
            Grid item xs = { 8 } > < VideoDetail video = { this.state.selectedVideo }
            /> < /
            Grid > <
            Grid item xs = { 4 } > < VideoList videos = { videos }
            onVideoSelect = { this.onVideoSelect }
            /> < /
            Grid > < /
            Grid > <
            /Grid> < /
            Grid >
        )
    }
}

export default App;