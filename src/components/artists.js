import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { artistsDetail, clearArtistDetail } from '../store/actions';

class Artists extends Component {
    componentDidMount() {
        this.props.dispatch(artistsDetail(this.props.match.params.id))
    }
    componentWillUnmount() {
        this.props.dispatch(clearArtistDetail());
    }
    artistTemplate = (data) => (
        data.artistData ? (
            <>
            <div className="artist_view">
                <div
                    className="artist_background"
                    style={{ background: `url(/images/${data.artistData[0].cover})` }}
                >
                    <Link to="/">
                        Back Home
                    </Link>
                    <div className="name">{data.artistData[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistData[0].bio}</p>
                    <div className="tags">
                        <strong>Style:</strong>{data.artistData[0].style}
                    </div>
                </div>
            </div>
            <div
                className="artist_album_list">
                    {data.artistData[0].albums ? 
                    data.artistData[0].albums.map((item) => (
                        <div key={item.cover} className="albums">
                            <div
                                className="cover"
                                style={{
                                    background: `url(/images/albums/${item.cover})`
                                }}
                                ></div>
                            </div>
                    )) : null}
                </div>
            </>
        ) : null
    )
    render() {
        console.log(this.props);
        return (
            <div>
                {this.artistTemplate(this.props.artists)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}
export default connect(mapStateToProps, null)(Artists);