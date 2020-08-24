import React from 'react';

import { Grid } from '@material-ui/core'; // curley braces used because we need something specific from the material-ui, and not the whole

import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";


class App extends React.Component {
    render() {
        return ( <
            Grid justify = 'center'
            container spacing = { 16 } >
            <
            Grid item xs = { 11 } >
            <
            Grid container spacing = { 16 } >
            <
            Grid item xs = { 12 } > < SearchBar / > <
            /Grid> <
            Grid item xs = { 8 } > < VideoDetail / > <
            /Grid> <
            Grid item xs = { 4 } > { /* Search Bar */ } <
            /Grid> < /
            Grid > <
            /Grid> < /
            Grid >
        )
    }
}

export default App;