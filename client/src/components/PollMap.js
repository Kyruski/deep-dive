import React, { Component } from 'react';
import ReactMapBoxGl, {Layer, Feature, Marker} from 'react-mapbox-gl';
import zipcode from 'zipcodes';
import mapboxgl from 'mapbox-gl'
import { render } from 'react-testing-library';


const Map = ReactMapBoxGl({
    accessToken: 'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'
})
class PollMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [[-0.2416815, 51.5285582], [0.2416815, -51.5285582]],
            center: [-0.2416815, 51.5285582],
            input: ''
        }
        this.handleLocation = this.handleLocation.bind(this)
        this.handleInput = this.handleInput.bind(this)
    } 
    handleLocation(e){
        e.preventDefault()
        let location = zipcode.lookup(this.state.input)
        let coordinates = new mapboxgl.LngLat(location.longitude, location.latitude)
        this.setState({
            center: coordinates
        })
    }
    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    render(){ 
        return (
            <div>
            <form onSubmit={this.handleLocation}>
            <input onChange={this.handleInput} type="text"></input>
            </form>
        <Map center={this.state.center} containerStyle={{height: '50vh', width: '50vw'}} style="mapbox://styles/mapbox/streets-v8">
        {this.state.markers.map((pin) => {
            return (

                    <Marker
                    coordinates={pin}
                    anchor="bottom">
                    <img src={"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjEjfOA04zhAhVFPawKHctNBsoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.usa.gov%2Fregister-to-vote&psig=AOvVaw3ZdDBV8Zk4t2VNfzwQYsAo&ust=1553031398342511"}/>
                    </Marker>
            )
        })}
        </Map>
        </div>
        )
    }
}
// class PollMap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             viewport: {
//               width: 400,
//               height: 400,
//               latitude: 37.7577,
//               longitude: -122.4376,
//               zoom: 12
//             },
//             input: ''
//           };
//           this.dummyData = 78665
//           this.handleLocation = this.handleLocation.bind(this);
//           this.handleInput = this.handleInput.bind(this);
//           this.handleSubmit = this.handleSubmit.bind(this)
//         }
//         handleInput(e) {
//             this.setState({
//                 input: e.target.value
//             })
//         }
        
//         handleSubmit(e) {
//             e.preventDefault();
//             this.handleLocation(this.state.input)
//         }
        
//         handleLocation (zipcode) {
//             let location = zipcodes.lookup(zipcode);
//             this.setState({
//                 viewport:{
//                     width: 400,
//                     height: 400,
//                     latitude: location.latitude,
//                     longitude: location.longitude,
//                     zoom: 11
//                 }
//             })
//         }
//         componentDidMount() {
//             this.handleLocation(75605)
            
//         }
//     render() {
//         return (
//         <div>
//             <form onSubmit={this.handleSubmit}>
//                 <input onChange={this.handleInput} type="text"></input>
//             </form>
//             <ReactMapGL
//                 {...this.state.viewport}
//                 onViewportChange={(viewport) => this.setState({viewport})}
//                 mapboxApiAccessToken={'pk.eyJ1IjoiZGV2bm9haCIsImEiOiJjanRieGNpZzAwcW5tNDRyeXhvbG5tZjZjIn0.tB7Rsz3NKcNnpwfWWMltVg'}
//             />
//         </div>
//         );
//     }
// }

export default PollMap