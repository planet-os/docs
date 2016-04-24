# REST API

The Planet OS REST API can be used to integrate disparate spatiotemporal datasets into data-driven applications and workflows. The API provides programmatic access to data at a specific location; responses are provided in JSON format

## Version
The current version of the API is **v1**.

## Authentication
Each Planet OS user is granted a unique API key that is used to authenticate API calls. All API endpoints require this key be passed as a query parameter to authenticate the request. Your key may be viewed on the [Account Settings](http://data.planetos.com/account/settings/ "View your account settings") screen.

#### Example of authenticated HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}?apikey={your_api_key}`

Your API Key is <strong class="apikey-placeholder"></strong>.

## Endpoints

### Dataset metadata summary
`/datasets/{id}`

#### HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}`

This API endpoint serves our dataset detail page and all attributes are explained in the [Dataset Summary](#summary) section above.


### Data samples (values) in a given geographical point of specified dataset
`/datasets/{id}/point`

#### HTTP Request
`GET http://api.planetos.com/v1/datasets/{id}/point?lon=&lat=&`

#### HTTP GET PARAMS

<table class="ui very basic padded table api-parameters">
    <tbody>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name"><strong>lat</strong></div>
                    <div class="item required"><strong>required</strong></div>
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
                    <div class="item name"><strong>lon</strong></div>
                    <div class="item required"><strong>required</strong></div>
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
                    <div class="item description">Convert output of the API into CSV format (useful for direct import into a spreadsheet software).</div>
                    <div class="item example">true</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">buffer</div>
                    <div class="item optional">optional</div>
                    <div class="item default">default: 0</div>
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
                    <div class="item description">If multiple axes contexts are provided for a dataset, use <em>context</em> to limit which are returned. Multiple contexts can be passed using comma separation.</div>
                    <div class="item example">main</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">count</div>
                    <div class="item optional">optional</div>
                    <div class="item default">default: 1</div>
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
                    <div class="item default">default: 0</div>
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
                    <div class="item example">2008-05-11T15:30:00Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">nearest</div>
                    <div class="item optional">optional</div>
                    <div class="item default">default: true</div>
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
                    <div class="item example">2008-05-11T15:30:00Z</div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="ui list">
                    <div class="item name">reftime_recent</div>
                    <div class="item optional">optional</div>
                    <div class="item default">default: true</div>
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
                    <div class="item name">verbose</div>
                    <div class="item optional">optional</div>
                    <div class="item default">default: false</div>
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


## Rate Limits
The REST API is rate limited to **500 calls per day**.

If you'd like to request a rate limit increase, please contact [help@planetos.com](mailto:help@planetos.com "Contact Planet OS support staff to request a rate limit increase.") with more information on your needs.

## Policies 
By using the Planet OS REST API, you agree to our [terms of service](http://data.planetos.com/terms "Planet OS Terms of Service"). Please take a moment to review the terms.

Datasets delivered via Planet OS data access interfaces may be subject to third party licenses that govern acceptable end-uses of the data. If you are unsure of a dataset's license or restrictions, we encourage you to contact the data publisher directly for clarification.

Planet OS reserves the right to suspend or terminate accounts that violate our policies. If you're a mindful and considerate developer, this shouldn't be an issue for you.