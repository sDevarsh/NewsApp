import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=bca0e15fac87441e8db06667e6502d09&page=${page}&pageSize=9`);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        props.setProgress(70);
        setTotalResults(parsedData.totalResults);
        props.setProgress(80);
        setLoading(false)
        props.setProgress(100);
    };

    useEffect(() => {
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=bca0e15fac87441e8db06667e6502d09&page=${page + 1}&pageSize=10`);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <>
            <h1>Top Headlines for today</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container mt-5">
                    <div className="row  mt-3 ">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>

                                <NewsItem

                                    title={(element.title?element.title : " ")}
                                    description={element.description}
                                    img={element.urlToImage}
                                    url={element.url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}
