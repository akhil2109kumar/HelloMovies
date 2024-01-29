FROM python:3.9-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN apk add --no-cache postgresql-libs \
    && apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev \
    && pip install psycopg2-binary==2.9.6 \
    && apk --purge del .build-deps
    
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

