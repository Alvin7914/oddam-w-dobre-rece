import React from "react";

const HomeThreeColumns = () => {
    return (
        <section className='three-columns' id='three-columns'>
            <div className='first-column'>
                <p className="bags__amount">10</p>
                <p className="bags__title">ODDANYCH WORKÓW</p>
                <p className="bags__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                    elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='second-column'>
                <p className="organizations__amount">5</p>
                <p className="organizations__title">WSPARTYCH ORGANIZACJI</p>
                <p className="organizations__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                    elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='third-column'>
                <p className="gatherings__amount">7</p>
                <p className="gatherings__title">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="gatherings__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                    elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}

export default HomeThreeColumns;