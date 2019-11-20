import React from 'react';
import axios from 'axios';

import History from '../components/History';

class HistoryList extends React.Component {

    state = {
        history: {}
    }

    componentDidMount() {
        const clientID = this.props.match.params.clientID;
        axios.get(`http://127.0.0.1:8000/api/${clientID}`)
        .then(res => {
            this.setState({
                history: res.data
            });
        });
    }

    render() {
        return (
            <History data={this.state.history}/>
        );
    }
}

export default HistoryList;