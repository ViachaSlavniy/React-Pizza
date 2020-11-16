import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({items, onClickCategory, currentCategoryItem}) {

    let itemsElems = items.map((item, index) => (<li className={currentCategoryItem === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={item}>{item}</li>))

    return (
            
        <div className="categories">
            <ul>
            <li className={currentCategoryItem === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {itemsElems}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    onClickCategory: PropTypes.func
}

Categories.defaultProps = {
    items: [],
    currentCategoryItem: null
}

export default Categories
