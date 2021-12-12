
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Inotes } from '../../models/news.model';
import { uid, userData } from '../utils/constants';

const CreateNews = () => {
    const [title, setTitle] = useState<string | null>(null)
    const [category, setCategory] = useState<string | null>(null)
    const [content, setContent] = useState<string | null>(null)
    const [image, setImage] = useState<string | null>(null)
    const [date_created] = useState<string>(new Date().toUTCString())
    const [error, setError] = useState<boolean>(false)

    let navigate = useNavigate();

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value) {
            setCategory(e.target.value)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!category || !content || !image || !title) {
            setError(true)
        } else {

            setError(false)
            let obj = {
                newsId: uid(), title, category, content, image, date_created,
                id: userData().id,
                name: userData().name,
                email: userData().email,
            }
            handleSave(obj)

        }
    }

    const handleSave = (obj: Inotes) => {
        let news = localStorage.getItem('newsData') && JSON.parse(localStorage.getItem('newsData') || '')
        console.log(news)
        if (news && news.length) {
            let payload = [...news, obj]
            localStorage.setItem('newsData', JSON.stringify(payload))
            return navigate('/news')
        } else {
            let payload = [obj]
            localStorage.setItem('newsData', JSON.stringify(payload))
        }
    }
    return (
        <div className="text-center body" data-new-gr-c-s-check-loaded="14.1041.0" data-gr-ext-installed="">
            <form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Create your News</h1>


                <div className="form-group mb-3 => s">
                    {/* <label htmlFor="name" className="sr-only">Username</label> */}
                    <input type="text" id="name" className="form-control" onChange={(e) => setTitle(e.target.value)}
                        placeholder="News Title" />
                    {
                        error && !title && <small id="emailHelp" className="form-text  text-danger">Title is required</small>
                    }                </div>

                <div className="form-group mb-3">
                    <select className="form-control" id="exampleFormControlSelect1" onChange={handleSelect}>
                        <option value="">Select a category</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Religion">Religion</option>
                        <option value="Sport">Sport</option>
                        <option value="Education">Education</option>
                    </select>
                    {
                        error && !category && <small id="emailHelp" className="form-text  text-danger">Category is required</small>
                    }                </div>

                <div className="form-group mb-3">
                    {/* <label htmlFor="name" className="sr-only">Username</label> */}
                    <textarea className="form-control" placeholder="Enter your news content"
                        onChange={(e) => setContent(e.target.value)}></textarea>

                    {
                        error && !content && <small id="emailHelp" className="form-text  text-danger">Content is required</small>
                    }                </div>
                <div className="form-group mb-3">
                    {/* <label htmlFor="name" className="sr-only">Username</label> */}
                    <input type="text" id="name" className="form-control" onChange={(e) => setImage(e.target.value)}
                        placeholder="Image Link" />
                    {
                        error && !content && <small id="emailHelp" className="form-text  text-danger">Content is required</small>
                    }                </div>

                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block w-100" type="submit">Create News</button>
                </div>

            </form>

        </div>
    )
}

export default CreateNews
