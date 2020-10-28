import React from 'react';
import styles from './Friends.module.css';
import PropTypes from "prop-types";
function Friends(props) {
    return (
        <ul className={styles.friendList}>
            {props.friends.map(friend => (
                <li key={friend.id} className={styles.item}>
                    <span className={friend.isOnline?styles.isOnline:styles.isNotOnline}></span>
                    <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                    <p className={styles.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}
Friends.propTypes = {
    friends: PropTypes.array.isRequired
}
export default Friends;