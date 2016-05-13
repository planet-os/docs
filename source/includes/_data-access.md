# Data Access

Planet OS provides a variety of interfaces for accessing data. Details regarding the available data access methods and protocols, as well as rate and volume limiting are discussed below.

## THREDDS Data Server (TDS)
Planet OS maintains its own THREDDS Data Server (TDS). TDS is a web server that provides metadata and data access for scientific datasets, using OPeNDAP, OGC WMS and WCS, HTTP, and other remote data access protocols. The TDS is developed and supported by Unidata, a division of the University Corporation for Atmospheric Research (UCAR), and is sponsored by the National Science Foundation. Visit the Unidata website for <a href="http://www.unidata.ucar.edu/software/thredds/current/tds/" target="_blank" title="More information regarding the THREDDS Data Server">more information on TDS</a>.

The THREDDS Data Server provides a variety of access protocols to our data catalog. We currently support the HTTP protocol and accessing subsets of data via <a href="http://www.opendap.org/" target="_blank" title="Learn more about OPeNDAP">OPeNDAP</a>.

A button to access data using the Planet OS THREDDS Data Server is provided on individual dataset pages.

## REST API
Planet OS provides a RESTful API for programmatically accessing data at specific locations. Documentation and resources for this API are included below.

## Limits
Data access is limited by both call rate and transfer volume per user. For details on individual plans, see our [pricing page](http://data.planetos.com/plans).

Free accounts are limited to **100 REST API calls per day** and **5 GB of data transfer per month**.

If your workflow or application requires access that exceeds these limits, please contact [help@planetos.com](mailto:help@planetos.com).
