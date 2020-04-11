# Philippines Locations API

REST API for serving Cities, Barangays, Provinces and Regions in Philippines

## Requirements
* NodeJS 10 or higher
* MySQL 7.5 or higher
* Web Server (Apache or Nginx)

## Installation

install dependencies
```
npm install
```

configure
```
cp .env.example .env
```

migrate
```
adonis migration:run
```

seed
```
adonis seed
```


## Usage


find cities that starts with "Ba"
```
http://ph-locations-api.buonzz.com/v1/cities?filter[where][description][like]=Ba

```

list regions ordered by id descending
```
http://ph-locations-api.buonzz.com/v1/regions?filter[order]=region_code%20desc
```


## Credits

* [clavearnel/philippines-region-province-citymun-brgy](https://github.com/clavearnel/philippines-region-province-citymun-brgy) for JSON data
* [National Statistical Coordination Board](http://www.nscb.gov.ph/)