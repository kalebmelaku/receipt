import React from 'react';
import Header from '../components/header';

function Order()
{
    function handlePrint()
    {
        window.print();
    }
    return (
        <div className='purchase'>
            <button className='printBtn btn' onClick={handlePrint}>Print</button>
            <Header page="PURCHASE ORDER" />
            <div className="date">
                <p>Date:</p>
            </div>
            <div className="clr"></div>
            <div className="order-body">
                <div className="items">
                    <div className="item">
                        <h3>issued by: </h3>
                        <hr className='first' />
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>issued to: </h3>
                        <hr className='first' />
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>ship to: </h3>
                        <hr className='first' />
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>additional instructions: </h3>
                        <hr className='first' />
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>shipping terms: </h3>
                        <hr className='first' />
                    </div>
                    <div className="item">
                        <h3>currency & payment terms: </h3>
                        <hr className='first' />
                    </div>
                </div>
                <div className="delivery">
                    <h3>DELIVERY DATE: </h3> <hr className='first' />
                </div>
            </div>
            <table className="table" border={0}>
                <tbody>

                    <tr>
                        <td>S.N</td>
                        <td>Description</td>
                        <td>Unit</td>
                        <td>Qty</td>
                        <td>Unit Cost</td>
                        <td>Extended Cost</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='total_table'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='total total_title'><p>Total</p></td>
                        <td className='total'><p></p></td>
                    </tr>
                    <tr className='total_table'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='total total_title'><p>Taxes</p></td>
                        <td className='total'><p></p></td>
                    </tr>
                    <tr className='total_table'>
                        <td></td>
                        <td></td>
                        <td className='total'><p>PREPARED FOR OWDA PR#</p></td>
                        <td></td>
                        <td className='total total_title'><p>Shipping</p></td>
                        <td className='total'><p></p></td>
                    </tr>
                    <tr className='total_table'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='total total_title'><p>Insurance</p></td>
                        <td className='total'><p></p></td>
                    </tr>
                    <tr className='total_table'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='total total_title'><p>Total Invoice</p></td>
                        <td className='total'><p></p></td>
                    </tr>
                </tbody>
            </table>
            <div className="signature">
                <div>
                    <h2>Authorized on Behalf of OWDA:</h2>
                    <hr />
                    <p>(Name/title/date/sign)</p>
                </div>
                <div>
                    <h2>Acceptance on Behalf of supplier</h2>
                    <hr />
                    <p>(Name/title/date/sign)</p>
                </div>
            </div>
            <div className="footer">
                <p>Please refer to this purchase order number in all correspondence concerning the order. Please supply 2 copies of your invoices</p>
                <p>See attached terms and conditions</p>
            </div>
        </div>
    );
}

export default Order;