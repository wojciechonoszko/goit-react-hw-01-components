import './transaction.css'

const transaction=require('components/transaction/transaction.json')

export const Transaction = ({items}) => (
    <>
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    
    <tbody>
        {transaction.map(items => (
            <tr key={items.id}>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
            </tr>
        ))}
    </tbody>
   
    </>
)

export default Transaction;