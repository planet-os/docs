# Data Access

Planet OS provides a variety of interfaces for accessing data. Details regarding the available data access methods and protocols, as well as rate and volume limiting are discussed below.

## THREDDS Data Server (TDS)
Planet OS maintains a THREDDS Data Server (TDS) at <a href="//thredds.planetos.com" target="_blank">thredds.planetos.com</a>. TDS is a web server that provides metadata and data access for scientific datasets, using OPeNDAP, OGC WMS and WCS, HTTP, and other remote data access protocols. The TDS is developed and supported by Unidata, a division of the University Corporation for Atmospheric Research (UCAR), and is sponsored by the National Science Foundation. Visit the Unidata website for <a href="http://www.unidata.ucar.edu/software/thredds/current/tds/" target="_blank" title="More information regarding the THREDDS Data Server">more information on TDS</a>.

The THREDDS Data Server provides a variety of access protocols to our data catalog. We currently support the HTTP protocol and accessing subsets of data via <a href="http://www.opendap.org/" target="_blank" title="Learn more about OPeNDAP">OPeNDAP</a>.

## REST API
Planet OS provides a RESTful API for programmatically accessing data at specific locations. Documentation and resources for this API are <a href="#api">included below</a>.

## Limits
Data access is limited by both call rate and transfer volume per user.

For free accounts, users are limited to **500 REST API calls per day** and **5 GB of data transfer per month**.

If your workflow or application requires access that exceeds these limits, please contact <a href="mailto:{{ support_email }}">{{ support_email }}</a>.
