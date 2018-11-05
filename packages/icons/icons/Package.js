
import React, { Component } from 'react';

class PackageIcon extends Component {
  render() {
    var defaults = {
      'aria-hidden': true,
      height: 16,
      width: 16,
      viewBox: '0 0 16 16',
      style: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        fill: 'currentColor',
      },
    };
    const { title, ...props } = this.props;
    return (
      <svg {...defaults} {...props}>
        {title ? <title>{title}</title> : null}
        <path fillRule="evenodd" d="M1 4.732v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97v-7.47c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0l-6.5 1.74c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59v-6.77l6 1.61v6.75zm-6-9.36l2.5-.67 6.5 1.73-2.5.67L2 4.463zm13 7.77l-6 1.59v-6.75l2-.55v2.44l2-.53v-2.44l2-.53v6.77zm-2-7.24l-6.5-1.73 2-.53 6.5 1.73-2 .53z"/>
      </svg>
    );
  }
}
export default PackageIcon;
