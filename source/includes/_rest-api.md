# REST API (v1)
The Planet OS REST API can be used to integrate disparate spatiotemporal datasets into data-driven applications and workflows. The API provides programmatic access to data at a specific location and delivers JSON responses.

## Authentication
Each Planet OS user is granted a unique API key that is used to authenticate API calls. All API endpoints require this key be passed as a query parameter to authenticate the request. Your key may be viewed on the [Account Settings](http://data.planetos.com/account/settings/ "View your account settings") screen and is provided below if you're currently logged in.

Your API Key is:
<strong class="apikey-placeholder"><a href="http://data.planetos.com/plans" title="Sign up for a Planet OS account" target="_blank">Create an account to receive an API Key</a></strong>

### Example of an Authenticated HTTP Request
`GET http://api.planetos.com/v1/datasets?apikey={apikey}`

## Dataset Endpoints

<h3 id="dataset-list">/datasets</h3>

> Request a list of all dataset IDs available in the system. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets"

querystring = {"apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

# response.text is raw output
result = response.json()  # turn JSON into python data structure
print result
```

```javascript
var request = require("request");
// npm install request

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets',
  qs: { apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  // console.log(body);
  var result = JSON.parse(body)
  console.log(result)
});

```

```matlab
apikey = '{apikey}'
api_root_url = 'http://api.planetos.com/v1/'

dataset_meta_url = sprintf('%sdatasets', api_root_url)
list_of_ds_ids = webread(dataset_meta_url, 'apikey', apikey)
disp(list_of_ds_ids)

```

> The above command returns JSON structured like this:

```json
[
  "nasa_grctellus_ocean",
  "nasa_gldas_lwc_monthly",
  "noaa_ndbc_swden_stations",
  "myocean_sst_europe_daily",
  "nasa_ghrsst_global_daily",
  "noaa_ww3_ak",
  "noaa_nam_hawaii",
  "nasa_3imerghhl",
  "socib_forecast_western_mediterranean_daily",
  "metoffice_glosea5_global_daily",
  "nasa_3imerghhe",
  "noaa_ndbc_adcp_station",
  "rss_ccmp_winds_v2",
  "cmems_gwind",
  "noaa_ww3_nah",
  "noaa_nam_ca",
  "nasa_grctellus_land",
  "noaa_etopo_global_1arcmin",
  "noaa_icoads_enhanced_1d_day",
  "myocean_sst_baltic_daily",
  "noaa_gfs_global_sflux_0.12d",
  "noaa_blended_sea_winds_6hr_global_0.25d",
  "noaa_ww3_global_1.25x1d",
  "noaa_ww3_wc",
  "noaa_ww3_ao",
  "noaa_nam_prico",
  "noaa-ncep_gefs",
  "noaa_ww3_nph",
  "noaa_ndbc_stdmet_stations",
  "bom_access-g_global_40km",
  "noaa_nam_alaska",
  "noaa_nam_north_pacific",
  "copernicus_biogeo_baltic_hourly",
  "noaa_nam_awips_phys",
  "nasa_oscar_global_5day",
  "copernicus_goba_global_weekly",
  "noaa_ww3_at",
  "nasa_3imerghh",
  "pacioos_swan_oahu",
  "noaa_ww3_hurricane_ep",
  "noaa_ww3_hurricane_at",
  "noaa_ndbc_cwind_stations",
  "noaa_ww3_ep",
  "noaa_ww3_hurricane_ak",
  "noaa_ww3_hurricane_wc",
  "hycom_glbu0.08_91.2_global_0.08d",
  "noaa_nam_awips_12"
]
```

Get list of all dataset IDs.

#### HTTP REQUEST
`GET http://api.planetos.com/v1/datasets?apikey={apikey}`

#### RESPONSE
A flat list where each item is a plain text dataset ID.

### /datasets/{id}

> Request metadata for the [`hycom_glbu0.08_91.2_global_0.08d`](http://data.planetos.com/datasets/hycom_glbu0.08_91.2_global_0.08d:hycom-hybrid-coordinate-ocean-model-global-ocean-forecast) dataset. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/hycom_glbu0.08_91.2_global_0.08d?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/hycom_glbu0.08_91.2_global_0.08d"

querystring = {"apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

# response.text is raw output
result = response.json()  # turn JSON into python data structure
print result['Title']
```

```javascript
var request = require("request");
// npm install request

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/hycom_glbu0.08_91.2_global_0.08d',
  qs: { apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  // console.log(body);
  var result = JSON.parse(body)
  console.log(result.Title)
});

```

```matlab
apikey = '{apikey}'
dataset_id = 'hycom_glbu0.08_91.2_global_0.08d'
api_root_url = 'http://api.planetos.com/v1/'

dataset_meta_url = sprintf('%sdatasets/%s', api_root_url, dataset_id)
metadata = webread(dataset_meta_url, 'apikey', apikey)
disp(metadata.Title)

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

Get dataset metadata.

#### HTTP REQUEST
`GET http://api.planetos.com/v1/datasets/{id}?apikey={apikey}`

#### RESPONSE

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

### /datasets/{id}/point

> Request values from the [`noaa_ww3_global_1.25x1d`](http://data.planetos.com/datasets/noaa_ww3_global_1.25x1d:noaa-wave-watch-iii-nww3-ocean-wave-model) dataset at a specific point coordinate. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point?lon=-50.5&lat=49.5&apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point"

querystring = {"lon":"-50","lat":"50","apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/point',
  qs: { lon: '-50', lat: '50', apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

```matlab
apikey = '{apikey}'
dataset_id = 'noaa_ww3_global_1.25x1d'
api_root_url = 'http://api.planetos.com/v1/'

dataset_point_url = sprintf('%sdatasets/%s/point', api_root_url, dataset_id)
rest_data = webread(dataset_point_url, 'apikey', apikey, 'lon', -50, 'lat', 50)

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

Provides values for the specified dataset at a given point of interest. Points are expressed using longitude and latitude coordinates in decimal degrees.

#### HTTP REQUEST
`GET http://api.planetos.com/v1/datasets/{id}/point?apikey={apikey}`

#### HTTP QUERY PARAMETERS

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
                    <div class="item description">Sets a lower time boundary for dataset values. Return values at or after this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
                    <div class="item example">2016-04-05T14:30:00Z</div>
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
                    <div class="item description">Sets an upper time boundary for dataset values. Return values at or before this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</div>
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

### /datasets/{id}/stations

> Request stations within the [`noaa_ndbc_stdmet_stations`](http://data.planetos.com/datasets/noaa_ndbc_stdmet_stations:ndbc-standard-meteorological-data) dataset. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations"

querystring = {"apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations',
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
  "station": {
    "45017": {
      "TemporalExtentStart": "2011-08-08T21:00:00",
      "TemporalExtentEnd": "2011-09-05T02:00:00",
      "SpatialExtent": {
        "type": "Point",
        "coordinates": [-88.0, 42.0]
      }
    },
    "46252": {
      "TemporalExtentStart": "2014-10-01T20:35:00",
      "TemporalExtentEnd": "2015-12-03T17:05:00",
      "SpatialExtent": {
        "type": "Point",
        "coordinates": [-119.0, 34.0]
      }
    },
    "42390": {
      "TemporalExtentStart": "2012-10-01T00:30:00",
      "TemporalExtentEnd": "2016-06-20T22:30:00",
      "SpatialExtent": {
        "type": "Point",
        "coordinates": [-95.0, 26.0]
      }
    },
    "keca2": {
      "TemporalExtentStart": "2009-05-06T19:12:00",
      "TemporalExtentEnd": "2016-06-20T23:12:00",
      "SpatialExtent": {
        "type": "Point",
        "coordinates": [-132.0, 55.0]
      }
    },
    "bltm2": {
      "TemporalExtentStart": "2005-01-07T01:48:00",
      "TemporalExtentEnd": "2016-06-20T18:54:00",
      "SpatialExtent": {
        "type": "Point",
        "coordinates": [-77.0, 39.0]
      }
    }
  }
}
```
Get the list of stations within a dataset. _Note that not all datasets contain stations._

#### HTTP REQUEST
`GET http://api.planetos.com/v1/datasets/{id}/stations?apikey={apikey}`

#### RESPONSE

A JSON object where every key inside `station` structure is station identifier.

Station attributes like `TemporalExtentStart`, `TemporalExtentEnd`, `SpatialExtent` indicating spatial and temporal bounds of time-series data originated from the station.

### /datasets/{id}/stations/{station_id}

> Request values from station `keca2` within the [`noaa_ndbc_stdmet_stations`](http://data.planetos.com/datasets/noaa_ndbc_stdmet_stations:ndbc-standard-meteorological-data) dataset. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
export STATION_ID=keca2
curl --request GET \
  --url http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/$STATION_ID?apikey={apikey}
```

```python
import requests
station_id = 'keca2'

url = "http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/%s" % (station_id)

querystring = {"apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");
var station_id = 'keca2';

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/' + station_id,
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
  "stats": {
    "offset": 0,
    "count": 1
  },
  "entries": [{
    "context": "time_latitude_longitude",
    "classifiers": {
      "station": "keca2"
    },
    "axes": {
      "time": "2014-01-01T00:00:00",
      "longitude": -131.625,
      "latitude": 55.33100128173828
    },
    "data": {
      "wave_height": null,
      "sea_surface_temperature": 6.599999904632568,
      "gust": 4.400000095367432,
      "wind_spd": 2.0,
      "water_level": null,
      "dewpt_temperature": null,
      "air_temperature": 7.199999809265137,
      "air_pressure": 1020.2999877929688,
      "wind_dir": 112.0,
      "average_wpd": null,
      "visibility": null,
      "dominant_wpd": null,
      "mean_wave_dir": null
    }
  }]
}
```

Get values for a station. _Note that not all datasets contain stations._

#### HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}/stations/{station_id}?apikey={apikey}`

#### HTTP Query Parameters
Accepts the same query parameters as the [Point Endpoint](#point-endpoint).

#### Response
Response format is similar to the [Point Endpoint](#point-endpoint).

## API output format

### API entry

Let's start with an API output example for the GFS forecast by taking one variable `Temperature_hybrid` from the list of 200+ variables. Use of single variable will make the example more readable.

```json
{
  "stats": {
    "timeMin": "2016-09-06T18:00:00",
    "count": 1,
    "offset": 0,
    "nextOffset": 1,
    "timeMax": "2016-09-22T18:00:00"
  },
  "entries": [{
    "context": "reftime_time_hybrid_lat_lon",
    "axes": {
      "latitude": 49.495601654052734,
      "reftime": "2016-09-06T18:00:00",
      "longitude": -50.507659912109375,
      "time": "2016-09-06T18:00:00",
      "z": 1.0
    },
    "data": {
      "Temperature_hybrid": 286.1189880371094
    }
  }]
}
```

Let's start with an API output example for the GFS forecast by taking one variable `Temperature_hybrid` from the list of 200+ variables. Use of single variable will make the example more readable.

Root entries are `stats` and `entries`. Stats just describes user's query. Usually, it duplicates query parameters (like `count` and `start`/`end`), but in case user omits the use of some query parameters this section shows defaults that were used.
Entries section is a list of data samples selected by API query. In the example above we use default `count` setting which is `1`. So we have a single entry.
Every entry has assigned XYZ and two timestamp coordinates as a part of `axes` object. It is easy to notice that Reftime is always same as Time for observational datasets, unlike GFS in our example, which is forecast.
So Reftime coordinate is only useful for forecasts and some modelled datasets, where timestamp of dataset entry creation is different from the timestamp that dataset entry is describing.
Data section of every entry may contain more than one variable. It is possible to query all variables from any dataset by just omitting `var` parameter.
Please take into account that variables are grouped by `context`. See more details about Contexts in a next section.

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
