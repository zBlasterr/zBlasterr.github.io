/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

function initialize() {
  // A szélességi és magassági kordináták segítségével más helyszínt is megadhatsz.
  const fenway = { lat: 40.7058956, lng: -74.0085924 };
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: fenway,
      zoom: 14
    }
  );
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano") as HTMLElement,
    {
      position: fenway,
      pov: {
        heading: 310,
        pitch: 1
      }
    }
  );

  map.setStreetView(panorama);
}
export { initialize };
