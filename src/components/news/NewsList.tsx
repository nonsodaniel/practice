import React from 'react'
import NewsCard from './NewsCard'
import { useNewsList } from '../hooks'
const NewsList = () => {
    const news = useNewsList()
    console.log('news', news)
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        news && news.length ? (
                            news.map(o => {
                                let { newsId } = o;
                                return (
                                    <NewsCard key={newsId} news={o} />
                                )
                            })
                        ) : (
                                <div className="">No news available</div>
                            )
                    }

                </div>
            </div>
        </div>

    )
}

export default NewsList
