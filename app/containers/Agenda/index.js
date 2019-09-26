/**
 * Agenda
 *
 * This is the page we show when the user visits /agenda/
 *
 */

import React from 'react';
import NavigationComponent from '../../components/navigation';
import PageHeaderComponent from '../../components/pageHeader';


export default function Agenda() {
  return (
    <div>
      <NavigationComponent />
      <PageHeaderComponent />
    </div>
  );
}
