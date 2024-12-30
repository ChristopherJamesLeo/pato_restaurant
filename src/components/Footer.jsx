import React from "react"

const Footer = () => {
    return (
        <>
    {/* <!-- start footer section --> */}
    <footer>
       
        <div className="footer_section">
            <div className="sign_up_section">
                <div className="container">
                    <div className="d-block d-lg-flex gap-4 justify-content-center align-items-center">
                        <span className="d-block text-uppercase sign_up_title">
                            specials sign up
                        </span>
                        <form action="">
                            <div className="d-flex flex-wrap gap-4">
                                <div className="form-group">
                                    <input type="email" name="signupmail" id="" className="form-control shadow-none outline-none" placeholder="Email Address" />
                                    <span className="input_icon"><i className="fas fa-envelope"></i></span>
                                </div>
                                <button type="submit" className="text-uppercase reservation_btn">Sign-up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="pt-5 footer_content_main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div className="mb-5 footer_content_container">
                                <div className="mb-4 footer_content_header">
                                    <h3 className="text-uppercase">Contact Us</h3>
                                </div>
                                <div className="footer_content_body">
                                    <ul className="list-unstyled">
                                        <li className="py-2">
                                            <span className="d-inline-block footer_icons me-2">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                            <span className="footer_content">8th floor, 379 Hudson St, New York, NY 10018</span>
                                        </li>
                                        <li className="py-2">
                                            <span className="d-inline-block footer_icons me-2">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                            <span className="footer_content">(+1) 96 716 6879</span>
                                        </li>
                                        <li className="py-2">
                                            <span className="d-inline-block footer_icons me-2">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span className="footer_content">contact@site.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-5 footer_content_container">
                                <div className="mb-4 footer_content_header">
                                    <h3 className="text-uppercase">Openting Time</h3>
                                </div>
                                <div className="footer_content_body">
                                    <ul className="list-unstyled">
                                        <li className="py-2">
                                            <span className="footer_content">09:30 AM – 11:00 PM</span>
                                        </li>
                                        <li className="py-2">
                                            <span className="footer_content">Every Day</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div className="mb-5 footer_content_container">
                                <div className="mb-4 footer_content_header">
                                    <h3 className="text-uppercase">Contact Us</h3>
                                </div>
                                <div className="footer_content_body">
                                    <ul className="list-unstyled">
                                        <li className="py-2">
                                            <span className="d-inline-block footer_icons me-2">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                            <span className="footer_content"><a href="#" className="">contact@gmail.com</a></span>
                                        </li>
                                        <li className="py-2"><span className="footer_content">Activello is a good option. It has a slider built into that displays the featured image in the slider.</span>
                                        </li>
                                        <li className="py-2">
                                            <span className="footer_content"><a href="#" className="nav-link">contact@gmail.com</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div className="mb-5 footer_content_container">
                                <div className="mb-4 footer_content_header">
                                    <h3 className="text-uppercase">Gallery</h3>
                                </div>
                                <div className="footer_content_body">
                                    <div className="row">
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-01.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-01.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-02.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-02.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-03.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-03.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-04.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-04.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-05.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-05.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-06.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-06.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-07.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-07.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-08.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-08.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-09.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-09.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-10.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-10.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-11.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-11.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-3 mb-4">
                                            <div className="footer_gallery_img">
                                                <a href="./../../public/imgs/gallery/photo-gallery-thumb-12.jpg.webp" className="footer_imgs_gallery">
                                                    <img src="./../../public/imgs/gallery/photo-gallery-thumb-12.jpg.webp" width="100%" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- end footer section --> */}
        </>
    )
}

export default Footer;
