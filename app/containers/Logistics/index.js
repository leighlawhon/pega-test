/**
 * Logistics
 *
 * This is the page we show when the user visits /logistics/
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function Logistics() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
