const API_URL =
	'https://cdn.contentful.com/spaces/' +
	process.env.SPACE_ID +
	'/environments/master/entries?access_token=' +
	process.env.ACCESS_TOKEN

const getImage = (id, array) => {
	const img = array.find((f) => {
		return f.sys.id === id
	})
	return img
}

export async function fetchAPI() {
	const url = API_URL.toString()
	const data = await fetch(url, { method: 'GET' })
	return data.json()
}

export async function getAboutMe() {
	const data = await fetchAPI()
	const items = data.items
	const asset = data.includes.Asset
	const newItems = items.filter((i) => {
		return i.sys.contentType.sys.id === 'info'
	})
	const collection = newItems.map((i) => {
		return {
			title: i.fields.titulo,
			description: i.fields.descripcion,
			imageId: i.fields.imagen.sys.id,
			cvId: i.fields.cv?.sys.id,
		}
	})
	collection.forEach((e) => {
		const id = getImage(e.imageId, asset)
		const cvI = getImage(e.cvId, asset)
		e.img = 'https:' + id.fields.file.url
		e.cv = 'https:' + cvI.fields.file.url
	})
	const myInfo = collection.find((i) => {
		return i.title === 'Leandro Martín Roldán'
	})
	return myInfo
}

export async function getMyProjects() {
	const data = await fetchAPI()
	const items = data.items
	const asset = data.includes.Asset
	const newItems = items.filter((i) => {
		return i.sys.contentType.sys.id === 'project'
	})
	const collection = newItems.map((i) => {
		return {
			title: i.fields.title,
			description: i.fields.description,
			url: i.fields.url,
			github: i.fields.github,
			tech: i.fields.tech,
			imageId: i.fields.image.sys.id,
		}
	})
	collection.forEach((e) => {
		const iId = getImage(e.imageId, asset)
		e.img = 'https:' + iId.fields.file.url
	})
	return collection
}
