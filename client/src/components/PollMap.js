import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import zipcodes from 'zipcodes';
import { format } from 'url';
class PollMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
              width: 400,
              height: 400,
              latitude: 37.7577,
              longitude: -122.4376,
              zoom: 12
            },
            input: ''
          };
          this.dummyData = 78665
          this.handleLocation = this.handleLocation.bind(this);
          this.handleInput = this.handleInput.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleInput(e) {
            this.setState({
                input: e.target.value
            })
        }
        
        handleSubmit(e) {
            e.preventDefault();
            this.handleLocation(this.state.input)
        }
        
        handleLocation (zipcode) {
            let location = zipcodes.lookup(zipcode);
            this.setState({
                viewport:{
                    width: 400,
                    height: 400,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    zoom: 11
                }
            })
        }
        componentDidMount() {
            this.handleLocation(75605)
            
        }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInput} type="text"></input>
            </form>
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'}
            />
        </div>
        );
    }
}

export default PollMap