/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import NavigationComponent from '../../components/navigation';
import './homePage.scss'

export default function HomePage() {
  return (
    <div>
      <NavigationComponent />
      <div className="video-background">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://www.youtube.com/watch?v=5-LyRjHlRgQ" type="video/mp4" />
        </video>
      </div>

    </div>
  );
}
