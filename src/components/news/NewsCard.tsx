import { Inotes } from '../../models/news.model'

interface InewsList {
    news: Inotes,
}

const NewsCard = ({ news }: InewsList) => {
    console.log(news)
    return (
        <div className="col">
            <div className="card shadow-sm">

                <div className="image bd-placeholder-img card-img-top" >
                    <img src={news.image} className="img" alt={news.image} />
                </div>
                <div className="card-body">

                    <h6 className="title">{news.title}</h6>
                    <div className="top d-flex justify-content-between">
                        <h6 className="text-left">By: {news.name}</h6>
                        <h6 className="text-right">{news.category}</h6>
                    </div>
                    <p className="card-text">{news.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{new Date(news.date_created).toDateString()}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
