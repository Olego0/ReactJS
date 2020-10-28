import React from "react";
import PropTypes from "prop-types";
import styles from "./Transaction-history.module.css";
function TransactionHistory(props) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {props.items.map((item) => (
          <tr className={styles.item} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;