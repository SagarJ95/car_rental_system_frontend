import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { blogsInfo } from '../../../Producer/Blogs_producer'

function Blog() {

    const [paginationId, setPaginationId] = useState(0)
    const [limit, setlimit] = useState(9)

    const dispath = useDispatch()
    useEffect(() => {
        dispath(blogsInfo({ paginationId, limit }));
    }, [dispath, paginationId, limit])

    const { info, info_status } = useSelector((state) => state.fetchBlogs || {})


    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 heading-section text-center" data-aos="fade-up">
                            <span className="subheading">Blog</span>
                            <h2>Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        {info?.map((item, index) => (
                            <div className="col-md-4" data-aos="fade-up" key={item.id}>
                                <div className="blog-entry justify-content-end">
                                    <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${item.image})` }}>
                                    </a>
                                    <div className="text pt-4">
                                        <div className="meta mb-3">
                                            <div><a href="#">{item.created_at}</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                        </div>
                                        <h3 className="heading mt-2">{item.description}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog