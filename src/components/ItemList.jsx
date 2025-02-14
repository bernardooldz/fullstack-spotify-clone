import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

ItemList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    path: PropTypes.number.isRequired,
    idPath: PropTypes.number.isRequired,
    itemsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ItemList({ title, items, itemsArray, path, idPath }) {

    return (
        <div>

            <div className="item-list">
                <div className="item-list__header">
                    <h2>{title} populares</h2>
                    <a href={path} className="item-list__link">
                        Mostrar tudo
                    </a>
                </div>

                <div className="item-list__container">

                    {itemsArray
                        .filter((currentValue, index) => index < items)
                        .map((currObj, index) => (
                            <SingleItem
                                {...currObj}
                                idPath={idPath}
                                key={`${title}-${index}`}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemList
