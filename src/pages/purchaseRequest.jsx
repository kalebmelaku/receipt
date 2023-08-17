import React from "react";
import Header from "../components/header";

function Request() {
	function handlePrint() {
		window.print();
	}
	return (
		<div className="purchase">
			<button className="printBtn btn" onClick={handlePrint}>
				Print
			</button>
			<Header page="PURCHASE REQUEST" />
			<div className="info">
				<div>
					<h3>Requesting Program</h3>
					<hr />
				</div>
				<div>
					<h3>Donor</h3>
					<hr />
				</div>
			</div>
			<table className="table request_table" border={0}>
				<tbody>
					<tr>
						<td>Item #</td>
						<td>Description</td>
						<td>Quantity</td>
						<td>Unit</td>
						<td>Grant Code</td>
						<td>Grant Line Code</td>
						<td>Project Code</td>
						<td>Account Code</td>
						<td>Estimated Total Price</td>
						<td>Actual Total Price</td>
						<td>Project End Date</td>
					</tr>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
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
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<p>
				Delivery Address/ Point of Contact/ Special Instructions Purchase will
				Processed if actual cost is the looser fo 10% of $500 more than
				estimated cost. If greater PR must be reviewed & re-approved. include
				any doner-specific procedure regulation. if any
			</p>
			<div className="date">
				<p>Date Required By:</p>
			</div>
      <div className="clr"></div>
      <div className="grids">
        <div className="grid">
          <h3>Requested By: </h3>
        </div>
        <div className="grid">
          <h3>Technical Review</h3>
          <h4>(If required)</h4>
        </div>
        <div className="grid">
          <h3>Financial Review</h3>
        </div>
        <div className="grid last-grid">
          <div>
          <h3>Approval</h3>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="request-footer">
        <div>
          <h5>PO's Issued (Lorem ipsum dolor sit amet.)</h5>
        </div>
        <div>
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
		</div>
	);
}

export default Request;
