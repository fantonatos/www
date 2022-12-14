#!/usr/bin/env bash
docker build -t www . && docker run -p 80:80 www
