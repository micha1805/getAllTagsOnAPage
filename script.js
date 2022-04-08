const getAllUniqueTags = () => {
	let uniqueTags = [...new Set(Array.from(document.querySelectorAll('*')).map((elt) => elt.tagName.toLowerCase()))]

	return uniqueTags.sort()

}


const getAllUniqueAtributes = (tagNamesArray) =>{

	let allAttributes = []

	tagNamesArray.forEach((tag) => document.querySelectorAll(tag).forEach(tagInstance => allAttributes = [...allAttributes, ...tagInstance.getAttributeNames()]))

	return [...new Set(allAttributes)]

}




const getArrayOfTagsAndUniqueAttributes = (tagNamesArray) => {

	return uniqueTags.map((tagName) => {

		let arrayOfAttributesPerTag = []

		document.querySelectorAll(tagName).forEach(tag => arrayOfAttributesPerTag = [...arrayOfAttributesPerTag, ...tag.getAttributeNames()])

		const arrayOfUniqueAttributesPerTag = [...new Set(arrayOfAttributesPerTag)]

		return {tag: tagName, attributes: arrayOfUniqueAttributesPerTag}
	})

}



///////////////////

const uniqueTags = getAllUniqueTags()

const bigArray = getArrayOfTagsAndUniqueAttributes(uniqueTags)

console.log(bigArray)
