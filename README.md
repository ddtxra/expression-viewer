# expression-viewer

[![NPM version](http://img.shields.io/npm/v/expression-viewer.svg)](https://www.npmjs.org/package/expression-viewer) 
[![Build Status](https://secure.travis-ci.org/gastonnche/expression-viewer.png?branch=master)](http://travis-ci.org/gastonche/expression-viewer) 

> This is a package to aid in the visualisation of various nextprot proteins based on their expression in various human tissues and on various evidences providing these expression data

## Getting Started
Install the module with: `npm install expression-viewer`

```javascript
var viewer = require('expression-viewer');
new Viewer({el:"div",protein:"uniprot", colors:{}}); // "expression chart per tissue for the uniprot"
```

## Documentation

#### colors

**properties**: ``
**positive**: `string` color string
**negative**: `string` color string
**high**: `string` color string
**low**: `string` color string
**medium**: `string` color string

The 'color' option is responsible for choosing custom colors for the bars. it is an optional parameter.

How to use this option

```javascript
colors={
	positive:"lightgreen",
	high:"green",
	medium:"blue",
	low:"lightred",
	negative:"red"
	}
var next = new viewer({el: rootDiv,protein:'NX_P01308',colors:colors});
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/gastonnche/expression-viewer/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2016, shizle

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
