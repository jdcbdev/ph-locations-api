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

run it
```
adonis serve --dev
```

## Deployment

connect to VM

```
ssh root@104.248.148.198
cd /home/ph-locations-api

```

## Usage


find cities that starts with "Ba"
```
https://damp-castle-15651.herokuapp.com/v1/cities?filter[where][description][like]=Ba

```

list regions ordered by id descending
```
https://damp-castle-15651.herokuapp.com/v1/regions?filter[order]=region_code%20desc
```

list provinces from National Capital Region
```
https://damp-castle-15651.herokuapp.com/v1/provinces?filter[where][region_code]=13
```

list cities from Manila
```
https://damp-castle-15651.herokuapp.com/v1/cities?filter[where][province_code]=1339
```

list barangays from City Of Manila
```
https://damp-castle-15651.herokuapp.com/v1/barangays?filter[where][city_code]=133903
```


## Credits

* [clavearnel/philippines-region-province-citymun-brgy](https://github.com/clavearnel/philippines-region-province-citymun-brgy) for JSON data
* [National Statistical Coordination Board](http://www.nscb.gov.ph/)
