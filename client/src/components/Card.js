import React, { Fragment } from 'react';
import '../styles/base.css';
import '../styles/card.css';

//sideCol = boolean, if true there is a side solumn
//cardSide = the content to put in the side col
const Card = ({ outerCardClassName, bottomRowClassName, sideColClassName, sideCol, cardBottom, cardSide, cardContent }) => {
    return (
        <div>
            <div className={`card outer-card p-4 ${outerCardClassName && outerCardClassName}`} style={{ width: "18rem" }}>
                <div className="row">
                    {sideCol ?
                        <Fragment>
                            <div className={`col-1 mr-4 ${sideColClassName && sideColClassName}`}>
                                {/* The heart and likes on the side of the forum card; below is an example of how to style it */}
                                {/*<div className="row mx-auto">
                                    128
                                </div>
                                <div className="row mx-auto">
                                    <i class="far fa-heart m-2"></i>
                    </div>*/}
                                {cardSide && cardSide}
                            </div>
                            <div className="col">
                                {/* The actual post/image that's on the card; below is an example of how to style it */}
                                {/*<div className="card p-4 w-100">
                                    Example Post
                    </div>*/}
                                {cardContent}
                            </div>
                        </Fragment>
                        :
                        <div className="card p-4 w-100">
                            {/* The actual post/image that's on the card; below is an example of how to style it */}
                            {/*<div className="card p-4 w-100">
                                    Example Post
                    </div>*/}
                            {cardContent}
                        </div>
                    }
                </div>
                <div className={`row ${bottomRowClassName && bottomRowClassName}`}>
                    {/* The icons or text at the bottom blue border; below is an example of how to style it */}
                    {/*<div className="container d-flex justify-content-end">
                        <i class="far fa-heart mt-4 mx-2"></i>
                        <i class="far fa-comment mt-4 mx-2"></i>
                </div>*/}
                    {cardBottom && cardBottom}
                </div>
            </div>
        </div>
    )
}

export default Card
