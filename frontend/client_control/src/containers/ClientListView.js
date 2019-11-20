import React from 'react';
import axios from 'axios';

import Clients from '../components/Client';

class ClientList extends React.Component {

    state = {
        clients: []
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/")
        .then(res => {
            this.setState({
                clients: res.data
            });
        });
    }

    render() {
        return (
            <Clients data={this.state.clients}/>
        );
    }
}

export default ClientList;