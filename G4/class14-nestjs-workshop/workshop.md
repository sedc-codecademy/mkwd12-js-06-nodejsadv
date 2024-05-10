# NestJS Workshop - Create a music database api

## Basic Requirements

The music api will have 3 resources: Artist, Song, Album, create a postgres database locally and connect it with the nest api using typeorm

Models for resources:

Song:

```
   id: number;
   title: string;
   duration: number (in seconds);
   year: string;
   artistId: number;
   genre: string

```

Artist:

```
    id: number;
    firstName: string;
    lastName: string;
    stageName: string;
    age: number;

```

Album:

```
    id: number;
    title: string;
    artistId: number;
    genre: string;
    year: string
    numberOfSales: number;
    tracks: Song[]

```

Make sure you add validation for all the resources

The relations between these resources are as follows:

1. An artist can have many songs and a song can have one artist
2. An artist can have many albums and an album can have one artist
3. An album can have many songs and a song can have many albums or none at all ( single )

The crud operations that are required as as follows:

1. Get , Get by Id, Create, Update, Delete for songs
2. Get , Get by Id, Create, Update, Delete for albums
3. Get , Get by Id, Create, Update, Delete for artists

- Ensure that deleting an artist deletes all related albums and songs by that artist

- Build this one step at a time, first finish the artist and song then move to the albums as it is the most complex ( many to many )

- For getting help, call the trainer and assistant, reference the code from class and go to the nestjs and typeorm documentation

- TEST,TEST,TEST,TEST,TEST,TEST and TEST some more before you go to the next step

## Bonus Requirement

Add authentication and authorization to the api using a user resource and jwt tokens as we did in class ( only attempt this if you are finished with the basic )

## Super Bonus Requirement

Add a role guard with 2 roles ( user, admin ) and only allow admins to create/update/delete data, use docs and google to figure it out we will cover it on saturday
