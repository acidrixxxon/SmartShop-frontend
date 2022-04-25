import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/common/Container/Container'

const CategoryPage = () => {
    const { id } = useParams()

    return (
        <div id="category">
            <Container>
                <h4 className="page__title">
                    Категория
                </h4>
            </Container>
        </div>
  )
}

export default CategoryPage