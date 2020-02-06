import React from 'react';
import HomePage from './components/HomePage/HomePage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import EventPage from './components/EventPage/EventPage';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <HomePage />
                <ExplorePage />
                <EventPage />
                <Footer />
            </div>
        )
    }
}

export default App;