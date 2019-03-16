import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import zipcodes from 'zipcodes';
class PollMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
              width: 400,
              height: 400,
              latitude: 37.7577,
              longitude: -122.4376,
              zoom: 8
            }
          };
          this.dummyData = 78665
          this.handleLocation = this.handleLocation.bind(this)
        }
      
        handleLocation () {
            let location = zipcodes.lookup(this.dummyData);
            this.setState({
                viewport:{
                    width: 400,
                    height: 400,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    zoom: 8
                }
            })
        }
        componentDidMount() {
            this.handleLocation()
            
        }
    render() {
        return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'}
          />
        );
    }
}

export default PollMap