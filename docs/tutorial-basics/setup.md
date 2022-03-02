---
sidebar_position: 1
title: Setup
---

# Setup

## Cloud

1. The Easiest way to get access to Supabase is to setup a free account on [Supabase](https://www.supabase.com/). Supabase also has a paid plan starting a 25$ per month. For our workshop we will use the free plan.
2. Once you have signed up, you will be able to access your account from [Supabase](https://app.supabase.io).
3. Create a new project. Select a password for the postgres database. You can use this database ourside of Supabase. So choose something secure.
4. For pricing plan select the free tier.
5. This will take a few minutes to complete. But after that you will be able to access the URL and secret key. Note the secret key. You will need this to connect the application.

## Supabase CLI

1. Download the [Supabase CLI](https://github.com/supabase/cli)
2. Install and Setup [Docker](https://docs.docker.com/get-docker/) 
3. Run the following command to setup Supabase for local development
  ```
  supabase init
  ```
  This creates a supabase folder in your current directory.
4. After that you can run
   ```
   supabase start
   ```
  This will start a local instance of Supabase using docker. This may take a while.
5. After some time you will see an output similar to this.
```
Started local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
        anon key: <ANON_KEY>
service_role key: <SERVICE_ROLE_KEY>
```
  Take note of `Studio URL`, `API URL` and `anon key`. You can access the dashboard using the `Studio URL`. Our application will target the `API URL` and use the `anon key` for access.

## Docker

You can self host Supabase using Docker. Properly setting up a self hosted instance is outside the scope of this workshop. You can find more information on [Docker self hosting](https://supabase.com/docs/guides/hosting/docker) in the official documentation.
