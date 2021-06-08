import React, { Fragment, useEffect } from 'react';
import '../styles/base.css';

//outerCardClassName = for any extra bootstrap or css classes you want to add to the outer blue card
//outerCardClassName = for any extra bootstrap or css classes you want to add to the inner white card
//bottomRowClassName = for any extra bootstrap or css classes you want to add to the bottom row formatting (e.g. margins, padding positioning)
//sideColClassName = for any extra bootstrap or css classes you want to add to the side column formatting (e.g. margins, padding positioning)

//noOuterCard = boolean, if true there is no outer blue card
//noInnerCard = boolean, if true there is no ineer white card
//sideCol = boolean, if true there is a side column

//cardBottom = the content to put in the bottom of the card
//cardContent = the content to put in the middle of the card
//cardSide = the content to put in the side col

//noSetWidthHeight = boolean, if true then the card's width is not automatically set to 18rem
const Card = ({
    outerCardClassName,
    innerCardClassName,
    bottomRowClassName,
    sideColClassName,
    noOuterCard,
    noInnerCard,
    sideCol,
    cardBottom,
    cardSide,
    cardContent,
    noSetWidthHeight }) => {

    return (
        <div>
            <div
                className={`${noOuterCard ? null : "card outer-card"} p-4 ${outerCardClassName && outerCardClassName}`}
                style={noSetWidthHeight ? { width: "auto" } : { width: "18rem", height:"26rem" }}
            >
                <div className="row">
                    {sideCol ?
                        <Fragment>
                            <div className={`col-1 ${sideColClassName && sideColClassName}`}>
                                {/* The heart and likes on the side of the forum card; below is an example of how to style it */}
                                {/*<div className="row mx-auto">
                                    128
                                </div>
                                <div className="row mx-auto">
                                    <i class="far fa-heart m-2"></i>
                                </div>*/}
                                {cardSide && cardSide}
                            </div>
                            <div className={`col ${noInnerCard ? "" : "card p-4"} ${innerCardClassName && innerCardClassName}`}>
                                {/* The actual post/image that's on the card; below is an example of how to style it */}
                                {/*<div className="card p-4 w-100">
                                    Example Post
                    </div>*/}
                                {cardContent && cardContent}
                            </div>
                        </Fragment>
                        :
                        <div className={`${noInnerCard ? "" : "card p-4"} w-100 ${innerCardClassName && innerCardClassName}`}>
                            {/* The actual post/image that's on the card; below is an example of how to style it */}
                            {/*<div className="card p-4 w-100">
                                    Example Post
                </div>*/}
                            {cardContent}
                        </div>
                    }
                </div>
                <div className={`row my-auto ${bottomRowClassName && bottomRowClassName}`}>
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
