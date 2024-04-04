# firebase

This library was generated with [Nx](https://nx.dev).

## Authentication

Before using authentication, ensure your Firebase config is set up in `libs/firebase/src/lib/firebase-config.ts`.

### Using `useAuth`

The `useAuth` hook provides access to the current user and authentication state. It should be used within components wrapped in `AuthProvider`.

Example:

```jsx
import React from 'react';
import { useAuth } from 'path/to/AuthContext';

const UserProfile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <div>Loading...</div>;

  return <div>Welcome, {currentUser.email}</div>;
};
```

CRUD Operations with Firestore

This section covers how to use the provided Firestore CRUD operations in your NX applications.

Setup
Ensure you have configured your Firebase and Firestore settings in libs/firebase/src/lib/firebase-config.ts as per the Firebase configuration section.

Adding a Document
Use the addDocument function to add a new document to a specified Firestore collection.

Function Signature:

typescript
Copy code
addDocument<T extends WithFieldValue<DocumentData>>(collectionName: string, data: T): Promise<string>
collectionName: The name of the Firestore collection.
data: The data for the new document.
Example Usage:

jsx
Copy code
import React, { useState } from 'react';
import { addDocument } from 'path/to/firebase-crud';

const AddItemForm = () => {
const [name, setName] = useState('');

const handleSubmit = async (event) => {
event.preventDefault();
try {
const docId = await addDocument('items', { name });
console.log('Document added with ID:', docId);
} catch (error) {
console.error('Error adding document:', error);
}
};

return (

<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<button type="submit">Add Item</button>
</form>
);
};
Editing a Document
To update an existing document, use the editDocument function.

Function Signature:

typescript
Copy code
editDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<void>
collectionName: The name of the Firestore collection.
id: The document ID to update.
data: The data to update in the document.
Example Usage:

jsx
Copy code
import { editDocument } from 'path/to/firebase-crud';

// Function to update an item's name
const updateItemName = async (itemId, newName) => {
try {
await editDocument('items', itemId, { name: newName });
console.log('Document updated');
} catch (error) {
console.error('Error updating document:', error);
}
};
Deleting a Document
The deleteDocument function allows you to remove a document from a collection.

Function Signature:

typescript
Copy code
deleteDocument(collectionName: string, id: string): Promise<void>
collectionName: The name of the Firestore collection.
id: The ID of the document to delete.
Example Usage:

jsx
Copy code
import { deleteDocument } from 'path/to/firebase-crud';

// Function to delete an item
const deleteItem = async (itemId) => {
try {
await deleteDocument('items', itemId);
console.log('Document deleted');
} catch (error) {
console.error('Error deleting document:', error);
}
};
Fetching Documents
To retrieve documents from a collection, use the fetchDocuments function.

Function Signature:

typescript
Copy code
fetchDocuments<T>(collectionName: string): Promise<T[]>
collectionName: The name of the Firestore collection you want to fetch documents from.
Example Usage:

jsx
Copy code
import React, { useEffect, useState } from 'react';
import { fetchDocuments } from 'path/to/firebase-crud';

const ItemList = () => {
const [items, setItems] = useState([]);

useEffect(() => {
const fetchItems = async () => {
try {
const fetchedItems = await fetchDocuments('items');
setItems(fetchedItems);
} catch (error) {
console.error('Error fetching items:', error);
}
};

    fetchItems();

}, []);

return (

<ul>
{items.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
);
};
Remember to replace 'path/to/firebase-crud' with the actual path to your CRUD operations file in the library. This documentation template can be adapted for any specific functions or use cases you have in your library.
