# REST API

The Planet OS REST API can be used to integrate disparate spatiotemporal datasets into data-driven applications and workflows. The API provides programmatic access to data at a specific location; responses are provided in JSON format

## Version
The current version of the API is **v1**.

## Authentication
Each Planet OS user is granted a unique API key that is used to authenticate API calls. All API endpoints require this key be passed as a query parameter to authenticate the request. Your key may be viewed on the <a href="http://data.planetos.com/account/settings/" title="View your account settings">Account Settings</a> screen.

<!-- Your API Key is **{{ api_key }}** embed API key here-->

 ## Endpoints

 
 <!-- TBD included from spec -->


 ## Sample Request

[api.planetos.com/datasets/noaa_gfs_global_sflux_0.12d/point?lon=-50.5&amp;lat=49.5&amp;count=1&amp;context=reftime_time_lat_lon&amp;apikey={APIKEY}](http://api.planetos.com/datasets/noaa_gfs_global_sflux_0.12d/point?lon=-50.5&amp;lat=49.5&amp;count=1&amp;context=reftime_time_lat_lon&amp;apikey=)

 ## Sample Response

 ```json
 {
   "stats": {
     "maxCount": 93,
     "offset": 0,
     "count": 1
   },
   "entries": [{
     "context": "reftime_time_lat_lon",
     "axes": {
       "reftime": "2016-02-23T06:00:00",
       "time": "2016-02-23T06:00:00",
       "longitude": -50.507659912109375,
       "latitude": 49.495601654052734
     },
     "data": {
       "Total_cloud_cover_convective_cloud": 0.0,
       "Downward_Short-Wave_Radiation_Flux_surface": 0.0,
       "Planetary_Boundary_Layer_Height_surface": 251.0,
       "Aerodynamic_conductance_surface": 0.006099999882280827,
       "Temperature_surface": 271.6570129394531,
       "Land_cover_0__sea_1__land_surface": 0.0,
       "Pressure_surface": 100830.0,
       "Upward_Short-Wave_Radiation_Flux_surface": 0.0,
       "Latent_heat_net_flux_surface": -1.0,
       "Geopotential_height_surface": -0.004031249787658453,
       "Surface_roughness_surface": 0.00009999999747378752,
       "Percent_of_Frozen_Precipitation_surface": 0.8999999761581421,
       "Water_equivalent_of_accumulated_snow_depth_surface": 0.0,
       "Ice_thickness_surface": 0.0,
       "Upward_Long-Wave_Radp_Flux_surface": 300.0,
       "Exchange_Coefficient_surface": 0.007799999788403511,
       "Sensible_heat_net_flux_surface": -6.0,
       "Frictional_Velocity_surface": 0.20200000703334808,
       "Downward_Long-Wave_Radp_Flux_surface": 295.0,
       "Ice_cover_surface": 0.0,
       "Precipitable_water_entire_atmosphere_single_layer": 14.100000381469727
     }
   }]
 }
 ```

## Rate Limits
The REST API is rate limited to **500 calls per day**.

If you'd like to request a rate limit increase, please contact <a href="mailto:help@planetos.com" title="Contact Planet OS support staff to request a rate limit increase.">help@planetos.com</a> with more information on your needs.

## Policies 
By using the Planet OS REST API, you agree to our <a href="http://data.planetos.com/terms" title="Planet OS Terms of Service">terms of service</a>. Please take a moment to review the terms.

Datasets delivered via Planet OS data access interfaces may be subject to third party licenses that govern acceptable end-uses of the data. If you are unsure of a dataset's license or restrictions, we encourage you to contact the data publisher directly for clarification.

Planet OS reserves the right to suspend or terminate accounts that violate our policies. If you're a mindful and considerate developer, this shouldn't be an issue for you.