#!/bin/bash

mkdir -p src/data
curl -L -o src/data/blocklist.json https://farhan-iptv-org.github.io/api/blocklist.json 
curl -L -o src/data/categories.json https://farhan-iptv-org.github.io/api/categories.json 
curl -L -o src/data/channels.json https://farhan-iptv-org.github.io/api/channels.json
curl -L -o src/data/streams.json https://farhan-iptv-org.github.io/api/streams.json
curl -L -o src/data/guides.json https://farhan-iptv-org.github.io/api/guides.json
curl -L -o src/data/countries.json https://farhan-iptv-org.github.io/api/countries.json 
curl -L -o src/data/languages.json https://farhan-iptv-org.github.io/api/languages.json 
curl -L -o src/data/regions.json https://farhan-iptv-org.github.io/api/regions.json 
curl -L -o src/data/subdivisions.json https://farhan-iptv-org.github.io/api/subdivisions.json
