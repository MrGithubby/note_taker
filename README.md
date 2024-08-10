# Note Taker Starter Code

## Description

The Note Taker application is a simple and intuitive tool that allows users to write, save, and delete notes. This application is built using Node.js, Express.js, and JavaScript, with data being stored locally in a JSON file. It provides a seamless way for users to organize their thoughts, keep track of tasks, and store important information.

## Table of Contents
* Installation
* Usage
* API Endpoints
* Contributing
* License

## Installation

To install and run the Note Taker application locally, follow these steps:

1.	Clone the repository
2.	Navigate to the project directory
3.	Install dependencies: Make sure you have Node.js installed. Then, install the necessary dependencies using npm
4.	Start the server

## Usage

Once the server is running, you can access the Note Taker application in your web browser by navigating to http://localhost:3000.

* Create a Note: Click the “New Note” button, enter a title and your note content, and click the save icon to store your note.
* View Notes: Click on any note in the list on the left to view its content.
* Delete Notes: Click the trash icon next to a note to delete it.

## API Endpoints

The application includes several API endpoints for interacting with notes:

* GET /api/notes: Retrieves all notes from the database.
* POST /api/notes: Adds a new note to the database.
* DELETE /api/notes/:id: Deletes a note from the database by its ID.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, please feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
