# Wappler NodeJS Extension - Create/Write/Append Files

Create a file or write to a file using custom encoding and custom flags.


## Installation

    1. Go to your Wappler project root directory
    2. Clone the content of the modules folder to `/extensions/server_connect/modules`
    3. Restart Wappler

## Writing File Content 
### Usage

Create a Server connect flow and search for `Write File`.

### Path

`./my.json` will create a file called my.json in your project's root directory

### Content

Add the content you would like to write to the file

### Encoding

Default: `utf8`
Options: `utf8`, `ascii`, `binary`, `hex`, `base64` and `utf16le`

### Flag

Default: `a`
Options:

|Flag|	Description|
| ------------- | ------------- |
|r|	Open file for reading. An exception occurs if the file does not exist.|
|r+	|Open file for reading and writing. An exception occurs if the file does not exist.|
|rs	|Open file for reading in synchronous mode.|
|rs+|	Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.|
|w	|Open file for writing. The file is created (if it does not exist) or truncated (if it exists).|
|wx	|Like 'w' but fails if the path exists.|
|w+|	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).|
|wx+|	Like 'w+' but fails if path exists.|
|a|	Open file for appending. The file is created if it does not exist.|
|ax	|Like 'a' but fails if the path exists.|
|a+|	Open file for reading and appending. The file is created if it does not exist.|
|ax+|	Like 'a+' but fails if the the path exists.|

## Reading File Content

Read the content of a file with custom encoding.

### Usage

Create a Server connect flow and search for `Read File`.

### File

Enter the path to the file you want to read. For example, `./my.json` will read the file called my.json in your project's root directory.

### Encoding

Default: `utf8`
Options: `utf8`, `ascii`, `binary`, `hex`, `base64` and `utf16le`
