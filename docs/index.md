## Foreword

Before installing and using this product, you should have installed the following software and configure the corresponding environment variables:
- JDK: version >= 1.8
- Ant
- Maven
- Node(npm)
- Angular-cli(ng)

### Download the app source

You can download this app source on [GitHub](https://github.com/DreamLi1314/sree).

### Start the application
First you should perform an init once to install the dependencies needed for your project, but only if you need it on the first boot.
``` ant
ant init
```
After each start, you only need to run the following command to start the application:
```ant
ant server
```

### Modify the code for yourself
When you modify the source code, you can execute the following command to compile the source code:
```
ant build
```

