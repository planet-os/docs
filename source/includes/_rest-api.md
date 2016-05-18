# REST API (v1)
The Planet OS REST API can be used to integrate disparate spatiotemporal datasets into data-driven applications and workflows. The API provides programmatic access to data at a specific location and delivers JSON responses.

## Authentication
Each Planet OS user is granted a unique API key that is used to authenticate API calls. All API endpoints require this key be passed as a query parameter to authenticate the request. Your key may be viewed on the [Account Settings](http://data.planetos.com/account/settings/ "View your account settings") screen and is provided below if you're currently logged in.

Your API Key is:
<strong class="apikey-placeholder"><a href="http://data.planetos.com/plans" title="Sign up for a Planet OS account" target="_blank">Create an account to receive an API Key</a></strong>

### Example of an Authenticated HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}?apikey={apikey}`

## Metadata Summary Endpoint 
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d"

querystring = {"apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d',
  qs: { apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

> The above command returns JSON structured like this:

```json
{
  "Title":"HYCOM (Hybrid Coordinate Ocean Model) global ocean forecast",
  "Source":"Operational ocean model output",
  "Publisher":"HYCOM consortium",
  "Institution":"HYCOM consortium",
  "Abstract":"The HYCOM consortium is a multi-institutional effort [...]",
  "UpdateFrequency":"24 h",
  "FeatureType":"climatologyMeteorologyAtmosphere",
  "ProductType":"Forecast",
  "Refreshed":"2016-04-18T12:43:13",
  "TemporalResolution":"3 hours",
  "SpatialResolution":"1/12 degrees",
  "SpatialExtent":{
    "type":"MultiPolygon",
    "coordinates":[[[[-0.5, 85.5 ], [-0.5, 80.5 ], [-1.5, 80.5 ], "..." ] ] ] },
  "SpatialExtentText":null,
  "SpatialReferenceSystem":"WGS84",
  "VerticalExtent":"40 levels from surface to 5000 m below the surface",
  "TemporalExtentStart":"",
  "TemporalExtentEnd":"Ongoing",
  "Licence":"Open data",
  "LicenceType":"open",
  "DistributionFormat":"thredds, ftp",
  "OnlineResource":[ "http://hycom.org/" ],
  "DataVendorKey":null,
  "Variables":[
    {
      "name":"time",
      "longName":"Valid Time",
      "standardName":null,
      "unit":"microseconds since 1970-01-01 00:00:00",
      "isData":false,
      "isCoord":true,
      "isInfo":false
    },
    {
      "name":"lat",
      "longName":"Latitude",
      "standardName":"latitude",
      "unit":"degrees_north",
      "isData":false,
      "isCoord":true,
      "isInfo":false
    },
    {
      "name":"lon",
      "longName":"Longitude",
      "standardName":"longitude",
      "unit":"degrees_east",
      "isData":false,
      "isCoord":true,
      "isInfo":false
    },
    {
      "name":"salinity",
      "longName":"Salinity",
      "standardName":"sea_water_salinity",
      "unit":"psu",
      "isData":true,
      "isCoord":false,
      "isInfo":false
    }
  ]
}
```
### HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}`

This API endpoint serves our dataset detail page and matches details described in [Dataset Summary](#summary) section above.

__Title__: The title or name of the dataset.

__Abstract__: A short summary of the dataset.

__Publisher__: The party from whom the dataset was acquired.

__Institution__: The party who created the dataset.

__Source__: The method of production of the original data. If it was model-generated, source should name the model and its version, as specifically as could be useful. If it is observational, source should characterize it (e.g., 'surface observation' or 'radiosonde').

__ProductType__: Method how data is being produced — observed, modeled, hindcast, reanalysis, etc. More generic than the "Source"

__Refreshed__: Indicate the timestamp at which point system last acquired new data from the publisher

__DistributionFormat__: Available distribution formats as free text

__FeatureType__: Scientific feature type or CDM data type (e.g. GRID, RADIAL, SWATH, IMAGE, ANY_POINT, POINT, PROFILE, SECTION, STATION, STATION_PROFILE, TRAJECTORY)

__License__: Original data access/use license

__LicenseType__: Original data access/use license type — one of (commercial, open) string

__OnlineResource__: Available distribution URLs for original data

__SpatialExtent__: Extent, polygon or multipolygon in GeoJSON notation

__SpatialExtentText__: Free text description of spatial coverage

__SpatialReferenceSystem__: WGS84 or similar

__SpatialResolution__: Spatial resolution of gridded data in meters, decimal degrees or free text

__SpatialResolutionVertical__: Vertical resolution of gridded data in meters, decimal degrees or free text

__TemporalExtentStart__: Temporal extent start time in ISO8601 text format

__TemporalResolution__: Temporal resolution of gridded data in time units or free text

__TemporalextentEnd__: Temporalextent end time in ISO8601 text format OR 'ongoing'

__UpdateFrequency__: How frequently is data updated at its origin. Mostly for regularly updating automatic data

__Variables__: List of variables

__VerticalExtent__: Vertical extent description as text

## Point Data Endpoint
Provides values for the specified dataset at a given point of interest. Points are expressed using longitude and latitude coordinates in decimal degrees.

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point?lon=-50.5&lat=49.5&apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point"

querystring = {"lon":"-50.5","lat":"49.5","apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point',
  qs: { lon: '-50.5', lat: '49.5', apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

> The above command returns JSON structured like this:

```json
{
  "stats": {
    "offset": 0,
    "count": 1
  },
  "entries": [{
    "context": "reftime_time_lat_lon",
    "axes": {
      "reftime": "2016-04-24T12:00:00",
      "time": "2016-04-24T12:00:00",
      "longitude": -49.99999999999997,
      "latitude": 50.0
    },
    "data": {
      "Wind_speed_surface": 4.409999847412109,
      "Wind_direction_from_which_blowing_surface": 171.86000061035156,
      "v-component_of_wind_surface": 4.360000133514404,
      "u-component_of_wind_surface": -0.6200000047683716,
      "Direction_of_wind_waves_surface": 98.7699966430664,
      "Primary_wave_mean_period_surface": 10.760000228881836,
      "Primary_wave_direction_surface": 94.48999786376953,
      "Significant_height_of_wind_waves_surface": null,
      "Mean_period_of_wind_waves_surface": 9.59000015258789,
      "Secondary_wave_mean_period_surface": null,
      "Significant_height_of_combined_wind_waves_and_swell_surface": 2.1500000953674316,
      "Secondary_wave_direction_surface": null
    }
  }, {
    "context": "reftime_time_lat_lon_ordered_sequence_of_data",
    "axes": {
      "latitude": 50.0,
      "reftime": "2016-04-24T12:00:00",
      "longitude": -49.99999999999997,
      "time": "2016-04-24T12:00:00",
      "iter_ordered_sequence_of_data": 0.0
    },
    "data": {
      "Direction_of_swell_waves_ordered_sequence_of_data": 148.16000366210938,
      "Mean_period_of_swell_waves_ordered_sequence_of_data": 9.539999961853027,
      "Significant_height_of_swell_waves_ordered_sequence_of_data": 0.9599999785423279
    }
  }]
}
```

#### HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}/point?lon=&lat=`

#### HTTP Query Parameters

<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">lat</div>
                    <div class="item required">required</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Latitude in decimal degrees. North latitude is positive.</div>
                    <div class="item example">37.383252</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">lon</strong></div>
                    <div class="item required">required</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Longitude in decimal degrees. East longitude is positive.</div>
                    <div class="item example">-122.005152</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">z</strong></div>
                    <div class="item optional">optional</div>
                    <div class="item default">first</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Altitude/depth axis. Is not defined by specific unit, instead allows to select "first", "last" or "all" altitude/depth data "layers"</div>
                    <div class="item example">(all, first, last)</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">var</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Name of the specific variable obtained via metadata query.</div>
                    <div class="item example">water_temp</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">csv</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Format the response as comma separated values (CSV).</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">buffer</div>
                    <div class="item optional">optional</div>
                    <div class="item default">0</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Search bounding box in decimal degrees. Data with coordinates within this <em>buffer</em> will be returned.</div>
                    <div class="item example">1.0</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">context</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If multiple axes contexts are provided for a dataset, use <em>context</em> to limit which are returned. Multiple contexts can be passed using comma separation. All available contexts are returned by default.</div>
                    <div class="item example">main</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">count</div>
                    <div class="item optional">optional</div>
                    <div class="item default">1</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">The total number of results to return.</div>
                    <div class="item example">100</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">offset</div>
                    <div class="item optional">optional</div>
                    <div class="item default">0</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Offset the returned results by a specific count.</div>
                    <div class="item example">100</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">start</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Return values at or after this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
                    <div class="item example">2016-04-05T14:30Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">end</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Return values at or before this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
                    <div class="item example">2016-04-11T15:30:00Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">nearest</div>
                    <div class="item optional">optional</div>
                    <div class="item default">true</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If <em>true</em>, return data only from the point nearest the requested latitude and longitude. By default, this value is true and the nearest point is returned, however if a buffer value is passed, nearest will default to <em>false</em>.</div>
                    <div class="item example">false</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">reftime_end</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Return values at or before this reference timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
                    <div class="item example">2016-04-11T15:30:00Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">reftime_recent</div>
                    <div class="item optional">optional</div>
                    <div class="item default">true</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If <em>true</em>, returns the full forecast duration using values from the latest available reference time (e.g. most recent). If a partial forecast exists due to processing delays, values from the previous reference time are also included. If either <em>reftime_start</em> or <em>reftime_end</em> values are passed, <em>reftime_recent</em> will default to false.</div>
                    <div class="item example">false</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">reftime_start</div>
                    <div class="item optional">optional</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Return values at or after this reference timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
                    <div class="item example">2016-04-05T14:30Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">meta</div>
                    <div class="item optional">optional</div>
                    <div class="item default">false</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If true, display global metadata.</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">entry_meta</div>
                    <div class="item optional">optional</div>
                    <div class="item default">false</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If true, display entry metadata.</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">entry_lineage</div>
                    <div class="item optional">optional</div>
                    <div class="item default">false</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If true, display entry lineage.</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">verbose</div>
                    <div class="item optional">optional</div>
                    <div class="item default">false</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">If true, display all available metadata.</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
    </tbody>
</table>

## API Console
[API Console](http://api.planetos.com/console/) provides simple UI for building API query interactively.
It has short descriptions of query parameters and output JSON schema.
If the user enters his personal API key into an appropriate query field, API Console allows to execute that query and see results.

<a href="images/API-Console-preview.png" data-featherlight><img src="images/API-Console-preview.png" alt="API Console"/></a>

<a href="images/API-Console-execute-query.png" data-featherlight><img src="images/API-Console-execute-query.png" alt="API Console"/></a>

<a href="images/API-Console-results.png" data-featherlight><img src="images/API-Console-results.png" alt="API Console"/></a>

## Rate Limits
API rate limits are dependent on your current [plan](http://data.planetos.com/plans). Free accounts are limited to **100 calls per day.**

If you'd like to request a rate limit increase, please contact [help@planetos.com](mailto:help@planetos.com "Contact Planet OS support staff to request a rate limit increase.") with more information on your needs.

## Policies 
By using the Planet OS REST API, you agree to our [terms of service](http://data.planetos.com/terms "Planet OS Terms of Service"). Please take a moment to review the terms.

Datasets delivered via Planet OS data access interfaces may be subject to third party licenses that govern acceptable end-uses of the data. If you are unsure of a dataset's license or restrictions, we encourage you to contact the data publisher directly for clarification.

Planet OS reserves the right to suspend or terminate accounts that violate our policies. If you're a mindful and considerate developer, this shouldn't be an issue for you.
