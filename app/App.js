import React from 'react';
import HomePage from './components/homePage/HomePage';
import ExplorePage from './components/explorePage/ExplorePage';
import EventPage from './components/eventPage/EventPage';
import Footer from './components/footer/Footer';

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