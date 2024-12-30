import React, { useEffect, useState } from "react";


const GalleryShow = () => {

    const galleries = [
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-01.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-02.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-03.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-05.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-06.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-07.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-09.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-10.jpg.webp",
        },
        {
            img : "./../../public/imgs/gallery/photo-gallery-thumb-11.jpg.webp",
        }
    ]
    return (
        <>
            <div>

                <div className="p-4 row gap-0 justify-content-start align-items-center">
                    {
                        galleries.map((gallery,index) => {
                            return (
                                <div key={index} className="col-4 p-2">
                                    <a href={gallery.img} className="nav_gallery">
                                        <img src={gallery.img} width="100%" alt="gallery" />
                                    </a>
                                </div>
                            )
                        })
                            
                    }
                </div>
            </div>

        </>
    )
}

export default GalleryShow;