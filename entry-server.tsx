import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';
export function render(path: string) {
  const context: any = {};
  const html = renderToString(<HelmetProvider context={context}><StaticRouter location={path}><AppContent /></StaticRouter></HelmetProvider>);
  const helmet = context.helmet;
  return { html, head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString() };
}
