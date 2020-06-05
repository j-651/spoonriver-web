# Contribution Guidelines
Hello, and thank you for your interest in contributing to our Spoon River Anthology project! Please take a minute to review our Contribution Guidelines, as this will result in getting your issue resolved or pull request merged faster.

## Specific Information
All data for this site is located in the [src/assets/data/currentData.json](src/assets/data/currentData.json) file.

There are two different objects within this file:
1. `"nodes"`
	These specify each character's name which populate the force-directed graph.

2. `"links"`
	These draw the lines between characters.

The format for *`nodes`* entries is:

```json
{
	"id": "Hod Putt",
	"group": 1
}
```

|Key|Purpose||
|---|---|---|
|id|Declares the character's name|Required|
|group|Specifies what group the character should be added to. Characters are grouped by last name|Required|



The format for *`links`* entries is:

```json
{
	"source": "The Circuit Judge",
	"target": "Hod Putt",
	"value": 1
}
```

|Key|Purpose||
|---|---|---|
|source|Specifies at which `nodes.id` the line should **start** at|Required|
|target|Specifies at which `nodes.id` the line should **end** at|Required|
|value|Should be `1`|Required|

## Getting set up
Multiple tools are used for development, the basics being Git and Yarn (see the quick start guide in our [README](README.md) file for help).

You can, however, edit files on GitHub's website which may be easier.

## Creating a pull request
Every pull request here should have a corresponding issue that describes the work to be done, and a category that it falls into. If no issue exists for the planned changes, create a new one. Remember to keep each issue and pull request focused and specific, and _keep the PR changes focused on the changes planned by the issue._ Generally, the smaller they are, the sooner they're merged.

## Review Process
Once you're finished and your PR is ready, request a review.

When you're changes are approved, they will be merged into the `master` branch and deployed to the live site.

## Commit Messages
For all commit messages, please:

- prefix with the category of changes (`fix`, `feat`, and `chore` are the most common)
- use the present tense
- keep it brief, but descriptive

Example: `feat: Add more info to Hod Putt's description`

All contributions to this project are appreciated!

\- *The Spoon River Anthology character exploration website creators*