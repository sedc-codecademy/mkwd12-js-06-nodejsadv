# NestJS Workshop - Library API

## Basic Requirements

We should create a library API that will have the following resources: book, author.

For all of these resources, you have to add CRUD operations and the relations between them are as follows:

- One author can have many books and one book can have only one author.

### Models for resources

#### Author

```
{
  firstName: string
  lastName: string
  from: string
  birthDate: Date
  books: Book[]
}
```

#### Book

```
{
  title: string
  description: string
  genre: string
  author: Author
  publisher: string
  isbn: number
}
```

The data (DTO) for all the above resources and endpoints needs to be validated.

To finish the basic requirements, you need to have created at least one author, and five books, and they need to be connected properly, and the relations loaded correctly.

## Bonus Requirement (DO NOT ATTEMPT BEFORE BASIC PART)

Add authentication so that only logged-in users can work with any of the resources above.
