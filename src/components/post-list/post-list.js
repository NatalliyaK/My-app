import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import "./post-list.css";

const PostList = ({posts, onDelete,onToggleLiked,onToggleImportant}) => {

    const element = posts.map((item) => {
        const {id,...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app=list">
            {element}
        </ListGroup>
    )
}

export default PostList;