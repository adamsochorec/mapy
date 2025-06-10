# Maps

[![Deploy to GitHub Pages](https://github.com/adamsochorec/maps/actions/workflows/deploy.yml/badge.svg)](https://github.com/adamsochorec/maps/actions/workflows/deploy.yml)

## Who?

The UI was developed by [Adam Sochorec](https://www.linkedin.com/in/adamsochorec) in February 2022, and data collection began in 2021.

## Why?

While using [Strava](https://www.strava.com) to track routes, it became evident that it lacked a human touch—such as marking sleepovers, stops, and daily trip segmentation. The visual design also needed improvement. This project enhances recorded routes with additional details and better visual representation.

## When?

Data has been collected since 2021, and the UI was developed in February 2022.

## What?

A personal mapping project that integrates Strava-recorded routes with custom open-source maps. The project allows for better segmentation of trips, marking of significant waypoints, and improved visualization. Each route includes links to original Strava posts for further insights.

## How?

Built as a simple Vue.js and TypeScript application using [PrimeVue](https://www.primevue.org) components. Outputs data in GeoJSON format and renders maps with a [Leaflet](https://leafletjs.com)-based [Thunderforest API](https://www.thunderforest.com). Strava records were initially in GPX format and processed via Python into simplified GeoJSON arrays, manually segmented into days and significant waypoints.

## Project Setup

```sh
cd frontend
npm install # Install Node
npm run dev # Compile and Hot-Reload for Development
npm run build # Type-Check, Compile and Minify for Production
```

## Project Deployment

```sh
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages
```
