# Datasets

Planet OS maintains [a curated catalog of public and commercial datasets](http://data.planetos.com/datasets "Planet OS Data Catalog"). For each of the datasets in our catalog, Planet OS provides a detailed summary page that contains key metadata attributes and a downsampled dataset preview.

## Summary
The summary section provides key metadata attributes for the dataset. Each of these attributes is explained in further detail below.

<dl>
    <dt>Publisher</dt>
    <dd>The party from whom the dataset was acquired.</dd>
    <dt>Source</dt>
    <dd>The <em>specific</em> method of production of the original data. If the product was model-generated, source should name the model and its version. If the dataset is observational, <em>source</em> should characterize the empirical method (e.g. surface observation, radiosonde, etc.).</dd>
    <dt>Abstract</dt>
    <dd>A short, descriptive summary of the dataset.</dd>
    <dt>Refreshed</dt>
    <dd>The time at which Planet OS last acquired new data from the dataset publisher.</dd>
    <dt>Update Frequency</dt>
    <dd>The frequency at which data is updated at its origin (e.g. hourly, daily, monthly).</dd>
    <dt>Product Type</dt>
    <dd>The general method by which data is produced (e.g. observed, modeled, hindcast, reanalysis).</dd>
    <dt>Feature Type</dt>
    <dd>Scientific feature type or CDM data type (e.g. GRID, RADIAL, SWATH, IMAGE, ANY_POINT, POINT, PROFILE, SECTION, STATION, STATION_PROFILE, TRAJECTORY).</dd>
    <dt>Spatial Reference System</dt>
    <dd>The spatial reference system used by the dataset (e.g. WGS84).</dd>
    <dt>Temporal Resolution</dt>
    <dd>The temporal resolution of the data in time units or free text.</dd>
    <dt>Spatial Resolution</dt>
    <dd>The spatial resolution of the data in meters, decimal degrees or free text.</dd>
</dl>

## Extent
The extent section describes the spatial and temporal extent of the dataset. The minimum and maximum latitude and longitude are expressed as decimal degrees. For datasets with a vertical extent, this information is also included.

The start and end date of the available data are provided as well. Datasets that are actively producing new data are denoted as "Ongoing".

## Variables
The variables section includes information about all dataset variables, including the variable name, long name, and unit. The total number of variables is shown in parenteses immediately after the section title.

At the right of the section header is the vocabulary used for the variables. Typically this is a CF (Climate and Forecast) convention, and includes the specific version of the vocabulary is also included when available.

When performing API queries, the variable name shown in this section may be used to request specific variables.

## Dimensions
The dimensions of the dataset are displayed separately in this section. Typically this includes dimensions such as time, reference time, latitude and longitude.

## License
When provided by the publisher, the dataset's license is included here for reference.
