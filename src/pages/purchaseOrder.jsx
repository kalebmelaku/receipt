import React from 'react';
import Header from '../components/header';

function Order()
{
    function handlePrint() {
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
                        <hr className='first'/>
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>issued to: </h3>
                        <hr className='first'/>
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
                        <hr className='first'/>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <div className="item">
                        <h3>shipping terms: </h3>
                        <hr className='first'/>
                    </div>
                    <div className="item">
                        <h3>currency & payment terms: </h3>
                        <hr className='first'/>
                    </div>
                </div>
                <div className="delivery">
                    <h3>DELIVERY DATE: </h3> <hr className='first'/>
                </div>
            </div>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Description</td>
                        <td>Unit</td>
                        <td>Qty</td>
                        <td>Unit Cost</td>
                        <td>Extended Cost</td>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
}

export default Order;