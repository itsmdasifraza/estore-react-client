import React from 'react'
import "./Shop.css";
const Shop = () => {
  return (
    <>  
        <main>
      <aside>
        <section>
          <title>Rating</title>
          <input onChange="filterCategory()"
            type="range"
            id="range"
            min="0"
            max="5"
            value="0"
            list="values"
          />
          <datalist id="values">
            <option value="0" label="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5" label="5"></option>
          </datalist>
        </section>
        <section>
          <title>Price Range</title>
          <ul style={{paddingLeft: 0}} >
            <li>
              <input id="0-25" onClick="setRange(this.value)" value="0-25" type="checkbox" name="prange" />
              <label for="0-25">$0 to $25</label>
            </li>
            <li>
              <input id="25-50" onClick="setRange(this.value)" value="25-50" type="checkbox" name="prange" />
              <label for="25-50">$25 to $50</label>
            </li>
            <li>
              <input id="50-100" onClick="setRange(this.value)" value="50-100" type="checkbox" name="prange" />
              <label for="50-100">$50 to $100</label>
            </li>
            <li>
              <input id="100on" onClick="setRange(this.value)" value="100on" type="checkbox" name="prange" />
              <label for="100on">$100 onwards</label>
            </li>
          </ul>
        </section>
      </aside>
      <main-content>
    
          <input type="text"  placeholder="Search" id="search" />
        
        <div className="filters">
          <div id="all" onClick="allProducts(this)" className="filter active">All</div>
          <div id="mens" onClick="onlyMens(this)" className="filter">Mens</div>
          <div id="womens" onClick="onlyWomens(this)" className="filter">Womens</div>
          <div id="jewellery" onClick="onlyJewellery(this)" className="filter">Jewellery</div>
          <div id="electronics" onClick="onlyElectronics(this)" className="filter">Electronics</div>
        </div>
        <section id="product-items">
        </section>
      </main-content>
    </main>
    </>
  )
}

export default Shop;