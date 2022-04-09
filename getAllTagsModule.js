const getAllUniqueTags = () => [...new Set(Array.from(document.querySelectorAll('*')).map((elt) => elt.tagName.toLowerCase()))].sort()


const getArrayOfTagsAndUniqueAttributes = (tagNamesArray) => {

	return tagNamesArray.map((tagName) => {

		let arrayOfAttributesPerTag = []

		document.querySelectorAll(tagName).forEach(tag => arrayOfAttributesPerTag = [...arrayOfAttributesPerTag, ...tag.getAttributeNames()])

		const arrayOfUniqueAttributesPerTag = [...new Set(arrayOfAttributesPerTag)]

		return {tag: tagName, attributes: arrayOfUniqueAttributesPerTag}
	})

}


const exportFunction = () => getArrayOfTagsAndUniqueAttributes(getAllUniqueTags())

module.export = exportFunction
