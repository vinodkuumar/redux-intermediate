import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getArtists, artistListSearch } from '.././store/actions';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const artistList = useSelector((state) => state.artists.artistList);
    console.log('artist list = ', artistList);
    const dispatch = useDispatch();
    // componentDidMount() {
    //     this.props.dispatch(getArtists())
    // }
    useEffect(() => {
        dispatch(getArtists());
    }, [])
    const showArtistsAll = (data) => (
        data ? (
            data.map((item) => (
                <Link
                    to={`/artist/${item.id}`}
                    key={item.id}
                    className="artist_item">
                    <div className="cover" style={{ background: `url(/images/${item.cover})` }}>
                        <div>{item.name}</div>
                    </div>
                </Link>
            ))
        ) : null

    )
    const getKeywords = (event) => {
        let key = event.target.value
        dispatch(artistListSearch(key));
    }
    
    return (
        <>
            <div className="search_container">
                <h2>Search your Artist</h2>
                <input type="text" onChange={event => getKeywords(event)} />
            </div>
            <div className="artist_container">
                {showArtistsAll(artistList)}
            </div>
        </>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         artists: state.artists
//     }
// }

export default Home;