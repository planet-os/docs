# REST API (v1)
The Planet OS REST API can be used to integrate disparate spatiotemporal datasets into data-driven applications and workflows. The API provides programmatic access to data at a specific location and delivers JSON responses.

## Authentication
Each Planet OS user is granted a unique API key that is used to authenticate API calls. All API endpoints require this key be passed as a query parameter to authenticate the request. Your key may be viewed on the [Account Settings](http://data.planetos.com/account/settings/ "View your account settings") screen and is provided below if you're currently logged in.

Your API Key is:
<strong class="apikey-placeholder"><a href="http://data.planetos.com/plans" title="Sign up for a Planet OS account" target="_blank">Create an account to receive an API Key</a></strong>

### Example of an Authenticated HTTP Request
`GET http://api.planetos.com/v1/datasets?apikey={apikey}`

## Search & Discovery Endpoints

### Dataset Search

> Search and filter datasets index by keyword and facet. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/search/text?q=temperature&apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/search/text"

querystring = {
  "apikey":"{apikey}",
  "q": "temperature"
}

response = requests.request("GET", url, params=querystring)

# response.text is raw output
result = response.json()  # turn JSON into python data structure
print result
```

```javascript
var request = require("request");
// npm install request

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/search/text',
  qs: { apikey: '{apikey}', q: 'temperature' },
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

all_variables_url = sprintf('%ssearch/text', api_root_url)
list_of_variables = webread(all_variables_url, 'apikey', apikey, 'q', 'temperature')
disp(list_of_variables)

```

> The above command returns JSON structured like this (sample):

```json
{
  "count": 10,
  "isError": false,
  "searchedPolygons": [],
  "results": [
    {
      "key": "nasa_ghrsst_global_daily",
      "title": "GHRSST Level 4 G1SST Global Foundation Sea Surface Temperature Analysis",
      "summary": "A Group for High Resolution Sea Surface Temperature (GHRSST) …",
      "UpdateFrequency": "1 day",
      "timeCoverage": [{
        "timeFrom": "2016-10-01T00:00:00+0000",
        "timeTo": "2016-10-31T00:00:00+0000"
      }],
      "TemporalResolution": "1 day",
      "ProductType": "Analysis",
      "SpatialResolution": "0.009 degrees",
      "FeatureType": "GRID",
      "snippets": [],
      "geoCoverage": [
        {
          "type": "MultiPolygon",
          "coordinates": [[[[-179.9, 80.5], [-179.9, -80.5], [179.9, -80.5], [179.9, 80.5], [-179.9, 80.5] ] ] ]
        }
      ]
    }
  ]
}
```

Filter dataset index by specified criteria. It supports free text search as well as predefined facets, like a variable, time range, spatial and temporal resolution, publisher, dataset type (time-series, grid), data product type (forecast, observation, model, etc.)

#### HTTP REQUEST

`GET http://api.planetos.com/v1/search/text?q=temperature&apikey={apikey}`

<h4 id="http-query-parameters-facets">HTTP QUERY PARAMETERS</h4>

<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">variable</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Filter by variable key</div>
                    <div class="item example">WIND_SPEED</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">variable_partial</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Partial variable key match</div>
                    <div class="item example">wind</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">after</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Time range start</div>
                    <div class="item example">2016-10-01</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">before</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Time range end</div>
                    <div class="item example">2016-11-10</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">product_type</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Type of data rroduct</div>
                    <div class="item example">MODEL | OBSERVATION | FORECAST</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">feature_type</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Data type</div>
                    <div class="item example">GRID | TIMESERIES</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">publisher</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Data publisher</div>
                    <div class="item example">COPERNICUS</div>
                </div>
            </td>
        </tr>
    </tbody>
</table>

#### RESPONSE
The response includes a `count` of matches, a list of matched datasets (`results`) with dataset IDs (`key`) and a set of metadata attributes.

### Search facet values
> Request a list of all facets available in the system. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/browse/open/variables?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/browse/open/variables"

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
  url: 'http://api.planetos.com/v1/browse/open/variables',
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

all_variables_url = sprintf('%sbrowse/open/variables', api_root_url)
list_of_variables = webread(all_variables_url, 'apikey', apikey)
disp(list_of_variables)

```

> The above command returns JSON structured like this (sample):

```json
[
  ["WNDGUST10M", "10m wind gust"],
  ["WIND_SPEED", "10m wind speed"],
  ["ATMP", "ATMOSPHERIC_PRESSURE"],
  ["DEWPT_TEMPERATURE", "Dew Point Temperature"],
  ["DEWPOINT_TEMPERATURE_HYBRID", "Dewpoint temperature @ Hybrid level"],
  ["NITRATE", "Nitrate_Concentration"],
  ["WATER_V", "Northward Water Velocity"],
  ["WATER_U", "Eastward Water Velocity"],
  ["UV-B_DOWNWARD_SOLAR_FLUX_SURFACE_12_HOUR_AVERAGE", "UV-B Downward Solar Flux (12_Hour Average) @ Ground or water surface"],
  ["WATER_TEMP", "Water Temperature"]
]
```

Dataset search is enhanced with additional faced-based filtering. To take advantage of it, please use these API endpoints which list all possible facet values.

**[Table of matching search parameters](#http-query-parameters-facets).**

#### HTTP REQUEST

`GET http://api.planetos.com/v1/browse/open/variables?apikey={apikey}`

`GET http://api.planetos.com/v1/browse/open/filters/SpatialResolution?apikey={apikey}`

`GET http://api.planetos.com/v1/browse/open/filters/TemporalResolution?apikey={apikey}`

`GET http://api.planetos.com/v1/browse/open/filters/ProductType?apikey={apikey}`

`GET http://api.planetos.com/v1/browse/open/filters/FeatureType?apikey={apikey}`

`GET http://api.planetos.com/v1/browse/open/filters/Publisher?apikey={apikey}`

#### RESPONSE
A list of facets key value tuple pairs. The key is for making API queries, while value might be used as a human-friendly facet representation for UIs, data visualizations, etc.

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
`GET http://api.planetos.com/v1/datasets/{id}/point?lon={longitude}&lat={latitude}apikey={apikey}`

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
                    <div class="item description">If multiple axes contexts are provided for a dataset, use <em>context</em> to limit which are returned. Multiple contexts can be passed using comma separation. All available contexts are returned by default. More details are in the <a href="#data-point-context">Context section</a>.</div>
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
                    <div class="item description">The total number of results (data samples) to return. Single sample is identified by unique LonLat coordinate and timestamp. Variables from a single sample can be split into <a href="#data-point-context">contexts</a>.</div>
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
                    <div class="item name">time_order</div>
                    <div class="item optional">optional</div>
                    <div class="item default">asc</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Orders samples in the API output by "time" dimension.</div>
                    <div class="item example">desc</div>
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

#### RESPONSE

Response format is documented in a separate section — [Data Values Output Format](#data-values-output-format).

### /datasets/{id}/area

> Request values from the [`noaa_ww3_global_1.25x1d`](http://data.planetos.com/datasets/noaa_ww3_global_1.25x1d:noaa-wave-watch-iii-nww3-ocean-wave-model) dataset at a specific point coordinate. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/area?polygon=[[-94,26],[-94,23],[-96,23],[-96,26],[-94,26]]&apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/area"

querystring = {"polygon": "[[-94,26],[-94,23],[-96,23],[-96,26],[-94,26]]","apikey":"{apikey}"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/datasets/noaa_ww3_global_1.25x1d/area',
  qs: { polygon: '[[-94,26],[-94,23],[-96,23],[-96,26],[-94,26]]', apikey: '{apikey}' },
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

dataset_point_url = sprintf('%sdatasets/%s/area', api_root_url, dataset_id)
rest_data = webread(dataset_point_url, 'apikey', apikey, 'polygon', '[[-94,26],[-94,23],[-96,23],[-96,26],[-94,26]]')

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

Provides values for the specified dataset at a given area of interest. Area-based query output is a grid of Points which are expressed using longitude and latitude coordinates in decimal degrees.

#### HTTP REQUEST
`GET http://api.planetos.com/v1/datasets/{id}/area?polygon={polygon}&apikey={apikey}`

#### HTTP QUERY PARAMETERS

Query parameters of `/area` endpoint are the same as for [`/point`](#point-endpoint) endpoint, except the `lon` and `lat` coordinates. Instead, `/area` uses `polygon` parameter.

<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">polygon</div>
                    <div class="item required">required</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Polygon defined by the list of Longitude-Latitude pairs.</div>
                    <div class="item example">
                      <code class="prettyprint">[[-94,26],[-94,23],[-96,23],[-96,26],[-94,26]]
                      </code>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>

#### RESPONSE

Response format is documented in a separate section — [Data Values Output Format](#data-values-output-format).

<h3 id="datasets-id-area-beta">/datasets/{id}/area (β)</h3>

> Example API output with location-based grouping

```json
{
  "data": {
    "Temperature_height_above_ground": [
      [271.0320129394531, 271.0119934082031, 270.97601318359375, 268.4639892578125],
      [271.7619934082031, 271.7699890136719, 271.7980041503906, 271.85400390625],
      [271.0320129394531, 271.0119934082031, 270.97601318359375, 268.4639892578125]
    ]
  },
  "indexAxes": [
    ["latitude", [57.1, 57.2, 57.3]],
    ["longitude", [22.0, 22.1, 22.2, 22.3]]
  ]
}
```

> Example code showing how dimensions from the `data` and `indexAxes` attributes align

```python
n = 0 # first row
# number of rows of values in data array should be the same as the number of values in the first "index axis"
len(sample['data']['Temperature_height_above_ground']) == len(sample['indexAxes'][0][1])
# number of values in row #n should be the same as the number of values in the second "index axis"
len(sample['data']['Temperature_height_above_ground'][n]) == len(sample['indexAxes'][1][1])
```

```javascript
var n = 0 // first row
// number of rows of values in data array should be the same as the number of values in the first "index axis"
sample['data']['Temperature_height_above_ground'].length == sample['indexAxes'][0][1].length
// number of values in row #n should be the same as the number of values in the second "index axis"
sample['data']['Temperature_height_above_ground'][n].length == sample['indexAxes'][1][1].length
```

**An experimental feature of [`/area`](#datasets-id-area) API endpoint.**

Allows to retrieve all values from the provided polygon and a single timestamp in one request without pagination.

#### HTTP REQUEST

`GET http://api.planetos.com/v1/datasets/{id}/area?polygon={polygon}&apikey={apikey}&grouping=location`

#### HTTP QUERY PARAMETERS

A new experimental area-specific query parameter `grouping` renders the output of the single API sample as an array of arrays covering the whole dimension like LonLat.

The output of location-based grouping has additional attribute — `indexAxes`. It contains a list of tuples (pairs) of dimension name and dimension coordinates values.


<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">grouping</div>
                    <div class="item experimental">optional, experimental</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Group data values into a single sample using provided dimension. The only supported dimension, for now, is "location."</div>
                    <div class="item example">
                      <code class="prettyprint">
                      location
                      </code>
                    </div>
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
Accepts the same query parameters as the [`/point`](#point-endpoint) endpoint.

#### Response
Response format is similar to the [`/point`](#point-endpoint) endpoint.

## API output format

### Data Values Output Format

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

Root elements are `stats` and `entries`. Stats just describes user's query. Usually, it duplicates query parameters (like `count` and `start`/`end`), but in case user omits the use of some query parameters this section shows defaults that were used.

Entries section is a list of data samples selected by API query. In the example above we use default `count` setting which is `1`. So we have a single entry.

Every entry has assigned XY, optionally Z and two timestamp coordinates as a part of `axes` object.
It is easy to notice that `reftime` is always same as `time` for observational datasets, unlike GFS in our example, which is forecast.

So `reftime` dimension is only useful for forecasts and some modelled datasets, where timestamp of dataset entry creation is different from the timestamp that dataset entry is describing.

Data section of every entry may contain more than one variable. It is possible to query all variables from any dataset by just omitting `var` parameter.
Please take into account that variables are grouped by `context`. For more details about Contexts see the next section.

Here is an example of annotated data sample.

<a href="images/annotated-data-sample-entry.png" data-featherlight><img src="images/annotated-data-sample-entry.png" alt="API Output Sample"/></a>

### Data Point Context

> Multi-context data sample example
> (two contexts for a single data sample, which defined by LonLat and timestamps)

```json
[
  {
    "context": "reftime_time_hybrid_lat_lon",
    "axes": {
      "latitude": 49.495601654052734,
      "reftime": "2016-09-07T12:00:00",
      "longitude": -50.507659912109375,
      "time": "2016-09-07T12:00:00",
      "z": 1.0
    },
    "data": {
      "u-component_of_wind_hybrid": 6.039999961853027,
      "v-component_of_wind_hybrid": 0.5799999833106995,
      "Temperature_hybrid": 286.8609924316406
    }
  },

  {
    "context": "reftime_time_lat_lon",
    "axes": {
      "reftime": "2016-09-07T12:00:00",
      "time": "2016-09-07T12:00:00",
      "longitude": -50.507659912109375,
      "latitude": 49.495601654052734
    },
    "data": {
      "Total_cloud_cover_convective_cloud": 0.0,
      "Downward_Short-Wave_Radiation_Flux_surface": 296.0,
      "Planetary_Boundary_Layer_Height_surface": 36.0,
      "Aerodynamic_conductance_surface": 0.0031999999191612005,
      "Temperature_surface": 282.31201171875,
      "Pressure_surface": 101690.0,
      "Upward_Short-Wave_Radiation_Flux_surface": 18.0,
      "Latent_heat_net_flux_surface": -25.0,
      "Geopotential_height_surface": -0.004031249787658453,
      "Upward_Long-Wave_Radp_Flux_surface": 349.0,
      "Exchange_Coefficient_surface": 0.004100000020116568,
      "Sensible_heat_net_flux_surface": -20.0,
      "Frictional_Velocity_surface": 0.14000000059604645,
      "Downward_Long-Wave_Radp_Flux_surface": 347.0,
      "Precipitable_water_entire_atmosphere_single_layer": 26.899999618530273
    }
  }
]
```

Contexts are simply variable groups. Variables that share the same set of dimensions belong to a single shared context.
Contexts are machine-generated, so it’s not always easy to understand what particular context contains by just looking at its id.

Most common context is *LonLat + Z + time* or *LonLat + Z + time + reftime* for forecasts. But, for example, some datasets could have more than one type of Z dimension, pressure based (in Pascals) and elevation/altitude based (in meters).
In this cases, variable with Z dimension in Pascals will have a different context than variable with Z dimension in meters.

## Bulk data packaging (β)

A set of experimental API endpoints for packaging larger data requests in binary form (zipped [NetCDF](https://en.wikipedia.org/wiki/NetCDF) files) and asynchronously fetching them for offline workflow.

### GET /packages

> Request a list of previously submitted user's packages.<br/>
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/packages?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/packages"

querystring = { "apikey": "{apikey}" }

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/packages',
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
  "packageKeys": [
    "0d823a53-61b7-41a6-9ce4-31b03eee212e",
    "6f9ba790-ddb0-4db8-b0b6-53c96d954888",
    "c40fef32-8c71-4f10-a098-9e995e3a8a47"
  ]
}
```

A very simple query to list all of the previously submitted packages.

The output contains a plain list of package IDs, which could be used to check each package status and download if a package is successfully generated.

#### HTTP REQUEST

`GET http://api.planetos.com/v1/packages?apikey={apikey}`

### PUT /packages

> Submit area-based package request for [`noaa_ww3_global_1.25x1d`](http://data.planetos.com/datasets/noaa_ww3_global_1.25x1d:noaa-wave-watch-iii-nww3-ocean-wave-model) dataset. Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request PUT \
  --url 'http://api.planetos.com/v1/packages?dataset=noaa_ww3_global_1.25x1d&polygon=[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]&apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1/packages"

querystring = {
  "dataset": "noaa_ww3_global_1.25x1d",
  "polygon": "[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]",
  "apikey": "{apikey}"
}

response = requests.request("PUT", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'PUT',
  url: 'http://api.planetos.com/v1/packages',
  qs: {
    dataset: 'noaa_ww3_global_1.25x1d',
    polygon: '[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]',
    apikey: '{apikey}'
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

> The above command returns JSON structured like this:

```json
  {
    "packageKey": "0d823a53-61b7-41a6-9ce4-31b03eee212e",
    "packageSpec": {
      "queryFilter": {
        "datasetKey": "noaa_ww3_global_1.25x1d",
        "geometryFilter": {
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]]
          },
          "type": "Arbitrary"
        },
        "zFilter": {
          "type": "FirstValue"
        }
      }
    }
  }
```

Submit area-based package creation request for bulk data download.

#### HTTP REQUEST

`PUT http://api.planetos.com/v1/packages?dataset=noaa_ww3_global_1.25x1d&polygon=[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]&apikey={apikey}`

#### HTTP QUERY PARAMETERS

Query parameters of package creation API could be copied directly from the [`/area`](#datasets-id-area-beta) query. It is designed for the cases where synchronous `/area` query takes too long (for larger time spans or hi-res datasets).

<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">dataset</div>
                    <div class="item required">required</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Dataset ID</div>
                    <div class="item example">
                      <code class="prettyprint">noaa_hrrr_surface_hourly
                      </code>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">polygon</div>
                    <div class="item required">required</div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Polygon defined by the list of Longitude-Latitude pairs.</div>
                    <div class="item example">
                      <code class="prettyprint">[[-90,32],[-90,23],[-96,23],[-96,32],[-90,32]]
                      </code>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">package</div>
                    <div class="item"></div>
                </div>
            </td>
            <td>
                <div class="ui list">
                    <div class="item description">Custom package ID. Instead of using auto generated UUIDs, it's possible to supply custom unique identifier for your package.</div>
                    <div class="item example">
                      <code class="prettyprint">CentralEurope_temperature_2016
                      </code>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>

#### RESPONSE

The output contains confirmation object with `packageKey` attribute, which can be used to poll packages creation status and download packaged data when it's ready.

### GET /packages/`{id}`

> Request package status by its ID.<br/>
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/packages/{package_id}?apikey={apikey}'
```

```python
import requests

package_id = '0d823a53-61b7-41a6-9ce4-31b03eee212e'  # example ID, please replace
url = "http://api.planetos.com/v1/packages/%s" % (package_id)

querystring = { "apikey": "{apikey}" }

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var package_id= '0d823a53-61b7-41a6-9ce4-31b03eee212e'; // example ID, please replace

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1/packages/' + package_id,
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
  "packageSubmitted": true,
  "packageStatus": {
    "message": "success"
  },
  "packageResult": {
    "success": true
  }
}
```

An endpoint for querying submitted package creation status.

The output contains object that contains confirmation that package is in processing queue or successfully generated.

The main attribute for package generation completion is `packageResult.success`.

#### HTTP REQUEST

`GET http://api.planetos.com/v1/packages/<package_id>?apikey={apikey}`

### GET /packages/`{id}`/data

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1/packages/{package_id}/data?apikey={apikey}'
```

An endpoint for fetching zipped NetCDF files by package ID.

#### HTTP REQUEST

`GET http://api.planetos.com/v1/packages/<package_id>?apikey={apikey}`

## Experimental Web endpoints (α)

A set of experimental API endpoints for making OpenDAP protocol more accessible for web applications.

### GET /variables

> Request a list of all available variables from particular dataset.<br/>
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables"

querystring = { "apikey": "{apikey}" }

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables',
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
  "noaa_gfs_global_sflux_0.12d": [
    {
      "longName": "Temperature @ Ground or water surface",
      "name": "Temperature_surface"
    },
    {
      "longName": "Ground Heat Flux @ Ground or water surface",
      "name": "Ground_Heat_Flux_surface"
    },
    {
      "longName": "Downward Long-Wave Rad. Flux @ Ground or water surface",
      "name": "Downward_Long-Wave_Radp_Flux_surface"
    },
    {
      "longName": "Downward Short-Wave Radiation Flux @ Ground or water surface",
      "name": "Downward_Short-Wave_Radiation_Flux_surface"
    }
  ]
}
```

A very simple query to list all available variables from a particular dataset.

Each variable has a `name` for API requests and human-friendly `longName` for using in UI or data visualizations.

#### HTTP REQUEST

`GET http://api.planetos.com/v1a/datasets/{id}/variables?apikey={apikey}`

### GET /variables/{variable}/timestamps

> Request a list of all available timestamps from particular dataset and provided variable.<br/>
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps"

querystring = { "apikey": "{apikey}" }

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps',
  qs: { apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

> The above command returns JSON structured like this:

```json
["1482775200000", "1482775200000", "1482796800000", "1482796800000", "1482818400000", "1482818400000", "1482840000000", "1482840000000", "1482861600000", "1482861600000", "1482883200000", "1482904800000"]
```

A very simple query to list all available timestamps for particular dataset and variable.

Timestamps are in "epoch milliseconds."

#### HTTP REQUEST

`GET http://api.planetos.com/v1a/datasets/{id}/variables/{variable}/timestamps?apikey={apikey}`

### GET /variables/{variable}/timestamps/{timestamp}/data

> Request a list of all available timestamps from particular dataset and provided variable.<br/>
> Make sure to replace `{apikey}` with your own API key:<br/>
> <code class="apikey-placeholder"></code>

```shell
curl --request GET \
  --url 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps/1482904800000/data?apikey={apikey}'
```

```python
import requests

url = "http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps/1482904800000/data"

querystring = { "apikey": "{apikey}" }

response = requests.request("GET", url, params=querystring)

print(response.text)
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://api.planetos.com/v1a/datasets/noaa_gfs_global_sflux_0.12d/variables/Temperature_surface/timestamps/1482904800000/data',
  qs: { apikey: '{apikey}' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

> The above command returns JSON structured like this (snipped is cut to fit):

```json
{
    "lat": [80.0, 79.33, 78.66, 78.0, …, -78.0, -78.66, -79.33, -80.0],
    "values": [
        [null, null, null, null, null, null, -0.02711682595697867, -0.03409404990630811, …],
        [null, null, null, null, null, null, -0.060692500078029496, -0.058580634445273394, …],
        [null, null, null, null, -0.011209596925575731, -0.012524769932849181, -0.025995750416178534, …],
        [null, null, null, null, null, -0.02935991804472002, -0.00636995307786792, 0.002944547254725269, …],
        [-0.04303262674907531, -0.027542892698230785, -0.024892436973680928, -0.018868911062971692, …],
        [-0.011008735306573496, -0.009209316019202714, -0.010557913755058318, -0.0044006413503971985, …],
        [null, null, null, -0.009542706584614492, -0.010108897142034697, -0.015939873399166467, …],
        [null, null, null, null, null, null, 0.005938973218893649, -0.011210041432247124, …],
        [null, null, 0.09552701189844665, -0.01748571686550157, -0.04741710525163343, …],
        [null, -0.09562515519618932, -0.05986652267218364, -0.07228101183713344, …],
    ],
    "lon": [-180.0, -179.33, -178.66, -178.0, …, 177.33, 178.0, 178.66, 179.33],
    "metadata": {
        "timestamp": "1480982400000",
        "opendapQuery": "http://thredds.planetos.com/thredds/dodsC/…",
        "unit": "meter/sec",
        "bbox": {
            "latMax": -80.0,
            "lonMin": -180.0,
            "lonMax": 179.33333333333331,
            "latMin": 80.0
        }
    }
}
```

Return an object with X/Y (Longitude/Lattitude) arrays and a two-dimensional array of data values for the provided combination of dataset ID and, its variable and timestamp.

Attributes to plot the data: `lon` for the X axis, `lat` for the Y axis, each row in the `values` array corresponds to a single value of `lon` and every item in every row corresponds to a value of `lat`.

#### HTTP REQUEST

`GET http://api.planetos.com/v1a/datasets/{id}/variables/{variable}/timestamps/{timestamp}/data?apikey={apikey}`

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
