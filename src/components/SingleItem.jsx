import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

SingleItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    idPath: PropTypes.string.isRequired,
    banner: PropTypes.string,
    artist: PropTypes.string,
};

SingleItem.defaultProps = {
    artist: undefined,
    banner: ""
};

function SingleItem({ id, name, image, banner, artist = undefined, idPath }) {

    return (
        <>
            <a href={`${idPath}/${id}`} className="single-item">
                <div className="single-item__div-image-button">
                    <div className="single-item__div-image">
                        <img
                            className="single-item__image"
                            src={image}
                            alt={`Imagem do Artista ${name}`}
                        />
                    </div>

                    <FontAwesomeIcon
                        className="single-item__icon "
                        icon={faCirclePlay}
                    />
                </div>

                <div className="single-item__texts">
                    <div className="single-item__2lines">
                        <p className="single-item__title">{name}</p>
                    </div>

                    <p className="single-item__type">
                        {artist ?? "Artista"}
                    </p>
                </div>
            </a>
        </>
    )
}

export default SingleItem