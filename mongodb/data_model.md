# MongoDB Data Model

## Embedded Data (Denormalized)
1. When to use?
  * Have "contains" relationship (One-to-One Relationship)
  * Contains many children (One-to-many Relationship)
2. Advantages
  * Read operation
  * Request & Retrieve related data
  * Atomic write operation
    < MongoDB only supports atomic write operation within a document
3. Disadvantages
  * As document growth
  * Impact write performance
  * Data fragmentation
    < MMAPv1 & GridFS
    < Maximum BSON document size

## References (Normalized)
1. When to use?
  * Embedding results duplication > sufficient read performance
  * Complex many to many relationships
  * Model large hierarchcal data sets
2. Advantages
  * Flexibility
3. Disadvantages
  * More round trip to database server

# MongoID Relation

## embeds_one & embedded_in
The parent has one embedded document
```
  Without the embedded_in, you an create a parent document and it's child but you will never can change it's child, and the child act as it's a dependant collection
  Wihout the embeds_one, the parent acts like it has no child while the child acts as it's an embedded document
```
```
  Naming:
  Create an alias :new_name :name to
  Use store_as: "name" in the parent for naming the attribute in database
```

## embeds_many & embeded_in
The parent has one or more embedded document
Almost same as embeds_one

## has_one & belongs_to
The parent has one referenced child
The child holds the id of the parent
```
  Without the belongs_to, it's impossible to set reference, it'll say `nil is not a symbol`
  Without the has_one, the one has belongs_to has to id of the other
```
## has_many & belongs_to
The parent has one or more referenced children
The child holds the id of the parent
```
  Almost same as has_one
```

## has_and_belongs_to_many
Both side use the same key
Each document has one or more references of other documents
Each document hold an array of ids of other documents
```
  Not necessary to have both side
```

## Nested attributes
Nested attributes provide a mechanism for updating documents and their relations in a single operation

## Callbacks
### Document callbacks
  after_initialize: after create new document
  after_build
  before_validation
  after_validation
  before_create
  around_create
  after_create
  after_find
  before_update
  around_update
  after_update
  before_upsert
  around_upsert
  after_upsert
  before_save
  around_save
  after_save
  before_destroy
  around_destroy
  after_destroy
### Relation callbacks

```html
<span color="red">Test red text</span>
```