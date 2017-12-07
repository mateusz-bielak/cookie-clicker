import React from 'react';

const StorePanel = () => (
  <div className="store_panel">
    <section>
      <h1 className="store_panel__header">Store</h1>
    </section>
    <section className="store_panel__upgrades">
      <div className="separator">
        <span>Upgrades</span>
      </div>
    </section>
    <section>
      <div className="separator">
        <span>Buildings</span>
      </div>
    </section>
  </div>
);

export default StorePanel;
