import React, { Component } from 'react';

export default class App extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        setInterval(async () => {
            const res = await fetch('http://ec2-54-69-43-225.us-west-2.compute.amazonaws.com:8080/api/card');
            const data = await res.json();
            console.log(data);
            this.setState({
                data 
            });
        }, 2000);
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}>
                {this.state.data.map((card, id) => (
                    <>
                        <div key={id} style={{
                                backgroundColor: card.token ? 'green' : 'red',
                                padding: 20,
                                width: 500,
                                fontSize: 30,
                                marginTop: 5
                            }}>
                            Token: {card.token}
                            {card.token && <span>{` (em uso)`}</span>}
                        </div>
                    </>
                ))
                }
            </div>
        )
    }
}