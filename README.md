# replace-lodash
Utility functions and more to replace lodash

# Docs

## Types

### getType

Better fuction than the standard <i>typeof</i> function of javascript and other than <i>string</i>, <i>object</i> and <i>function</i> it returns:

<ul>
  <li>array</li>
  <li>date</li>
  <li>html</li>
  <li>nan</li>
  <li>null</li>
  <li>error</li>
  <li>promise</li>
  <li>map</li>
  <li>weakmap</li>
  <li>set</li>
  <li>weakset</li>
</ul>

### isString
Return if the passed parameter is string or not

### isFunction
Returns if the passed parameter is function or not

### isObject
Returns if the passed parameter is object or not

### isArray
Returns if the passed parameter is nn array or not

## Objects

### cloneDeep
Creates a deep copy of the javascript objects

### deepEqual
Checks if the two objects have deep equality

### conformsTo
Checks if the given object conforms to the given source by invoking the predicate properties of the source with the corresponding property values of the object.

### getObjectProp
To get the property from the object with stringified path

### setObjectProp
To set the property in the object with the stringified path and value

## Strings

### capFirstLetter
Returns the string with formatting every first letter of the word to upper case

### thousandSeparator
Adds a thousand separator if a string with numbers is passed

### toCamelCase
Converts the string passed to a camel case format

### addHyphen
Replaces the spaces in the string with hyphen

### separator
Replaces the separator with spaces in th the string. Pass string as 1st parameter and separator as 2nd parameter

### isEmpty
Check if the parameter passed is null, undefined or empty or not

## Arrays

### removeDuplicates
Removes the duplicate elements in the array and also array of objects
