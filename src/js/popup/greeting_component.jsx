import React from 'react'
import { hot } from 'react-hot-loader'

class GreetingComponent extends React.Component {
  render () {
    const Logo = 'https://static.nc-myus.com/images/common/ux/myus/logo/myus-page.png'
    const Save = 'https://static.nc-myus.com/images/common/ux/icons/save_icon_2.svg'
    const Check = 'https://static.nc-myus.com/images/common/ux/icons/check_icon.svg'
    const Consolidate = 'https://static.nc-myus.com/images/common/ux/icons/consolidation_icon.svg'
    return (
      <div className='myus_extension'>
        <div className='center'>
          <h3>MyUS Personal Shopper</h3>
          <a class='myus_logo' href='http://www.myus.com' target='_blank' tabIndex='-1'><img src={Logo} /></a>
        </div>
        <div class='myus_close'>X</div>
        <div class='myus_icons'>
          <div class='myus_icon_grid'>
            <div class='myus_icon' id='myus_save'><img src={Save} />
              <p>Discount Shipping Rates</p>
            </div>
            <div class='myus_icon' id='myus_check'><img src={Check} />
              <p>Accepted at USA Retailers</p>
            </div>
            <div class='myus_icon' id='myus_consolidate'><img src={Consolidate} />
              <p>Multiple stores, one shipment</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default hot(module)(GreetingComponent)
