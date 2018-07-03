---
title: "Apparatus Documentation"
---

# Under development 🚧

If you have a question that is not answered in the wiki, please make a pull request (or be patient and hope it will be answered in the future).

## Welcome to the apparatus docs 🎉

1. [The Apparatus Framework](https://or3stis.github.io/apparatus/docs#the-apparatus-framework)
1. [How to use ASTo](https://or3stis.github.io/apparatus/docs#how-to-use-asto)
1. [Color themes](https://or3stis.github.io/apparatus/docs#color-themes)
1. [Importing graphs from pcapng files](https://or3stis.github.io/apparatus/docs#generate-graphs-from-pcapng-files-experimental-feature)
1. [Performing security analysis](https://or3stis.github.io/apparatus/docs#performing-security-analysis)
1. [The architecture of ASTo](https://or3stis.github.io/apparatus/docs#the-architecture-of-asto)

## The Apparatus Framework

Apparatus is a security framework to facilitate security analysis in IoT systems. To make the usage of the Apparatus framework easier the ASTo app was created (ASTo stands for Apparatus Software Tool).

A requirement to use ASTo is familiarity with the Apparatus framework. If you have the time and patience, the best way to understand the framework is to read some research papers that were written about it. However, you can always read this wiki.

1. [Apparatus: Reasoning About Security Requirements in the Internet of Things](https://www.researchgate.net/publication/303823220_Apparatus_Reasoning_About_Security_Requirements_in_the_Internet_of_Things)
1. [ASTo: A Tool for Security Analysis of IoT Systems](https://www.researchgate.net/publication/318126697_ASTo_A_tool_for_security_analysis_of_IoT_systems)
1. [A Conceptual Model to Support Security Analysis in the Internet of Things](https://www.researchgate.net/publication/318240418_A_conceptual_model_to_support_security_analysis_in_the_internet_of_things)

### Apparatus in a nutshell

The Apparatus Framework provides a modeling language and analysis procedures for an IoT system during the following phases:

1. design phase (model the idea of a system) [high-level concepts]
1. implementation phase (model the implemented system) [low-level concepts]
1. state diagrams (model the different states of a system)

Each phase has different concepts and rules on how those concepts interact with each other. The concepts of each phase are defined via UML class diagrams that in turn define the metamodels of Apparatus. The metamodels are translated into schemas that ASTo uses to validate modules. To access each phases metamodel, you can type `metamodel` in the ASTo's command console (bottom right corner, cmd/ctrl + l).

The Apparatus Framework uses a graph-based front-end representation of models. We leverage powerful graph based algorithms for a variety of analysis tasks.

Some of the features of ASTo have not been published yet, but I will try to add them as documentation here.

## How to use ASTo

To aid the speed of development any action can either be performed by pressing a button or by a hotkey. Once the application is more mature I will focus on better user-friendly behavior and features.

## Color themes

ASTo supports a light and a dark color theme. The colors themes are based on Atom's [One Dark](https://github.com/atom/one-dark-syntax) and [One Light](https://github.com/atom/one-light-syntax). You can switch between the themes by typing `:toggle` in ASTo's console (bottom right corner, cmd/ctrl + l).

### ASTo's layout

ASTo follows a traditional three-column architecture.

1. First column - Buttons
1. Second column - Graph container
1. Third column - Message area and command console

#### First Column - Buttons

Buttons offer certain functions to manipulate the graph and perform analysis. Several buttons, such as the _Overview_ button or the _Show neighbor_ button are shared between the different modeling phases, each phase has certain unique buttons.

1. **add component** button: the ➕ icon is used to add new nodes to the graph. If you hover over the button you will be presented with a list of the node option in the current modeling phase you are in. Each newly created node will be added to the top left of the graph container (I am having some issues with the smart placement of nodes). If the node is _not_ created, there are probably some issues with the new node's id and the ids of the existing nodes in the graph. Each node must have a unique id in order to be added to the graph. The `addComponent.js` and `initialize.js` modules try to create a new id, but bugs may occur. If that happens, feel free to file an issue.
1. **add connection:** button: the next button is used to add edges between nodes. To add an edge you need to click on the _source_ node first, then on the _target_ node and then click the _connection_ button. The first clicked node is highlighted to blue. When you click on the second node, the color of your first selection is turned to orange and the newly selected node is turned blue. As a reminder _blue_ node ➞ _target_ and _orange_ node ➞ _source_. Once the _connection_ button is clicked, an edge with the corresponding relationship will be created. If the modeling language doesn't allow the connection between the nodes, an error will be displayed on the results bar.
   _keyBinding_: macOs: `cmd + e`, Linux/Windows: `ctrl + e`
1. **delete component** button: you can delete nodes and edges by selecting the element and clicking the ➖ icon.
   _keyBinding_: macOs: `cmd + backspace`, Linux/Windows: `ctrl + backspace`.
1. **select component** button: you can highlight the selected class of nodes. All the other nodes in the graphs will be faded. Moreover, you can see the total number of the highlighted nodes in the bottom left corner of the graph.
1. **select module** button: the Apparatus Framework groups concepts that share a similar thematic context. For example, concepts that are used to express networking constructs such as  _connections_ or _devices_ belong to the _network module_. All the nodes that are part of the selected module are highlighted and their total number is shown in the bottom left corner of the graph.
1. **layout options** button: is used to apply different layout algorithms to on the graph. The layout algorithms are located in `/src/core/layout.js`.
1. **threat validation** button: checks whether the identified threats are mitigated by constraint.
1. **model validation** button: is used to validate a model according to the metamodel of the phase. This function is useful for checking if imported models are valid, since the add edge function disallows wrong connections.
1. **transform model** button: transform the current model to a model of the other engineering phase.
1. **save model** button: once pressed it will display a native save dialog. You can select the location of the saved file as well as its name. The file will be saved with `.json` extension.
   _keyBinding_: macOs: `cmd + shift + s`, Linux/Windows: `ctrl + shift + s`.
1. **home** button: once click it navigate you back to home menu (phase selection).

Only available during the implementation phase:

1. **vulnerability validation** button: checks whether vulnerabilities are mitigated by a mechanism.
1. **vulnerability identification** button:

To **edit a node**, you can right click on it and a form will be created. When adding a node components, the attributes of the node concept based on the modeling language will be added as well. However, the values of the attributes will be empty.

## Generate graphs from `pcapng` files [Experimental feature]

ASTo can generate graphs using `pcapng` files as an input. This option is only available from the implementation phase menu. t uses `tcpdump` to create a `txt` with the current timestamp and then uses the `txt` to create the `js` file of the graph. The `txt` file is created for debugging purposes and will be deprecated in later commits. The generated files are stored in the `graphs/implementation` directory. Tcpdump is installed by default on Unix based systems. If `tcpdump` is not installed in your system, you will get an error message.

This feature is still experimental and has few issues.

1. Depending on the `pcapng` file, the rendered graph might have some duplicate connections. This is because the `txt` file holds information from incoming and outgoing traffic. That means that a source node will send data to a target node and the target node will send data back to the source node. That results in having the same connection twice but with opposing origins, something like this: `src ➞ trg` and `trg ➞ src`. I have some filtering mechanisms to prevent the duplicates but they are not perfect.
1. IPs that have more than one services running are rendered as separate nodes instead of a single node. That may be useful for some use case but is not compliant with the Apparatus framework. Apparatus uses the concept of 'application' to express services and software running on a device. The aim is to render every detected IP a device node and their services as application nodes.
1. ASTo uses `commonPorts.js` to pair identified ports with common services. For example, port 80 is commonly associated with HTTP and port 22 with SSH. The `commonPorts.js` is still under development. If you find a wrongly identified port, please open an issue.

## Performing security analysis

### Using the console

ASTo has a command line console available on the bottom right corner of the app. You gain focus on the console by pressing the keybinding `cmd + l` for macOs and `ctrl + l` for Windows/Linux. If you type `help`, it will display a list of console options.

The console can be used to search for specific objects in the graph or perform operations. Raw text is used as search input. For example, if you type `device`, ASTo will highlight all the nodes in the graph that have the word `device` as an attribute.

All console commands must be preceded with a `:`. For example, typing `:insights` will perform the security insight functions. On the other hand, typing `insights` (with the `:`) will perform a search operation with the keyword `insights`.

### Design phase (model the idea of a system)

Types of Analysis

* identify threats
* identify assets
* identify constraints
* outward facing nodes
* model social engineering attacks
* develop high-level security policy
* model access control tokens

### Implementation phase (model the implemented system)

Types of Analysis

* identify threats
* identify vulnerabilities
* identify assets
* identify constraints
* identify mechanisms
* outward facing nodes
* model social engineering attacks
* develop low-level security policy
* simulate penetration tests
* model access control tokens

### State diagrams (model the different states of a system)

Types of Analysis

* model different configurations of a system based on detected events
* model different configurations of the system based on the security mechanisms
* identified events can be used as alerts in system monitoring applications

# The architecture of ASTo

ASTo was designed with modularity and extendability in mind. Each module performs a specific function.

As with any Electron application, the first file that is being executed is the `main.js`. The `main.js` renders the `index.html` which is used as the home page of the app, so we can navigate to the different development phases.

Each phase has its own `.js` file where its graphical interface is dynamically generated. The files are stored in the `app/src/phaseUi` directory.

1. Design phase -> `dgnUI.js`
2. Implementation phase -> `impUI.js`
3. State diagrams -> `stateUI.js`

## The `app/src` directory

Inside the `/src` directory you will also notice separate directories for each engineering phase. This is where things start to get interesting 😏. The `core` directory holds all the global modules. The other directories hold the phase-specific modules for each analysis phase (design, design-state, implementation, implementation-state) supported by Apparatus.

The `/scr/index.js` is the main module of ASTo. ASTo has a modular approach. You will see very little logic inside the `index.js`. The majority of the app's logic is imported from external modules in the `initialize.js`.

`initialize.js` is responsible for importing the logic of the app from the other modules.

Inside the `initialize.js`, you will spot a `test` button. Most of the time, there will be no code inside it. I mostly use it to try new functions.

The other function of the `/src/initialize.js` is to define the behavior of the app when the user interacts with the graph. There 6 types of direct interactions (or tapping) with the graph.

1. clicking on a node.
1. right-clicking on a node.
1. clicking on an edge.
1. right-clicking on an edge (only during in state diagrams).
1. clicking on the stage (background).
1. right-clicking on the stage (background).

To capture those events, we use the [cytoscape.js](http://js.cytoscape.org) `.on` method with the `tap` argument. In the ASTo's code, you will see:

```javascript
cy.on('tap', 'node', selection => {
  // do stuff when tapping on node
}
```

As mentioned before, Apparatus supports analysis in several phases. Each phase is expressed by a different metamodel (predefined concepts). The metamodels have different concepts (and attributes) and rules (how concepts interact with other concepts). The rules and the concepts are defined in a schema file. The schema file names follow a simple convention, `<phase>Schema.js`. The schema files are used to validate user created models. If you need to validate a model you created you can click the `module validation` button. That button runs the `<phase>ModuleValidation.js` script of the phase you are currently analyzing. This is useful when importing graphs. During graph editing ASTo will disallow wrong connections based on the metamodel of each phase.

Another thing you will notice is that there are some unique modules in each engineering phase. Those modules are used for specific analysis function that can only be made in that particular phase. For example in the `src/imp` directory, you will find a script named `findVuln.js`. This script parses the attributes of the graph to create a list of keywords and then uses that list to search for known vulnerabilities in vulnerabilities databases.

ASTo can render graphs that stored as `.js` or `.json` files.

If you check the `/src/helpers/cyOptions.js` file, you will the following code (it declares some information about the Cytoscape instant):

```javascript
let cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: graphModel.elements, // .elements matches the .json object
  style: graphStyle.style
})
```

In the fourth line the `system.elements` extension points to the elements object in the rendered graph. That value must be consistent in both the `/src/helpers/cyOptions.js` and the loaded graph file. In your graphs, the `.elements` object stores all the information about the graph (nodes, edges, etc.)

In the style field, we import the stylistic choices of our graph. To make ASTo more modular, the graphs style configuration is stored in the [settings](https://or3stis.github.io/apparatus/docs#the-settings-directory) directory. A cool feature of the tool (and of course cytoscape.js) is when a graph instance is stored, we also store its style choices. If you want you to share the graph with your friends, there is nothing stopping you (besides changing the style field to `graphStyle.style`.
