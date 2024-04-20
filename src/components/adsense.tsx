'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: {
      push: () => void;
    };
  }
}

export const AdSense: React.FC = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push();
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3534989499820933"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3534989499820933"
        data-ad-slot="5667844128"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};
