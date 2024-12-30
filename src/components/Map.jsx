import React, { useEffect, useState } from "react";


const Map = () => {
    return (
        <>
        { /* <!-- start map section --> */ }
        <section>
            <div className="py-5 map_section">
                <div className="container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6377.587043835338!2d96.45371651110058!3d17.330068561181413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c3d72cb1051ac1%3A0x8b7b98b7819bbf38!2zU2VsIFRoZWluIFNlbCBUaGFuIFBhZ29kYSDhgIbhgJrhgLrhgJ7hgK3hgJThgLrhgLjhgIbhgJrhgLrhgJ7hgJThgLrhgLjhgJPhgJnhgLnhgJnhgIXhgLHhgJDhgK7hgJThgJThgLrhgLjhgKXhgK7hgLjhgIDhgK_hgJThgLrhgLg!5e1!3m2!1sen!2sus!4v1694664725536!5m2!1sen!2sus" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
        {/* <!-- end map section --> */}
        </>
    )
}

export default Map;