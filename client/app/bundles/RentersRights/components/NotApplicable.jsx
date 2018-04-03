import React from 'react';
import RentersLayout from './RentersLayout'

export default class NotApplicable extends React.Component {

  render() {

  const {} = this.props;

  return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
          </div>

          <div className="row">
             {/* <p>Your address is #{this.state.street}, #{this.state.city}, #{this.state.state} #{this.state.zip}. You seem to live in a building with #{totalUnits} unit(s) that was built #{this.state.yearBuilt} September 7, 1979. </p> */}
             <p>It looks like you may not live in a residence that's covered by by San José's renter's rights policies. To learn more about San José's renter's policies, see below. </p>
             <p><em> If you do not live in San José, or live in unincorporated Santa Clara County land, this website does not cover those policies. </em> Our <a href="/resources/all">Resources</a> page might be helpful; you also consider learning more from the <a href="https://www.sccgov.org/sites/osh/Pages/home.aspx">Santa Clara County's Office of Supportive Housing website</a>.</p>
             <hr/>
             <br/>
             <a href="/rent-increase#menu1">Apartment Rent Ordinance</a><br/>
             <a href="/rent-increase#menu2">Mobile Home Ordinance</a><br/>
             <a href="/rent-increase#menu2">Tenant Protection Ordinance</a><br/>
             <a href="/rent-increase#menu1">Ellis Act Ordinance</a><br/>
          </div>
        </div>

      </RentersLayout>
    )
  }
}
