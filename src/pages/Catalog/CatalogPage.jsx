import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/Category/CategoryItem/CategoryItem'
import Container from '../../components/common/Container/Container'
import SidebarFilters from '../../components/Filters/SidebarFilters/SidebarFilters'
import DesktopSorting from '../../components/Filters/Sorting/DesktopSorting/DesktopSorting'
import ActiveFilters from '../../components/Filters/ActiveFilters/ActiveFilters'
import './_CatalogPage.scss'

const CatalogPage = () => {
    const { product:{ HomeProducts } } = useSelector(state => state)

  return (
    <div id="catalog">
        <Container>
            <h4 className="page__title">
                Каталог
            </h4>
            <div className="catalog-wrapper">
                <SidebarFilters />

                <div className="catalog-content">
                    <div className="catalog-row">
                        <ActiveFilters />
                        <DesktopSorting />
                    </div>
                    <div className="catalog-products">
                        {HomeProducts.map(item => <CategoryItem item={item} />)}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CatalogPage