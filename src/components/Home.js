import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtists } from '.././store/actions';
import {Link} from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getArtists())
    }
    showArtistsAll = (data) => (
        data ? (
            data.map((item) => (
                <Link 
                    to={`/artist/${item.id}`} 
                    key={item.id}
                    className="artist_item">
                        <div className="cover" style={{background: `url(/images/${item.cover})`}}>
                            <div>{item.name}</div>
                        </div>
                    </Link>
               ))
        ) : null

    )
    render() {
        console.log(this.props)
        return (
            <>
                <div className="search_container">
                    <h2>Search your Artist</h2>
                    <input type="text" />
                </div>
                <div className="artist_container">
                    {this.showArtistsAll(this.props.artists.artistList)}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, null)(Home);