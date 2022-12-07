import React from "react";
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const CommentCard = ({imageUrl, userName, datePosted, children}) => {


    const Div = styled.div`
    background-color: #d3d3d3;
    padding: 1em;
    margin: 1em;
    display: flex;
    border-radius: .5em;
    `
    const Div1 = styled.div`
    margin: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    `
    const Author = styled.h4`
    text-decoration: none;
    `
    const A = styled.a`
    text-decoration: none;
    `
    
    const Pdate = styled.p`
    font-size: .75em;
    color: #000080;
    `
    const Profile = styled.img`
    width: 10em;
    border-radius: 10em;
    `



    return (
        <Div>
            <Profile src={imageUrl} alt="its a nice picture"/>
            <Div1>
                <Author><A href="">{userName}</A></Author>
                <p>{children}</p>
                <Pdate>
                    <a href="">Like</a> &#8226;  <a href="">Reply</a> &#8226; {dayjs(datePosted).toNow(true)} ago
                </Pdate>
            </Div1>
            
        </Div>

    )
};



export default CommentCard;