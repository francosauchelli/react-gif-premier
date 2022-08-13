import PropTypes from 'prop-types'


export const GifItem = ({ title, image }) => {

    return (
        <div className="card" >
            <img src={ image } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}