import React from 'react'
import Header from '../layouts/Header'
import NewsHero from './NewsHero'
import NewsList from './NewsList'

const News = () => {
    return (
        <div>
            <Header />
            <NewsHero />
            <NewsList />
        </div>
    )
}

export default News
